import { createClient } from 'next-sanity'
import { apiVersion, dataset, hasSanityEnv, projectId } from '../env'

export const client = hasSanityEnv
    ? createClient({
          projectId,
          dataset,
          apiVersion,
          useCdn: false, // Disable CDN for tag-based revalidation with Next.js
      })
    : null
