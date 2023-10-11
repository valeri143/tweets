import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledH1 = styled.h1`
  margin: 0;
  font-size: 60px;
  color: var(--light-color);
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
