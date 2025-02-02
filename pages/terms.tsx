import Head from 'next/head';
import { FooterSection, ScrollAppBar } from '@components';
import { Box, Container, Toolbar, Typography, useTheme } from '@mui/material';
import { Client } from 'prismic-configuration';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React, { FC } from 'react';
import htmlSerializer from 'utils/htmlSerializer';

interface TermsPageData {
  title: RichTextBlock[];
  content: RichTextBlock[];
}

export async function getStaticProps() {
  const home: TermsPageData = (
    await Client().getSingle('terms_and_conditions', {})
  ).data;

  return { props: home };
}

const TermsPage: FC<TermsPageData> = ({ title, content }) => {
  const { palette } = useTheme();

  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <Head>
        <title>Hanji - Terms of Use</title>
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

export default TermsPage;
