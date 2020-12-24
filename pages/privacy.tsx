import Head from 'next/head';
import { FooterSection, ScrollAppBar } from '@components';
import {
  Box,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Client } from 'prismic-configuration';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React, { FC } from 'react';
import htmlSerializer from 'utils/htmlSerializer';

interface PrivacyPageData {
  title: RichTextBlock[];
  content: RichTextBlock[];
}

export async function getStaticProps() {
  const home: PrivacyPageData = (await Client().getSingle('privacy_policy', {}))
    .data;

  return { props: home };
}

const PrivacyPage: FC<PrivacyPageData> = ({ title, content }) => {
  const { palette } = useTheme();

  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <Head>
        <title>Hanji - Privacy Policy</title>
      </Head>
      <ScrollAppBar />
      <Toolbar style={{ background: palette.primary.main }} />
      <Container maxWidth="md" style={{ paddingBottom: 32 }}>
        <Box mt={3} mb={8}>
          <Typography variant="h3" align="center">
            {RichText.asText(title)}
          </Typography>
        </Box>
        <RichText render={content} htmlSerializer={htmlSerializer} />
      </Container>
      <FooterSection />
    </div>
  );
};

export default PrivacyPage;
