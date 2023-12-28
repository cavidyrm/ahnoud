import type { Metadata } from 'next'

import Intro from '@/components/Intro';
import AboutUs from '@/components/AboutUs'
import WhatWeDo from '@/components/WhatWeDo';
import OurServices from '@/components/OurServices';
import ContactUs from '@/components/ContactUs';

import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const siteURL = 'https://ahnoud.com';

  return {
    title: "Ahnoud Holding",
    description: "Ahnoud is a forward-thinking business holding company that's dedicated to nurturing opportunities for success. As a trusted partner, we've created a diverse ecosystem with three primary sections: Shopping, Business Services, and Academy.",
    // alternates: {
    //   canonical: `${siteURL}/${params.locale}`,
    // },
  };
}

const Index = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  return (
    <main>
      <Intro />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <ContactUs />
    </main>
  );
}

export default Index