export interface Hero {
  title: string;
  backgroundImage: {
    url: string;
  };
  description: string;
  productImage: {
    url: string;
  };
}

export interface Feature {
  title: string;
  icon: {
    url: string;
  };
  description: string;
}
