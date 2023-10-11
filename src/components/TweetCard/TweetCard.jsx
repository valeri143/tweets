import {
  StyledTweetH2,
  StyledTweetH3,
  StyledTweetCircle,
  StyledTweetDiv,
  StyledTweetImg,
  StyledTweetLine2Div,
  StyledTweetLineDiv,
  StyledTweetButton,
} from './TweetCard.styled';
import sprite from '../../assets/sprite.svg';
import img1x from '../../assets/card-picture@1x-min.png';
import img2x from '../../assets/card-picture@2x-min.png';
import avatar from '../../assets/hansel.png';

export const TweetCard = () => {
  return (
    <StyledTweetDiv>
      <svg width="76" height="22">
        <use href={`${sprite}#icon-goit-logo`}></use>
      </svg>
      <StyledTweetImg
        srcSet={`${img1x} 1x, ${img2x} 2x`}
        src={img1x}
        alt="picture-of-card-tweet"
        loading="lazy"
        width={308}
        height={168}
      />
      <StyledTweetLineDiv></StyledTweetLineDiv>
      <StyledTweetCircle>
        <img
          src={avatar}
          alt="tweet-avatar"
          width={62}
          height={62}
          loading="lazy"
        />
      </StyledTweetCircle>
      <StyledTweetLine2Div></StyledTweetLine2Div>
      <StyledTweetH2> 777 tweets</StyledTweetH2>
      <StyledTweetH3>100,500 Followers</StyledTweetH3>
      <StyledTweetButton type="button">Follow</StyledTweetButton>
    </StyledTweetDiv>
  );
};
