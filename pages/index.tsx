import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import {
  ContentContainer,
  Header,
  HeroSection,
  ReviewSection,
  ScrollAppBar,
  StyleSheet,
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

  console.log(home.body[1].items);

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
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <ScrollAppBar />
      <HeroSection {...hero} />
      {sections.map((section, index) => (
        <ContentContainer alt={index % 2 === 0}>
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
