import styled from '@emotion/styled';
import img1x from '../../assets/card-picture@1x-min.png';
import img2x from '../../assets/card-picture@2x-min.png';

export const StyledTweetDiv = styled.div`
  width: auto;
  height: auto;
  position: relative;
  padding: 10px 0px 20px 0px;
  border-radius: 20px;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  @media screen and (min-width: 390px) {
    padding: 28px 36px 36px 36px;
  }
`;

export const StyledTweetSvg = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StyledTweetImg = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  background-image: url(${img1x});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 308px;
  height: 168px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${img2x});
  }
`;

export const StyledTweetCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-color: var(--primary-color);
  border-radius: 50%;
  border-width: 8px;
  box-shadow:
    0px 0px 0px 8px #fbf8ff inset,
    6px -2.19582px 4.39163px 4px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  &::before {
    content: '';
    width: 114px;
    height: 8px;
    background: var(--primary-color);
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
    position: absolute;
    right: 100%;
    @media screen and (min-width: 390px) {
      width: 150px;
    }
  }
  &::after {
    content: '';
    width: 114px;
    height: 8px;
    background: var(--primary-color);
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
    position: absolute;
    left: 100%;
    @media screen and (min-width: 390px) {
      width: 150px;
    }
  }
`;

export const StyledTweetAvatarImg = styled.img`
  border-radius: 50%;
`;

export const StyledTweetH2 = styled.h2`
  margin-top: 94px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const StyledTweetH3 = styled.h3`
  text-transform: uppercase;
  margin-bottom: 26px;
`;

export const StyledTweetButton = styled.button`
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 6px;
  border-radius: 10.311px;
  background: var(--primary-color);
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  transition: scale 0.3s ease;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
