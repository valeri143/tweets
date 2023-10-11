import { Container, Block, Title, StyledLink } from './TweetsPage.styled';

const TweetsPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default TweetsPage;
