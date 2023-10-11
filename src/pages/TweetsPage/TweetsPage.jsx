import { TweetCard } from '../../components/TweetCard/TweetCard';
import { StyledH1 } from '../HomePage/HomePage.styled';
import { StyledContainer, StyledTweetsUl } from './TweetsPage.styled';

const TweetsPage = () => {
  return (
    <StyledContainer>
      <StyledH1>Tweets</StyledH1>
      <StyledTweetsUl>
        <li>
          <TweetCard />
        </li>
        <li>
          <TweetCard />
        </li>
      </StyledTweetsUl>
    </StyledContainer>
  );
};

export default TweetsPage;
