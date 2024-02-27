import Image from 'next/image';
import Link from 'next/link';
import BaseButton from './BaseButton';
import BaseNavBar from './BaseNavBar';

interface BaseHeaderProps {}

export default function BaseHeader({}: BaseHeaderProps) {
  return (
    <header className='h-[96px] max-w-[1280px] container mx-auto px-4 flex justify-between '>
      {/* START: Logo block */}
      <div className='h-full flex items-center justify-center'>
        <Link href='/'>
          <Image alt='logo' src='/images/logo.svg' width={166} height={30} />
        </Link>
      </div>
      {/* END */}

      {/* START: Button group */}
      <nav className='hidden sm:block h-full'>
        <ul className='h-full flex items-center justify-center'>
          <li>
            <BaseButton variant='text'>
              <Link href='/'>Ready to changing?</Link>
            </BaseButton>
          </li>
          <li>
            <BaseButton variant='secondary'>
              <Link href='/'>Insta Benefit</Link>
            </BaseButton>
          </li>
        </ul>
      </nav>
      {/* END */}

      {/* START: Navbar for mobile device*/}
      <BaseNavBar />
      {/* END */}
    </header>
  );
}
