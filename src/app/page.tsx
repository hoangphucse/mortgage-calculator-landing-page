import BaseHeader from '@/components/BaseHeader';
import Hero from '@/components/Hero';
import MortgageBlock from '@/components/MortgageBlock';
import ProductFeature from '@/components/ProductFeature';
import contentfulApi from '@/lib/contentfulApi';
import { Feature, Hero as HeroModel } from '@/models/contentful';

async function fetchContentfulResource() {
  try {
    const response = await contentfulApi.fetchContentful(
      `query {
        heroCollection {
          items {
            title
            description
            backgroundImage {
              url
            },
            productImage {
              url
            }
          }
        }

        featureCollection {
          items {
            title,
            icon {
              url
            },
            description
          }
        }

        introCollection {
          items {
            title
            description
            image {
              url
            }
            iosDownloadLink
            androidDownloadLink
          }
        }
      }`
    );

    return response;
  } catch (error) {}
}

export default async function Home() {
  // fetchContentfulResource()
  const { heroCollection, featureCollection, introCollection } =
    await fetchContentfulResource();

  const hero: HeroModel =
    heroCollection?.items &&
    heroCollection.items.length &&
    heroCollection.items[0];

  const features: Feature[] = featureCollection.items
    ? featureCollection.items
    : [];

  return (
    <>
      <BaseHeader />
      <Hero
        productImage={hero.productImage.url}
        backgroundImage={hero.backgroundImage.url}
        title={hero.title}
        description={hero.description}
      />

      {/* Image intro block section here...... */}
      {/* Animated Phone Block here.... */}

      <ProductFeature features={features} />
      <MortgageBlock />
    </>
  );
}
