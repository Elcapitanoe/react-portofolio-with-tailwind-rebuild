import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex.dev | Full-Stack Developer & UI/UX Designer</title>
        <meta name="description" content="Professional portfolio of Alex, a full-stack developer and UI/UX designer specializing in creating beautiful, functional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web developer, full-stack developer, UI/UX designer, React developer, Next.js" />
        <meta property="og:title" content="Alex.dev | Full-Stack Developer & UI/UX Designer" />
        <meta property="og:description" content="Professional portfolio of Alex, a full-stack developer and UI/UX designer specializing in creating beautiful, functional digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alex.dev" />
        <meta property="og:image" content="https://alex.dev/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}