import { MortgageKey, SliderRangeAttribute } from '@/models/common';
import { calculateMortgagePerMonth, numberWithCommas } from '@/utils/common';
import RangeSlider from './RangeSlider';

interface MortgageCalculatorProps {
  purchasePrice: {
    value: number;
    range: SliderRangeAttribute;
  };

  downPayment: {
    value: number;
    range: SliderRangeAttribute;
  };

  repaymentTime: {
    value: number;
    range: SliderRangeAttribute;
  };

  interestRate: {
    value: number;
    range: SliderRangeAttribute;
  };

  onChange?: (key: MortgageKey, value: string | number) => void;
}

export default function MortgageCalculator({
  purchasePrice,
  downPayment,
  interestRate,
  repaymentTime,
  onChange,
}: MortgageCalculatorProps) {
  // loan amount (purchase price - down payment)
  const loanAmount = purchasePrice.value - downPayment.value;
  const displayLoan = loanAmount >= 0 ? loanAmount : 0;

  const estimatedRepaymentPeMonth = calculateMortgagePerMonth(
    purchasePrice.value * 1,
    downPayment.value * 1,
    interestRate.value * 1,
    repaymentTime.value * 1
  );

  const handleSliderValueChange = (
    key: MortgageKey,
    value: number | string
  ) => {
    if (onChange) {
      onChange(key, value);
    }
  };

  return (
    <div className='p-[40px] text-white bg-blue-primary w-full min-h-[540px]'>
      {/* START: Instruction section */}
      <h1 className='text-[40px] leading-[56px] font-[600] mb-[8px]'>
        Mortgage Calculator
      </h1>
      <p className='text-[18px] leading-[32px] font-[400] '>
        Take control with a plan set in stone.
      </p>
      {/* END*/}

      {/* START: Controller section */}

      <div className='my-[64px] grid lg:grid-cols-2 grid-cols-1 gap-[20px]'>
        <div className='col-span-1'>
          <div className='text-[18px] leading-[32px] font-[500]'>
            Purchase price: {`$${numberWithCommas(purchasePrice.value)}`}
          </div>
          <div className='max-w[256px] mt-[2px]'>
            <RangeSlider
              range={purchasePrice.range}
              value={purchasePrice.value}
              onChange={(value) =>
                handleSliderValueChange('purchasePrice', value)
              }
            />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='text-[18px] leading-[32px] font-[500]'>
            Download Payment: {`$${numberWithCommas(downPayment.value)}`}
          </div>
          <div className='max-w[256px] mt-[2px]'>
            <RangeSlider
              range={downPayment.range}
              value={downPayment.value}
              onChange={(value) =>
                handleSliderValueChange('downPayment', value)
              }
            />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='text-[18px] leading-[32px] font-[500]'>
            Repayment Time: {`${numberWithCommas(repaymentTime.value)} year`}
          </div>
          <div className='max-w[256px] mt-[2px]'>
            <RangeSlider
              range={repaymentTime.range}
              value={repaymentTime.value}
              onChange={(value) =>
                handleSliderValueChange('repaymentTime', value)
              }
            />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='text-[18px] leading-[32px] font-[500]'>
            Interest Rate: {`${numberWithCommas(interestRate.value)}%`}
          </div>
          <div className='max-w[256px] mt-[2px]'>
            <RangeSlider
              range={interestRate.range}
              value={interestRate.value}
              onChange={(value) =>
                handleSliderValueChange('interestRate', value)
              }
            />
          </div>
        </div>
      </div>
      {/* END */}

      {/* START: Result section */}
      <div className='text-[18px] leading-[32px] font-[500]'>
        Loan amount:
        <span className='text-black text-[24px] leading-[43px]'>
          ${` ${numberWithCommas(displayLoan)}`}
        </span>
      </div>

      <div className='text-[18px] leading-[32px] font-[500]'>
        Estimated repayment per month:
        <span className=' text-black text-[24px] leading-[43px]'>
          ${` ${numberWithCommas(estimatedRepaymentPeMonth)}`}
        </span>
      </div>
      {/* END */}
    </div>
  );
}
MortgageCalculator.defaultProps = {
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
};
