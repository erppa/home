"use client"; // This component uses client-side hooks like useRouter and useParams

import { useParams } from 'next/navigation';
// If you still need other useRouter functionalities, you can keep the import:
// import { useRouter } from 'next/navigation';

type header = { 
    title?: { [lang: string]: string };
    navigationItems?: { [lang: string]: string[] };
  };
export default function Layout({ title }: header) {
  // Access dynamic route parameters.
  // Assuming your folder structure is like app/[lang]/layout.tsx or app/[lang]/page.tsx
  const params = useParams();
  const lang = params.lang as string || 'en'; // 'lang' should match your dynamic segment name

  // If you were to need asPath for other reasons, you could still use ita:
  // const { asPath } = useRouter();

  return (
      <header>
        <h1>{title?.[lang]}</h1>
        {/* Render navigation */}
      </header>
  );
}