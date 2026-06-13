'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle2, Loader2, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { login, signUp, validateEmail } from '@/lib/auth'

type Mode = 'signup' | 'login'

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/app'
  const isSignup = mode === 'signup'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const title = isSignup ? 'Create your CropIntel account' : 'Log in to CropIntel'
  const subtitle = isSignup
    ? 'Start using disease diagnosis, farm onboarding, history, and outbreak monitoring.'
    : 'Open the protected product workspace for diagnosis and outbreak tools.'

  const passwordHint = useMemo(() => {
    if (!password) return 'Use at least 8 characters.'
    if (password.length < 8) return 'Password is too short.'
    return 'Password length looks good.'
  }, [password])

  function validate() {
    if (!validateEmail(email)) return 'Enter a valid email address.'
    if (password.length < 8) return 'Password must be at least 8 characters.'
    if (isSignup && password !== confirmPassword) return 'Passwords do not match.'
    return null
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    window.setTimeout(() => {
      try {
        if (isSignup) {
          signUp(email, password, name)
          setSuccess('Account created. Opening CropIntel app.')
        } else {
          login(email, password)
          setSuccess('Signed in. Opening CropIntel app.')
        }
        window.setTimeout(() => router.push(next), 450)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication failed.')
      } finally {
        setLoading(false)
      }
    }, 450)
  }

  return (
    <div className="field-card overflow-hidden">
      <div className="border-b border-stone-200 bg-[#f4efe3] px-6 py-6 sm:px-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-800 text-white">
          <LockKeyhole className="h-5 w-5" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8">
        {isSignup && (
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">Name</span>
            <span className="mt-2 flex items-center gap-3 rounded-2xl border border-stone-300 bg-white px-4 py-3 focus-within:border-primary-700">
              <UserRound className="h-4 w-4 text-slate-500" />
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Farm or team name"
                autoComplete="name"
              />
            </span>
          </label>
        )}

        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Email</span>
          <span className="mt-2 flex items-center gap-3 rounded-2xl border border-stone-300 bg-white px-4 py-3 focus-within:border-primary-700">
            <Mail className="h-4 w-4 text-slate-500" />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full bg-transparent text-sm outline-none"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Password</span>
          <span className="mt-2 flex items-center gap-3 rounded-2xl border border-stone-300 bg-white px-4 py-3 focus-within:border-primary-700">
            <LockKeyhole className="h-4 w-4 text-slate-500" />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Minimum 8 characters"
              type="password"
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              required
            />
          </span>
          <span className="mt-2 block text-xs text-slate-500">{passwordHint}</span>
        </label>

        {isSignup && (
          <label className="block">
            <span className="text-sm font-semibold text-slate-800">Confirm password</span>
            <span className="mt-2 flex items-center gap-3 rounded-2xl border border-stone-300 bg-white px-4 py-3 focus-within:border-primary-700">
              <LockKeyhole className="h-4 w-4 text-slate-500" />
              <input
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Repeat password"
                type="password"
                autoComplete="new-password"
                required
              />
            </span>
          </label>
        )}

        {error && (
          <div className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="flex gap-3 rounded-2xl border border-primary-200 bg-primary-50 px-4 py-3 text-sm text-primary-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSignup ? 'Create account' : 'Log in'}
        </button>

        <p className="text-center text-sm text-slate-600">
          {isSignup ? 'Already have an account?' : 'Need an account?'}{' '}
          <Link href={isSignup ? '/login' : '/signup'} className="font-bold text-primary-800 hover:text-primary-900">
            {isSignup ? 'Log in' : 'Sign up'}
          </Link>
        </p>
      </form>
    </div>
  )
}
