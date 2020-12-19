import {
  ContentContainer,
  FooterSection,
  Header,
  HeroSection,
  ScrollAppBar,
  StyleSheet,
} from '@components';
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FC } from 'react';
import Image from 'next/image';
import RepoCard, { RepoCardProps } from 'components/oss/RepoCard';
import {
  Client,
  HomePageSection,
  RepoSlice,
  Slice,
} from 'prismic-configuration';
import { RichText, RichTextBlock } from 'prismic-reactjs';

const useStyles = makeStyles({
  tile: { display: 'flex', overflow: 'visible' },
});

interface OSSPageData {
  hero_title: RichTextBlock[];
  body: Slice[];
}

interface Props {
  title: RichTextBlock[];
  sections: HomePageSection[];
  repoSection: {
    header: RichTextBlock[];
    blurb: RichTextBlock[];
    repos: RepoCardProps[];
  };
}

export async function getStaticProps() {
  const data: OSSPageData = (await Client().getSingle('oss_page', {})).data;
  const { primary, items } = data.body[1] as RepoSlice;

  return {
    props: {
      title: data.hero_title,
      sections: data.body[0].items as HomePageSection[],
      repoSection: {
        header: primary.header,
        blurb: primary.blurb,
        repos: items,
      },
    },
  };
}

const OSSPage: FC<Props> = ({ title, sections, repoSection }) => {
  const { breakpoints } = useTheme();
  const classes = useStyles();
  const matchedSm = useMediaQuery(breakpoints.up('sm'));

  let cols = 1;
  if (matchedSm) {
    cols = 2;
  }

  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <ScrollAppBar />
      <HeroSection>
        <Container maxWidth="md" style={styles.container}>
          <Typography variant="h1" align="center">
            {RichText.asText(title)}
          </Typography>
        </Container>
      </HeroSection>
      {sections.map((section, index) => (
        <ContentContainer alt={index % 2 === 0} key={index}>
          <Grid item xs={12} md={6} style={styles.centered}>
            <Header>{RichText.asText(section.header)}</Header>
            <Box mt={5} pb={16}>
              <Typography variant="body1" color="textSecondary">
                {RichText.asText(section.description)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={section.graphic.url}
              width={500}
              height={380}
              quality={100}
            />
          </Grid>
        </ContentContainer>
      ))}
      <Box pt={16} pb={16} bgcolor={grey[100]}>
        <Container>
          <Header>{RichText.asText(repoSection.header)}</Header>
          <Box mt={2} mb={8}>
            <Typography color="textSecondary">
              {RichText.asText(repoSection.blurb)}
            </Typography>
          </Box>
          <GridList
            cols={cols}
            cellHeight="auto"
            style={{ overflow: 'visible' }}
          >
            {repoSection.repos.map((repo) => (
              <GridListTile classes={{ tile: classes.tile }}>
                <RepoCard {...repo} />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </Box>
      <FooterSection />
    </div>
  );
};

const styles: StyleSheet = {
  centered: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
};

export default OSSPage;
