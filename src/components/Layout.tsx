import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';
import { Loader } from './Loader';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback={<Loader location={location.pathname} />}>
        <Outlet />
      </Suspense>
    </>
  );
};
