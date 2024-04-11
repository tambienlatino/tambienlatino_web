import Link from 'next/link';

export default function Navigation() {
 return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </nav>
 );
}
