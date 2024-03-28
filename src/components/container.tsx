import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { GlobalStyles } from '@mui/material';

export default function SimpleContainer({children}: {children: React.ReactNode}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: '#0a0921' } }} />
      <Container style={{ background: '#0a0921' }} sx={{ bgcolor: "#f2f6fc" }} maxWidth="md">
        {children}
      </Container>
    </React.Fragment>
  );
}