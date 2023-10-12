import { useState } from 'react';
import { addFollower, formatNumber } from '../../helpers/index';
import {
  StyledTweetH2,
  StyledTweetH3,
  StyledTweetCircle,
  StyledTweetDiv,
  StyledTweetImg,
  StyledTweetLine2Div,
  StyledTweetLineDiv,
  StyledTweetButton,
  StyledTweetSvg,
  StyledTweetAvatarImg,
} from './TweetCard.styled';
import sprite from '../../assets/sprite.svg';
import img1x from '../../assets/card-picture@1x-min.png';
import img2x from '../../assets/card-picture@2x-min.png';
import defaultAvatar from '../../assets/hansel.png';

export const TweetCard = ({
  cardId,
  tweets,
  followers,
  avatar = defaultAvatar,
  setUsers,
}) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    const storedFollowingState = localStorage.getItem(`isFollowing_${cardId}`);
    return storedFollowingState ? JSON.parse(storedFollowingState) : false;
  });

  const formattedFollowers = formatNumber(followers);

  const handleFollow = async () => {
    const updatedUser = await addFollower(
      isFollowing ? 'delete' : 'add',
      cardId,
      followers,
    );
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    // Оновлюємо локальний стан користувача на основі оновлених даних з сервера
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === cardId ? updatedUser : user)),
    );

    localStorage.setItem(
      `isFollowing_${cardId}`,
      JSON.stringify(newFollowingState),
    );
  };
  return (
    <StyledTweetDiv>
      <StyledTweetSvg width="76" height="22">
        <use href={`${sprite}#icon-goit-logo`}></use>
      </StyledTweetSvg>
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
        <StyledTweetAvatarImg
          src={avatar}
          alt="tweet-avatar"
          width={62}
          height={62}
          loading="lazy"
        />
      </StyledTweetCircle>
      <StyledTweetLine2Div></StyledTweetLine2Div>
      <StyledTweetH2> {tweets} tweets</StyledTweetH2>
      <StyledTweetH3>{formattedFollowers} Followers</StyledTweetH3>
      <StyledTweetButton
        type="button"
        style={{
          background: isFollowing
            ? 'var(--button-followed-color)'
            : 'var(--primary-color)',
        }}
        onClick={handleFollow}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </StyledTweetButton>
    </StyledTweetDiv>
  );
};
