"use client"; // This component uses client-side hooks like useRouter and useParams



type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
      <main>{children}</main>
  );
}