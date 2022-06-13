import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;