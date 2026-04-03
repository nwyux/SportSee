/**
 * @fileoverview Mock data for the SportSee application.
 * Used when VITE_USE_MOCK=true (default). Mirrors the exact shape
 * returned by the backend API for users 12 and 18.
 */

import type {
  RawUser,
  RawActivity,
  RawAverageSessions,
  RawPerformance,
} from '../types/sportTypes'

// ─────────────────────────────────────────────
// User 12
// ─────────────────────────────────────────────

export const USER_12_MAIN: RawUser = {
  id: 12,
  userInfos: {
    firstName: 'Karl',
    lastName: 'Dovineau',
    age: 31,
  },
  score: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
}

export const USER_12_ACTIVITY: RawActivity = {
  userId: 12,
  sessions: [
    { day: '2020-07-01', kilogram: 80, calories: 240 },
    { day: '2020-07-02', kilogram: 80, calories: 220 },
    { day: '2020-07-03', kilogram: 81, calories: 280 },
    { day: '2020-07-04', kilogram: 81, calories: 290 },
    { day: '2020-07-05', kilogram: 80, calories: 160 },
    { day: '2020-07-06', kilogram: 78, calories: 162 },
    { day: '2020-07-07', kilogram: 76, calories: 390 },
  ],
}

export const USER_12_AVERAGE_SESSIONS: RawAverageSessions = {
  userId: 12,
  sessions: [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 23 },
    { day: 3, sessionLength: 45 },
    { day: 4, sessionLength: 50 },
    { day: 5, sessionLength: 0 },
    { day: 6, sessionLength: 60 },
    { day: 7, sessionLength: 50 },
  ],
}

export const USER_12_PERFORMANCE: RawPerformance = {
  userId: 12,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    { value: 80, kind: 1 },
    { value: 120, kind: 2 },
    { value: 140, kind: 3 },
    { value: 50, kind: 4 },
    { value: 200, kind: 5 },
    { value: 90, kind: 6 },
  ],
}

// ─────────────────────────────────────────────
// User 18
// ─────────────────────────────────────────────

export const USER_18_MAIN: RawUser = {
  id: 18,
  userInfos: {
    firstName: 'Cecilia',
    lastName: 'Ratorez',
    age: 34,
  },
  todayScore: 0.3,
  keyData: {
    calorieCount: 2500,
    proteinCount: 90,
    carbohydrateCount: 150,
    lipidCount: 120,
  },
}

export const USER_18_ACTIVITY: RawActivity = {
  userId: 18,
  sessions: [
    { day: '2020-07-01', kilogram: 70, calories: 240 },
    { day: '2020-07-02', kilogram: 69, calories: 220 },
    { day: '2020-07-03', kilogram: 70, calories: 280 },
    { day: '2020-07-04', kilogram: 70, calories: 500 },
    { day: '2020-07-05', kilogram: 69, calories: 160 },
    { day: '2020-07-06', kilogram: 69, calories: 162 },
    { day: '2020-07-07', kilogram: 68, calories: 390 },
  ],
}

export const USER_18_AVERAGE_SESSIONS: RawAverageSessions = {
  userId: 18,
  sessions: [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 40 },
    { day: 3, sessionLength: 50 },
    { day: 4, sessionLength: 30 },
    { day: 5, sessionLength: 30 },
    { day: 6, sessionLength: 50 },
    { day: 7, sessionLength: 50 },
  ],
}

export const USER_18_PERFORMANCE: RawPerformance = {
  userId: 18,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    { value: 200, kind: 1 },
    { value: 240, kind: 2 },
    { value: 110, kind: 3 },
    { value: 80, kind: 4 },
    { value: 80, kind: 5 },
    { value: 220, kind: 6 },
  ],
}

// ─────────────────────────────────────────────
// Mock store by user ID
// ─────────────────────────────────────────────

export const MOCK_USERS: Record<
  number,
  {
    main: RawUser
    activity: RawActivity
    averageSessions: RawAverageSessions
    performance: RawPerformance
  }
> = {
  12: {
    main: USER_12_MAIN,
    activity: USER_12_ACTIVITY,
    averageSessions: USER_12_AVERAGE_SESSIONS,
    performance: USER_12_PERFORMANCE,
  },
  18: {
    main: USER_18_MAIN,
    activity: USER_18_ACTIVITY,
    averageSessions: USER_18_AVERAGE_SESSIONS,
    performance: USER_18_PERFORMANCE,
  },
}
