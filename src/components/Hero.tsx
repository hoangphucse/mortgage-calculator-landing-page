import Image from 'next/image';
import EmailSubmissionBox from './EmailSubmissionBox';

interface HeroProps {
  backgroundImage: string;
  productImage: string;
  title: string;
  description: string;
}

export default function Hero(props: HeroProps) {
  const splitTitle = props.title.split(' ');
  const highlightTitle = splitTitle.slice(0, 2).join(' ');
  const normalTitle = splitTitle.slice(2, splitTitle.length).join(' ');
  return (
    <section
      className='min-h-[720px] lg:h-[720px] pt-[81px]'
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='h-full max-w-[1280px] container mx-auto px-4 flex lg:flex-row flex-col items-center justify-between gap-[102px]'>
        {/* START: Title and description */}
        <div className='w-full h-full flex flex-col items-start justify-center '>
          <h1 className='max-w-[428px] text-[48px] font-[600] leading-[67px]'>
            <span className='text-blue-primary'>{highlightTitle}</span>&nbsp;
            <p>{normalTitle}</p>
          </h1>
          <h3 className='mt-[12px] leading-[34px] font-[400] text-[24px]'>
            {props.description}
          </h3>

          <div className='mt-[32px]'>
            <EmailSubmissionBox />
          </div>
        </div>
        {/* END */}

        {/* START: Product image */}
        <div className='w-full h-full flex items-end justify-end'>
          <Image
            src={props.productImage}
            alt='product-image'
            width={648}
            height={639}
          />
          {/* END */}
        </div>
      </div>
    </section>
  );
}
