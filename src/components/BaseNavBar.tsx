import Image from 'next/image';
import BaseButton from './BaseButton';
import Link from 'next/link';

interface BaseNavBarProps {}

export default function BaseNavBar({}: BaseNavBarProps) {
  return (
    <nav className='flex sm:hidden items-center'>
      {/* START: Hidden checkbox to trigger open/close menu  */}
      <input
        hidden
        type='checkbox'
        className='peer/nav-mobile-input'
        id='nav-mobile-input'
      />
      {/* END */}

      {/* START :  Burger icon*/}
      <label htmlFor='nav-mobile-input'>
        <Image
          className='cursor-pointer'
          src='/images/menu.svg'
          alt='burger menu'
          height={32}
          width={30}
        />
      </label>
      {/* END:  */}

      {/* START: Overlay when navbar menu open */}
      <label
        htmlFor='nav-mobile-input'
        className='hidden peer-checked/nav-mobile-input:block fixed top-0 right-0 left-0 bottom-0 bg-black/30 animate-[fadeIn]'
      />
      {/* END */}

      {/* START: Horizontal menu items */}
      <ul className='hidden peer-checked/nav-mobile-input:block peer-checked/nav-mobile-input:translate-x-0 peer-checked/nav-mobile-input:opacity-1 fixed top-0 right-0 bottom-0 w-4/5 bg-[#fff] transition-transform translate-x-[100%]'>
        <ul className='h-full flex flex-col-reverse items-center justify-center gap-4 mx-2'>
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
      </ul>
      {/* END*/}

      {/* START :  Close icon*/}
      <label
        htmlFor='nav-mobile-input'
        className='hidden peer-checked/nav-mobile-input:block top-6 right-4 fixed'
      >
        <Image
          src='/images/close.svg'
          alt='close-icon'
          height={32}
          width={30}
        />
      </label>
      {/* END */}
    </nav>
  );
}
