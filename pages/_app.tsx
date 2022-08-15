import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';


// types
import type { AppProps } from 'next/app';

// global styles
// import 'swiper/swiper.scss';
import "swiper/css/bundle";
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

// import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  
  <Fragment>
        <MantineProvider
        theme={{
          colors: {
            'dark-green': [
              "#7C7D6F",
              "#727363",
              "#696B58",
              "#61634E",
              "#5A5C44",
              "#54573C",
              "#4F5233",
              "#454731",
              "#3C3E2E",
              "#35362B",
            ],
          },
        }}
        >
      <ModalsProvider>
    <Component {...pageProps} />
    </ModalsProvider>
      </MantineProvider>
  </Fragment>
);

export default wrapper.withRedux(MyApp);