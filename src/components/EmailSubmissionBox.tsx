'use client';
import Image from 'next/image';
import { useState } from 'react';
import BaseButton from './BaseButton';

interface EmailSubmissionBox {}

export default function EmailSubmissionBox() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmitEmail = () => {
    // Do some action here
  };

  return (
    <div className='p-[8px] pl-[32px] bg-white rounded-[40px] flex items-center justify-center gap-[12px] max-w-[552px]'>
      <div>
        <Image src='/images/mail.svg' alt='Email icon' width={24} height={24} />
      </div>
      <div className='flex-1'>
        <input
          value={email}
          className='w-full py-2 outline-none border-none text-[14px] lg:text[16px]'
          type='text'
          placeholder='Enter your email'
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <BaseButton
          variant='primary'
          className='text-[14px] lg:text[16px]'
          onClick={handleSubmitEmail}
        >
          Get Early Access
        </BaseButton>
      </div>
    </div>
  );
}
