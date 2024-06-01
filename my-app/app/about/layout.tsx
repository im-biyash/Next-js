import Link from "next/link";
interface AboutLayoutProps {
    children: React.ReactNode;
}

export default function aboutLayout({ children }: AboutLayoutProps) {
    return (
      <>
        <h1>HI I'm about</h1>
        <main>
          {children}
        </main>
        <Link href="/">link to home page</Link>
      </>
    );
}
