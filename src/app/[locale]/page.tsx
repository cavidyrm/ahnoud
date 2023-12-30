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
  const siteUrlCom = process.env.SITE_URL_COM || 'https://ahnoud.com/'
  const title = "Ahnoud Holding: Shopping, Business Services, and Academy"
  const description = "Ahnoud is a forward-thinking business holding company that created a diverse ecosystem with three sections: Shopping, Business Services, and Academy."

  return {
    title,
    description,
    robots: { index: true, follow: true },
    twitter: {
      title,
      description,
      site: 'Ahnoud',
      card: 'summary_large_image',
      // images: {}
    },
    openGraph: {
      url: siteUrlCom,
      type: 'website',
      title,
      description,
      locale: params.locale,
      siteName: 'Ahnoud',
      // images: {}
    },
    alternates: {
      canonical: siteUrlCom + params.locale + '/',
      languages: {
        en: siteUrlCom + 'en/',
        fa: siteUrlCom + 'fa/'
      }
    },
    category: "technology"
  };
}

const Index = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  // const jsonLd = {
  //   "@context":"https://schema.org",
  //   "@type":"LocalBusiness",
  //   "name":"خرید و فروش ارزدیجیتال: بیت 24",
  //   "url":"https://ahnoud.com",
  //   "description":"خرید بیت کوین و فروش بیت کوین با مناسب ترین قیمت و تسویه آنی در اپلیکیشن بیت 24 با اپلیکیشن بیت 24 به آسانی در هر ساعت از شبانه روز خرید و فروش تتر اتریوم ترون دوج کوین را انجام دهید و درسریعترین زمان ممکن ارز دیجیتال خود را دریافت کنید. اپلیکیشن بیت 24 امن ترین و سریعترین راه خرید و فروش ارز دیجیتال را برای شما فراهم میکند.",
  //   "applicationCategory":"FINANCE",
  //   "image":"https://bit24.cash/main-logo.svg",
  //   "logo":"https://bit24.cash/main-logo.svg",
  //   "address":"تهران گیشا (کوی نصر) نبش خیابان شانزدهم پلاک 145",
  //   "legalName":"بیت 24",
  //   "telephone":"021-91070394",
  //   "priceRange":"$$",
  //   "sameAs":[
  //       "https://www.instagram.com/bit24cash",
  //       "http://twitter.com/bit24cash",
  //       "http://linkedin.com/company/bit24cash",
  //       "https://t.me/bit24cash"
  //   ],
  //   "aggregateRating":{
  //       "@type":"AggregateRating",
  //       "ratingValue":"4.8",
  //       "ratingCount":"1000000000"
  //   },
  //   "offers":{
  //       "@type":"Offer",
  //       "price":"1.00",
  //       "priceCurrency":"USD"
  //   }
// }

  return (
    <main>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      >
      </script> */}
      <Intro />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <ContactUs />
    </main>
  );
}

export default Index