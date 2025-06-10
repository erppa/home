import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'cwr9ktet',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})

export async function getStaticProps() {
  const header = await client.fetch(`*[_type == "header"][0]`)
  const footer = await client.fetch(`*[_type == "footer"][0]`)
  return { props: { header, footer } }
}