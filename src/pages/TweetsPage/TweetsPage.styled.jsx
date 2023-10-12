import styled from 'styled-components';

export const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 30px;
  color: var(--light-color);
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    scale 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
    scale: 1.1;
  }
  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
`;

export const StyledArrowSvg = styled.svg`
  fill: var(--light-color);
  transition: fill 0.3s;
  ${StyledButton}:hover &,
  ${StyledButton}:focus & {
    fill: #00baff;
  }
`;

export const StyledDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const StyledTweetsUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 48px;
  margin-top: 60px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
