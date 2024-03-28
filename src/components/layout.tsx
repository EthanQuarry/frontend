import React from 'react';
import NavBar from '../components/navbar';
import SimpleContainer from '../components/container';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <NavBar />
      <SimpleContainer>
        {children}
      </SimpleContainer>
      
    </div>
  );
};
