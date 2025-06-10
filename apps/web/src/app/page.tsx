import Layout from '../components/Layout'

type HomeProps = {
  header: { title: { [lang: string]: string } };
  footer: {
    text?: { [lang: string]: string };
    links?: { [lang: string]: string[] };
  };
};

export default function Home({ header, footer }: HomeProps) {
  return (
    <Layout header={header} footer={footer}>
      {/* Main content */}
      <></>
    </Layout>
  )
}