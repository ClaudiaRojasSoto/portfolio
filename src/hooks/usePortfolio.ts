import { useCallback, useEffect, useState } from 'react'
import type { Portfolio } from '../types/portfolio.ts'

type PortfolioState =
  | { status: 'loading'; data?: undefined }
  | { status: 'ready'; data: Portfolio }
  | { status: 'error'; data?: undefined }

const apiBase = import.meta.env.VITE_API_URL ?? ''

export function usePortfolio() {
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<PortfolioState>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    async function loadPortfolio() {
      setState({ status: 'loading' })

      try {
        const response = await fetch(`${apiBase}/api/v1/portfolio`, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) throw new Error('Portfolio request failed')

        const data = (await response.json()) as Portfolio
        setState({ status: 'ready', data })
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({ status: 'error' })
      }
    }

    void loadPortfolio()
    return () => controller.abort()
  }, [attempt])

  const reload = useCallback(() => {
    setAttempt((value) => value + 1)
  }, [])

  return { ...state, reload }
}
