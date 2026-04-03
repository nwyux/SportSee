/**
 * @fileoverview Custom hook that aggregates all user data calls into a single hook.
 * Handles loading, error, and success states.
 */

import { useState, useEffect } from 'react'
import {
  getUserInfo,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../services/api'
import type { UserDashboardData } from '../types/sportTypes'

interface UseUserDataResult {
  data: UserDashboardData | null
  loading: boolean
  error: string | null
}

/**
 * Fetches and aggregates all data for a given user dashboard.
 * @param userId - The numeric user ID
 */
export function useUserData(userId: number): UseUserDataResult {
  const [data, setData] = useState<UserDashboardData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchAll() {
      setLoading(true)
      setError(null)
      setData(null)

      try {
        const [userInfo, activity, averageSessions, performance] = await Promise.all([
          getUserInfo(userId),
          getUserActivity(userId),
          getUserAverageSessions(userId),
          getUserPerformance(userId),
        ])

        if (!cancelled) {
          setData({ userInfo, activity, averageSessions, performance })
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : 'Une erreur est survenue lors du chargement des données.'
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void fetchAll()

    return () => {
      cancelled = true
    }
  }, [userId])

  return { data, loading, error }
}
