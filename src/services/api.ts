/**
 * @fileoverview API service layer.
 * All HTTP calls are made here, outside components.
 * Reads VITE_USE_MOCK to switch between mock data and the real API.
 */

import { MOCK_USERS } from '../mocks/mockedData'
import {
  UserModel,
  ActivityModel,
  AverageSessionsModel,
  PerformanceModel,
} from './dataModels'
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

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000'

// ─────────────────────────────────────────────
// Generic fetch helper
// ─────────────────────────────────────────────

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status} for ${url}`)
  }
  const json = (await response.json()) as { data: T }
  return json.data
}

// ─────────────────────────────────────────────
// Public API functions
// ─────────────────────────────────────────────

/**
 * Fetches and normalizes user main info.
 * @param userId - The user ID (12 or 18)
 */
export async function getUserInfo(userId: number): Promise<UserInfo> {
  if (USE_MOCK) {
    const mockUser = MOCK_USERS[userId]
    if (!mockUser) throw new Error(`No mock data for user ${userId}`)
    return new UserModel(mockUser.main).data
  }
  const raw = await fetchJson<RawUser>(`${API_BASE}/user/${userId}`)
  return new UserModel(raw).data
}

/**
 * Fetches and normalizes user activity data.
 * @param userId - The user ID (12 or 18)
 */
export async function getUserActivity(userId: number): Promise<ActivityDay[]> {
  if (USE_MOCK) {
    const mockUser = MOCK_USERS[userId]
    if (!mockUser) throw new Error(`No mock data for user ${userId}`)
    return new ActivityModel(mockUser.activity).data
  }
  const raw = await fetchJson<RawActivity>(`${API_BASE}/user/${userId}/activity`)
  return new ActivityModel(raw).data
}

/**
 * Fetches and normalizes user average session length data.
 * @param userId - The user ID (12 or 18)
 */
export async function getUserAverageSessions(userId: number): Promise<AverageSession[]> {
  if (USE_MOCK) {
    const mockUser = MOCK_USERS[userId]
    if (!mockUser) throw new Error(`No mock data for user ${userId}`)
    return new AverageSessionsModel(mockUser.averageSessions).data
  }
  const raw = await fetchJson<RawAverageSessions>(
    `${API_BASE}/user/${userId}/average-sessions`
  )
  return new AverageSessionsModel(raw).data
}

/**
 * Fetches and normalizes user performance data.
 * @param userId - The user ID (12 or 18)
 */
export async function getUserPerformance(userId: number): Promise<PerformanceEntry[]> {
  if (USE_MOCK) {
    const mockUser = MOCK_USERS[userId]
    if (!mockUser) throw new Error(`No mock data for user ${userId}`)
    return new PerformanceModel(mockUser.performance).data
  }
  const raw = await fetchJson<RawPerformance>(
    `${API_BASE}/user/${userId}/performance`
  )
  return new PerformanceModel(raw).data
}
