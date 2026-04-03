/**
 * @fileoverview Data model classes (adapter pattern).
 * Each class takes raw API data and normalizes it into the shape
 * expected by the Recharts components, handling API inconsistencies
 * (e.g., `todayScore` vs `score`).
 */

import type {
  RawUser,
  RawActivity,
  RawAverageSessions,
  RawPerformance,
  UserInfo,
  ActivityDay,
  AverageSession,
  PerformanceEntry,
} from '../types/sportTypes'

/** Day abbreviation map: 1 (Mon) → "L", 7 (Sun) → "D" */
const DAY_LABELS: Record<number, string> = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
}

/** French translation for performance kinds */
const KIND_LABELS: Record<string, string> = {
  cardio: 'Cardio',
  energy: 'Énergie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
}

/**
 * Normalizes raw user data from the API.
 * Handles the `todayScore` / `score` discrepancy between users.
 */
export class UserModel {
  readonly data: UserInfo

  constructor(raw: RawUser) {
    this.data = {
      id: raw.id,
      firstName: raw.userInfos.firstName,
      lastName: raw.userInfos.lastName,
      age: raw.userInfos.age,
      todayScore: raw.todayScore ?? raw.score ?? 0,
      keyData: {
        calorieCount: raw.keyData.calorieCount,
        proteinCount: raw.keyData.proteinCount,
        carbohydrateCount: raw.keyData.carbohydrateCount,
        lipidCount: raw.keyData.lipidCount,
      },
    }
  }
}

/**
 * Normalizes raw activity data.
 * Converts ISO date strings to sequential day labels (1, 2, 3…).
 */
export class ActivityModel {
  readonly data: ActivityDay[]

  constructor(raw: RawActivity) {
    this.data = raw.sessions.map((session, index) => ({
      day: String(index + 1),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }
}

/**
 * Normalizes raw average sessions data.
 * Converts numeric day IDs to French abbreviations (L, M, M, J, V, S, D).
 */
export class AverageSessionsModel {
  readonly data: AverageSession[]

  constructor(raw: RawAverageSessions) {
    this.data = raw.sessions.map((session) => ({
      day: DAY_LABELS[session.day] ?? String(session.day),
      sessionLength: session.sessionLength,
    }))
  }
}

/**
 * Normalizes raw performance data.
 * Maps kind IDs to French labels and reorders for radar display:
 * Intensité → Vitesse → Force → Endurance → Énergie → Cardio
 */
export class PerformanceModel {
  readonly data: PerformanceEntry[]

  constructor(raw: RawPerformance) {
    const RADAR_ORDER = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio']

    const mapped = raw.data.map((entry) => ({
      subject: KIND_LABELS[raw.kind[entry.kind]] ?? raw.kind[entry.kind],
      value: entry.value,
      kind: raw.kind[entry.kind],
    }))

    this.data = RADAR_ORDER.map(
      (kindKey) =>
        mapped.find((e) => e.kind === kindKey) ?? {
          subject: KIND_LABELS[kindKey] ?? kindKey,
          value: 0,
        }
    )
  }
}
