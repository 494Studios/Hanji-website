import Prismic from 'prismic-javascript';
import { RichTextBlock } from 'prismic-reactjs';

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as string;
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = () => Prismic.client(apiEndpoint, { accessToken });

export type Slice =
  | {
      slice_type: 'homepage_section';
      items: HomePageSection[];
    }
  | {
      slice_type: 'review';
      items: Review[];
    };

export type Graphic = {
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string | null;
  url: string;
};

export type HomePageSection = {
  graphic: Graphic;
  header: RichTextBlock[];
  description: RichTextBlock[];
};

export type Review = {
  title: RichTextBlock[];
  rating: number;
  description: RichTextBlock[];
  author: string;
  source: string;
};
