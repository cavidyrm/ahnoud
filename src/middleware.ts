import createMiddleware from 'next-intl/middleware';
import { locales } from './config/locales';
 
export default createMiddleware({
  locales,
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fa|en)/:path*']
};