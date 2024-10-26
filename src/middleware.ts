import {i18nRouter} from 'next-i18n-router';
import i18nConfig from './i18n-config';
import {NextRequest} from 'next/server';



export async function middleware(request: NextRequest) {


  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|.*\\..*|favicon.ico|sw.js).*)']
};


