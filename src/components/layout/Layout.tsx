import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';

// import { Titillium_Web } from 'next/font/google';

// const titillium = Titillium_Web({
//   weight: ['300', '400', '600', '700'],
//   subsets: ['latin'],
//   variable: '--titillium',
// });

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
