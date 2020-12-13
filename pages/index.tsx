import React, { useRef } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import {
  ContentContainer,
  FooterSection,
  Header,
  HeroSection,
  ReviewSection,
  ScrollAppBar,
  StyleSheet,
  WaitListSection,
} from '@components';
import {
  Client,
  Graphic,
  HomePageSection,
  Review,
  Slice,
} from 'prismic-configuration';
import { RichText, RichTextBlock } from 'prismic-reactjs';

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
      <ScrollAppBar />
      <HeroSection
        {...hero}
        onWaitClick={() =>
          waitListRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      {sections.map((section, index) => (
        <ContentContainer alt={index % 2 === 0} key={index}>
          <Grid item xs={12} md={6} style={styles.gridColumn}>
            <Header>{RichText.asText(section.header)}</Header>
            <Box mt={5} pb={16}>
              <Typography variant="body1" color="textSecondary">
                {RichText.asText(section.description)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={section.graphic.url} width={400} height={800} />
          </Grid>
        </ContentContainer>
      ))}
      <ReviewSection reviews={reviews} />
      <WaitListSection waitListRef={waitListRef} />
      <FooterSection />
    </div>
  );
};

const styles: StyleSheet = {
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export default IndexPage;
