import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import {
  StyledLoaderBackdrop,
  StyledLoaderWrapper,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <StyledLoaderBackdrop>
            <StyledLoaderWrapper>
              <BallTriangle
                height={200}
                width={200}
                radius={5}
                color="#9803fc"
                ariaLabel="ball-triangle-loading"
                visible={true}
              />
            </StyledLoaderWrapper>
          </StyledLoaderBackdrop>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
