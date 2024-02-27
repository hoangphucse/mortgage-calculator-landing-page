import Image from 'next/image';

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className='w-[264px] h-[256px] rounded-[5px] shadow-[0_5px_27px_0_#ABE1F2_inset] flex flex-col items-center justify-center px-[26px] pt-[26px] gap-[10px]'>
      <Image src={icon} width={64} height={64} alt={`${title} icon`} />
      <h2 className='text-[24px] leading-[34px] font-[500]'>{title}</h2>
      <p className='text-[20px] leading-[28px] text-center'>{description}</p>
    </article>
  );
}
