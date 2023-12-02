import localFont from 'next/font/local'

export const fontArgentum = localFont({
  src: [
    {
      path: '../fonts/argentum-sans/thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/extraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/semiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/extraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/argentum-sans/black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-argentum-sans',
  display: 'swap',
})

export const fontKalameh = localFont({
  src: [
    {
      path: '../fonts/kalameh/thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/kalameh/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/kalameh/bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/kalameh/black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-kalameh',
  display: 'swap',
})