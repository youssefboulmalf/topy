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

import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  
  <Fragment>
        <MantineProvider>
      <ModalsProvider>
    <Component {...pageProps} />
    </ModalsProvider>
      </MantineProvider>
  </Fragment>
);

export default wrapper.withRedux(MyApp);