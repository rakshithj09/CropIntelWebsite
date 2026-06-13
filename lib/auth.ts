'use client'

export type AuthUser = {
  email: string
  name?: string
  createdAt: string
}

type StoredAccount = AuthUser & {
  password: string
}

const ACCOUNT_KEY = 'cropintel.accounts'
const SESSION_KEY = 'cropintel.session'

function readAccounts(): StoredAccount[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(window.localStorage.getItem(ACCOUNT_KEY) || '[]')
  } catch {
    return []
  }
}

function writeAccounts(accounts: StoredAccount[]) {
  window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts))
}

function toUser(account: StoredAccount): AuthUser {
  return {
    email: account.email,
    name: account.name,
    createdAt: account.createdAt,
  }
}

export function getCurrentUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  const email = window.localStorage.getItem(SESSION_KEY)
  if (!email) return null
  const account = readAccounts().find((item) => item.email === email)
  return account ? toUser(account) : null
}

export function signUp(email: string, password: string, name?: string): AuthUser {
  const normalizedEmail = email.trim().toLowerCase()
  const accounts = readAccounts()
  if (accounts.some((account) => account.email === normalizedEmail)) {
    throw new Error('An account with this email already exists.')
  }

  const account: StoredAccount = {
    email: normalizedEmail,
    password,
    name: name?.trim() || undefined,
    createdAt: new Date().toISOString(),
  }
  writeAccounts([...accounts, account])
  window.localStorage.setItem(SESSION_KEY, normalizedEmail)
  return toUser(account)
}

export function login(email: string, password: string): AuthUser {
  const normalizedEmail = email.trim().toLowerCase()
  const account = readAccounts().find((item) => item.email === normalizedEmail)
  if (!account || account.password !== password) {
    throw new Error('Email or password is incorrect.')
  }
  window.localStorage.setItem(SESSION_KEY, normalizedEmail)
  return toUser(account)
}

export function logout() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(SESSION_KEY)
}

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
