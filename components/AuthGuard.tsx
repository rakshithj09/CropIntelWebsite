'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, LockKeyhole } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setAllowed(true)
      setChecking(false)
      return
    }

    setChecking(false)
    const timer = window.setTimeout(() => router.replace('/login?next=/app'), 900)
    return () => window.clearTimeout(timer)
  }, [router])

  if (checking) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f7f5ed] px-6">
        <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
          <Loader2 className="h-4 w-4 animate-spin text-primary-700" />
          Checking account access
        </div>
      </main>
    )
  }

  if (!allowed) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f7f5ed] px-6">
        <div className="max-w-md rounded-[1.5rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-800">
            <LockKeyhole className="h-5 w-5" />
          </div>
          <h1 className="mt-5 text-2xl font-semibold text-slate-950">Sign in to open CropIntel</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The diagnosis, history, farm profile, and outbreak tools are available inside the app area.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/login?next=/app" className="btn-primary">
              Log in
            </Link>
            <Link href="/signup" className="btn-secondary">
              Create account
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return <>{children}</>
}
