import React from 'react';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <Container className='m-1'>
    {children}
    </Container>
  )
}