import styled from '@emotion/styled';

export const StyledLoaderBackdrop = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px) drop-shadow(4px 4px 10px blue);
`;

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
