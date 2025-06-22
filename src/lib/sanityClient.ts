import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  // Use Vite's method for accessing environment variables
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,

  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-06-07', // use a UTC date in YYYY-MM-DD format
});