import { useState } from 'react';
import { addFollower, formatNumber } from '../../helpers/index';
import {
  StyledTweetH2,
  StyledTweetH3,
  StyledTweetCircle,
  StyledTweetDiv,
  StyledTweetImg,
  StyledTweetButton,
  StyledTweetSvg,
  StyledTweetAvatarImg,
} from './TweetCard.styled';
import sprite from '../../assets/sprite.svg';
import defaultAvatar from '../../assets/hansel.png';

export const TweetCard = ({
  cardId,
  tweets,
  followers,
  avatar = defaultAvatar,
  setUsers,
}) => {
  const formattedFollowers = formatNumber(followers);
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem('followingTweets')?.includes(cardId) ? true : false,
  );

  const handleFollow = async () => {
    const updatedUser = await addFollower(
      isFollowing ? 'delete' : 'add',
      cardId,
      followers,
    );
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === cardId ? updatedUser : user)),
    );

    const currentFollowingCards =
      JSON.parse(localStorage.getItem('followingTweets')) || [];
    const updatedFollowingCards = newFollowingState
      ? [...currentFollowingCards, cardId]
      : currentFollowingCards.filter((id) => id !== cardId);

    localStorage.setItem(
      'followingTweets',
      JSON.stringify(updatedFollowingCards),
    );
  };
  return (
    <StyledTweetDiv>
      <StyledTweetSvg width="76" height="22">
        <use href={`${sprite}#icon-goit-logo`}></use>
      </StyledTweetSvg>
      <StyledTweetImg></StyledTweetImg>
      <StyledTweetCircle>
        <StyledTweetAvatarImg
          src={avatar}
          alt="tweet-avatar"
          width={62}
          height={62}
          loading="lazy"
        />
      </StyledTweetCircle>
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
