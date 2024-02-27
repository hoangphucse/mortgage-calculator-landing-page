'use client';
import { useState } from 'react';
import BaseButton from './BaseButton';
import MortgageCalculator from './MortgageCalculator';
import { MortgageKey } from '@/models/common';

export default function MortgageBlock() {
  const [mortgage, setMortgage] = useState({
    purchasePrice: {
      value: 450000,
      range: {
        min: 0,
        max: 900000,
      },
    },

    downPayment: {
      value: 135000,
      range: {
        min: 0,
        max: 300000,
      },
    },

    repaymentTime: {
      value: 25,
      range: {
        min: 0,
        max: 60,
      },
    },

    interestRate: {
      value: 3,
      range: {
        min: 0,
        max: 16,
      },
    },
  });

  const handleClickRegister = () => {
    // Do some action here
  };

  const handleMortgageValueChange = (
    key: MortgageKey,
    value: number | string
  ) => {
    setMortgage({ ...mortgage, [key]: { ...mortgage[key], value } });
  };

  return (
    <section className='max-w-[1280px] container mx-auto mt-[169px] mb-[177px] px-4 grid grid-cols-12 gap-[24px]'>
      {/* START:  Instruction */}
      <article className='md:col-span-5 col-span-12'>
        <h1 className='font-[600] text-[40px] leading-[56px]'>
          Try our awesome Calculator
        </h1>
        <p className='mt-[16px] mb-[24px] text-[#585C65] text-[18px] leading-[32px] font-[400]'>
          Adjust the purchase price, down payment, and interest rate to fit your
          budget.
        </p>
        <BaseButton variant='primary' onClick={handleClickRegister}>
          Register
        </BaseButton>
      </article>
      {/* END */}

      {/* START:  Mortgage CalCulator */}
      <aside className='md:col-span-7 col-span-12'>
        <MortgageCalculator
          {...mortgage}
          onChange={handleMortgageValueChange}
        />
      </aside>
      {/* END */}
    </section>
  );
}
