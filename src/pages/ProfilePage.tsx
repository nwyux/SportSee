/**
 * @fileoverview Profile page — fetches and renders the user dashboard.
 * Reads the :id param from the URL, calls useUserData, handles loading/error states.
 */

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useUserData } from '../hooks/useUserData'
import UserDashboard from '../components/dashboard/UserDashboard'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { AlertCircle } from 'lucide-react'

/** List of demo users for the switcher */
const DEMO_USERS = [
  { id: 12, name: 'Karl' },
  { id: 18, name: 'Cecilia' },
]

/**
 * Profile page — resolves user ID from URL, fetches data, renders dashboard or error state.
 */
export default function ProfilePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const userId = Number(id)

  // Redirect to default user if invalid
  useEffect(() => {
    if (!id || isNaN(userId)) {
      navigate('/user/12', { replace: true })
    }
  }, [id, userId, navigate])

  const { data, loading, error } = useUserData(userId)

  if (loading) {
    return (
      <main className="min-h-screen pl-[117px] pt-[91px] flex items-center justify-center">
        <LoadingSpinner message="Chargement du profil…" />
      </main>
    )
  }

  if (error || !data) {
    return (
      <main className="min-h-screen pl-[117px] pt-[91px] flex flex-col items-center justify-center gap-4 px-8">
        <AlertCircle className="w-12 h-12 text-[#FF0000]" />
        <h2 className="text-xl font-bold text-[#282D30]">Utilisateur introuvable</h2>
        <p className="text-[#74798C] text-center max-w-md">
          {error ?? "Impossible de charger les données. Vérifiez que le backend est lancé ou que l'ID est valide."}
        </p>
        {/* Demo switcher */}
        <div className="flex gap-3 mt-4">
          {DEMO_USERS.map((user) => (
            <button
              key={user.id}
              id={`demo-user-${user.id}`}
              onClick={() => navigate(`/user/${user.id}`)}
              className="px-5 py-2 bg-[#FF0000] text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Voir {user.name}
            </button>
          ))}
        </div>
      </main>
    )
  }

  return (
    <>
      {/* Demo user switcher (top-right badge) */}
      <div className="fixed top-[100px] right-4 z-40 flex gap-2">
        {DEMO_USERS.map((user) => (
          <button
            key={user.id}
            id={`switch-user-${user.id}`}
            onClick={() => navigate(`/user/${user.id}`)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
              userId === user.id
                ? 'bg-[#FF0000] text-white scale-105'
                : 'bg-white text-[#282D30] hover:bg-gray-100'
            }`}
          >
            {user.name}
          </button>
        ))}
      </div>

      <UserDashboard data={data} />
    </>
  )
}
