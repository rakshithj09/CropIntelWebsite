import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AuthForm from '@/components/AuthForm'
import { BrandMark } from '@/components/PublicSite'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f4efe3] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <BrandMark />
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-primary-900">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
        <div className="grid gap-10 py-14 lg:grid-cols-[.85fr_.75fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">Welcome back</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">
              Log in to continue crop disease analysis
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Access the protected CropIntel app area for image diagnosis, guidance, history, and outbreak reporting.
            </p>
          </div>
          <Suspense fallback={<div className="field-card min-h-[420px] animate-pulse" />}>
            <AuthForm mode="login" />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
