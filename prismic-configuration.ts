import Prismic from 'prismic-javascript';
import { RichTextBlock } from 'prismic-reactjs';

export const apiEndpoint = 'https://hanji.cdn.prismic.io/api/v2';
export const accessToken =
  'MC5YOUZlZFJJQUFDZ0F4U2Fa.77-9SVfvv71977-9Ne-_ve-_vUXvv71_Wu-_vQDvv71DAe-_ve-_ve-_ve-_ve-_vTYjce-_ve-_vXFf77-977-9';

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
