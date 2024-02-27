import { Feature } from '@/models/contentful';
import FeatureCard from './FeatureCard';

interface ProductFeatureProps {
  features: Feature[];
}

export default function ProductFeature({ features }: ProductFeatureProps) {
  const featureCards = features.map((item, index) => (
    <FeatureCard
      key={index}
      title={item.title}
      icon={item.icon.url}
      description={item.description}
    />
  ));
  return (
    <section className='max-w-[1280px] container mx-auto px-4 my-[24px] place-items-center flex flex-wrap items-center justify-center gap-[24px] '>
      {featureCards}
    </section>
  );
}
