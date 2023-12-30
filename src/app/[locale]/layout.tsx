import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { fontArgentum, fontKalameh } from '@/config/fonts';

import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

import NextIntlProvider from "@/components/global/NextIntlProvider";
import { unstable_setRequestLocale } from 'next-intl/server';

import { locales } from '@/config/locales';

import { GoogleTagManager } from '@next/third-parties/google'

import '../globals.css'

interface Props {
  children: ReactNode,
  params: { 
    locale: string
  }
}

export function generateStaticParams() {
  return [{ locale: "en" }];
}

const LocaleLayout = async ({ children, params: { locale } }: Props) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={`${locale === 'en' ? fontArgentum.className : fontKalameh.className} ${fontArgentum.variable} ${fontKalameh.variable}`}
    >
      <GoogleTagManager gtmId="GTM-TLN72GC2" />
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLN72GC2"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          >
          </iframe>
        </noscript>
        <Header />
        <NextIntlProvider
          locale={locale}
          messages={messages}
          timeZone="Europe/Berlin"
          now={new Date()}
        >
        {children}
        </NextIntlProvider>
        <Footer />
      </body>
    </html>
  );
}

export default LocaleLayout;