import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { locales } from '@/config/locales';
import { fontArgentum, fontKalameh } from '@/config/fonts';

import Header from '@/components/global/Header';

import '../globals.css'

interface Props {
  children: ReactNode,
  params: { [key: string]: string }
}

const LocaleLayout = ({ children, params: { locale } }: Props) => {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={`${locale === 'en' ? fontArgentum.className : fontKalameh.className}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default LocaleLayout