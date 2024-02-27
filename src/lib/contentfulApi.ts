import { CONTENTFUL_URL } from '@/constant/contentful';

const ContentfulApi = {
  fetchContentful: async (query: any) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      const response = await fetch(CONTENTFUL_URL, fetchOptions);
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.log(error);
      throw new Error('Could not fetch data from Contentful!');
    }
  },
};

export default ContentfulApi;
