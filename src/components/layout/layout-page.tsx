import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Sidebar from './sidebar';

type LayoutProps = {
  heading: string,
  children: React.ReactNode;
};

function Layout({ heading, children }: LayoutProps): React.ReactElement {
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Container>
        <h1>{heading}</h1>
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
