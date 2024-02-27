import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function BaseButton({
  children,
  variant,
  className,
}: BaseButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}

// Define style for button
const buttonVariants = cva(
  'px-8 py-4 rounded-[50px] leading-4 font-medium h-[48px]',
  {
    variants: {
      variant: {
        primary: 'bg-blue-primary text-white border-0',
        secondary: 'bg-white text-blue-primary border border-blue-primary',
        text: 'bg-white text-[#1C1C1C] border-0 rounded-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
