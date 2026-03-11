// src/sanity/env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

export const hasSanityEnv = Boolean(
    process.env.NEXT_PUBLIC_SANITY_DATASET && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
)
