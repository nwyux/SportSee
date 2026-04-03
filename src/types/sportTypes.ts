/**
 * @fileoverview Shared TypeScript interfaces for the SportSee application.
 * These types represent the normalized data structures used across all components.
 */

// ─────────────────────────────────────────────
// Raw API response types (as returned by the backend)
// ─────────────────────────────────────────────

/** Raw user data returned by GET /user/:id */
export interface RawUser {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  todayScore?: number
  score?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

/** Raw activity session returned by GET /user/:id/activity */
export interface RawActivitySession {
  day: string
  kilogram: number
  calories: number
}

/** Raw activity data */
export interface RawActivity {
  userId: number
  sessions: RawActivitySession[]
}

/** Raw average session returned by GET /user/:id/average-sessions */
export interface RawAverageSession {
  day: number  // 1 = Monday, 7 = Sunday
  sessionLength: number
}

/** Raw average sessions data */
export interface RawAverageSessions {
  userId: number
  sessions: RawAverageSession[]
}

/** Raw performance kind map */
export interface RawPerformanceKind {
  [key: number]: string
}

/** Raw performance data entry */
export interface RawPerformanceData {
  value: number
  kind: number
}

/** Raw performance data */
export interface RawPerformance {
  userId: number
  kind: RawPerformanceKind
  data: RawPerformanceData[]
}

// ─────────────────────────────────────────────
// Normalized data types (used in components)
// ─────────────────────────────────────────────

/** Normalized user info */
export interface UserInfo {
  id: number
  firstName: string
  lastName: string
  age: number
  todayScore: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

/** Normalized daily activity entry (for BarChart) */
export interface ActivityDay {
  /** Display label e.g. "1", "2", "3"… */
  day: string
  kilogram: number
  calories: number
}

/** Normalized average session entry (for LineChart) */
export interface AverageSession {
  /** Day label e.g. "L", "M", "M", "J", "V", "S", "D" */
  day: string
  sessionLength: number
}

/** Normalized performance entry (for RadarChart) */
export interface PerformanceEntry {
  subject: string
  value: number
}

/** Full user dataset aggregated from all 4 endpoints */
export interface UserDashboardData {
  userInfo: UserInfo
  activity: ActivityDay[]
  averageSessions: AverageSession[]
  performance: PerformanceEntry[]
}

/** Key data card configuration */
export interface KeyDataConfig {
  label: string
  value: string
  unit: string
  color: string
  iconBg: string
}
