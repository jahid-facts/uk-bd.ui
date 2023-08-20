import React from 'react';
import { Container, Stack } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import { Feed } from '../../components/Feed';

export default function Profile() {
  return (
    <Container  maxWidth="xl">  
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </Container>
  );
}
