import React, { useRef } from 'react';
import Head from 'next/head';
import {
  FooterSection,
  MainHeroSection,
  ReviewSection,
  ScrollAppBar,
  Slices,
  WaitListSection,
} from '@components';
import {
  Client,
  Graphic,
  HomePageSection,
  Review,
  Slice,
} from 'prismic-configuration';
import { RichTextBlock } from 'prismic-reactjs';

interface HomePageData {
  hero_title: RichTextBlock[];
  hero_description: RichTextBlock[];
  hero_image: Graphic;
  body: Slice[];
}

interface Props {
  hero: {
    title: RichTextBlock[];
    description: RichTextBlock[];
    image: Graphic;
  };
  sections: HomePageSection[];
  reviews: Review[];
}

export async function getStaticProps() {
  const home: HomePageData = (await Client().getSingle('homepage', {})).data;

  return {
    props: {
      hero: {
        title: home.hero_title,
        description: home.hero_description,
        image: home.hero_image,
      },
      sections: home.body[0].items as HomePageSection[],
      reviews: home.body[1].items as Review[],
    },
  };
}

const IndexPage: React.FC<Props> = ({ hero, sections, reviews }) => {
  const waitListRef = useRef<any>(null);

  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <Head>
        <title>Hanji - Find Korean Conjugations and Definitions</title>
      </Head>
      <ScrollAppBar />
      <MainHeroSection
        {...hero}
        onWaitClick={() =>
          waitListRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Slices slices={sections} startLeft={false} />
      <ReviewSection reviews={reviews} />
      <WaitListSection waitListRef={waitListRef} />
      <FooterSection />
    </div>
  );
};

export default IndexPage;
