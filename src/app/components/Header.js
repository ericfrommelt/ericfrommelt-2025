
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/EF-HeaderIcon.svg';

export default function Header() { 
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" width={40} height={40} className="h-10 w-10 dark:invert" />
        </Link>
        </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline medium">Work</Link></li>
          <li><Link href="/info" className="hover:underline medium">Info</Link></li>
        </ul>
      </nav>
    </header>
  );
}