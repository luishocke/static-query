import React from 'react';
import AppLayout from '../../components/App/Layout';

export default function AppIndexPage({ location }) {
  return (
    <AppLayout location={location}>
      <p>Hello World</p>
    </AppLayout>
  );
}
