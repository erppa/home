// app/[lang]/layout.tsx

// Varmista, että clientti on importoitu oikeasta paikasta
import '../globals.css'; // Oletetaan, että globaalit tyylit ovat samassa kansiossa
import { client } from '../../utils/sanity'; // Oletetaan, että lib/sanity.ts on kaksi tasoa ylempänä

// Määritä tyypit Sanitysta tulevalle datalle (voit tarkentaa näitä)
interface SanityHeader {
  title?: { [lang: string]: string };
  navigationItems?: { [lang: string]: string[] };
  // Lisää muita header-tietoja, kuten navigaatio, logo jne.
}

interface SanityFooter {
  text?: { [lang: string]: string };
  links?: { [lang: string]: string[] };
  // Lisää muita alatunnistedataan kuuluvia kenttiä
}

// Importoi oma asiakaspuolen Layout-komponenttisi
// Update the import path and filename extension if necessary
import ClientSideFooter from '../../components/Footer';
import ClientSideHeader from '../../components/Header';
import ClientSideMain from '../../components/Main';

// Datan haku funktio (vain palvelinpuolella)
async function getLayoutData(): Promise<{ header?: SanityHeader; footer?: SanityFooter }> {
  // Huom: *[_type == "header"][0] hakee ensimmäisen header-tyyppisen dokumentin.
  // Varmista, että Sanity-schemassasi on sellainen.
  const header = await client.fetch<SanityHeader | null>(`*[_type == "header"][0]`);
  const footer = await client.fetch<SanityFooter | null>(`*[_type == "footer"][0]`);

  return { header: header || undefined, footer: footer || undefined }; // Palauta undefined jos dataa ei löydy
}

export default async function LangLayout({
  children,
  params: { lang }, // Oletetaan, että lang on reittiparametri (esim. /fi tai /en)
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { header, footer } = await getLayoutData();

  // Varmista, että header ja footer löytyivät.
  // Jos ne ovat undefined, se voi aiheuttaa virheitä myöhemmin.
  // Voit näyttää varavalon tai heittää virheen, jos data on kriittistä.
  if (!header) {
    console.error("Sanity: Header data not found.");
    // Voit palauttaa vaikka tyhjän sivun tai virhesivun tässä
    // return <div>Error: Header data missing.</div>;
  }
  if (!footer) {
    console.error("Sanity: Footer data not found.");
  }

  return (
    <html lang={lang}>
      <body>
        {/* Välitä haetut propsit asiakaspuolen komponentillesi */}
        <ClientSideHeader {...(header || {})} />
        <ClientSideMain>
          {children}
        </ClientSideMain>
        {/* Footer-komponentti */}
        <ClientSideFooter {...(footer || {})} />
      </body>
    </html>
  );
}