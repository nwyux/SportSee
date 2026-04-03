/**
 * @fileoverview Loading spinner component displayed during data fetch.
 */

interface LoadingSpinnerProps {
  /** Optional message displayed under the spinner */
  message?: string
}

/**
 * Centered animated spinner with optional status message.
 */
export default function LoadingSpinner({ message = 'Chargement…' }: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label={message}
      className="flex flex-col items-center justify-center gap-4 py-20"
    >
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF0000] rounded-full animate-spin" />
      <p className="text-[#74798C] text-sm font-medium">{message}</p>
    </div>
  )
}
