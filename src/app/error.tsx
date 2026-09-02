import { Button } from '@/components/ui/Button'

'use client'

// TODO: IMPLEMENT GLOBAL ERROR

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h1>Coś poszło nie tak</h1>
      <button onClick={reset}>Spróbuj ponownie</button>
    </div>
  )
}

