// lib/sanity.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'cwr9ktet',
  dataset: 'production',
  useCdn: true, // true, jos haluat käyttää CDN:ää tuotannossa
  apiVersion: '2023-01-01', // käytä uusinta API-versiota
  // token: process.env.SANITY_API_READ_TOKEN, // Jos tarvitset tokenin private datan hakuun
});