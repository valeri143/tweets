import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../helpers/index';
import { TweetCard } from '../../components/TweetCard/TweetCard';
import { StyledH1 } from '../HomePage/HomePage.styled';
import {
  StyledContainer,
  StyledTweetsUl,
  StyledButton,
  StyledArrowSvg,
  StyledDropdown,
} from './TweetsPage.styled';
import sprite from '../../assets/sprite.svg';
import { StyledTweetButton } from '../../components/TweetCard/TweetCard.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleButton, setIsVisibleButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('show all');
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const fetchedUsers = await fetchUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
        setIsVisibleButton(fetchedUsers.length !== 0);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const followingUsers = users.filter((user) => {
    const isFollowing = localStorage.getItem(`isFollowing_${user.id}`);
    return isFollowing === 'true';
  });

  const withoutFollowingUsers = users.filter((user) => {
    const isFollowing = localStorage.getItem(`isFollowing_${user.id}`);
    return isFollowing === 'false';
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setPage(1);
    switch (event.target.value) {
      case 'show all':
        return setFilteredUsers(users);

      case 'follow':
        return setFilteredUsers(withoutFollowingUsers);

      case 'followings':
        return setFilteredUsers(followingUsers);

      default:
        break;
    }
  };

  return (
    <>
      <StyledH1>Tweets</StyledH1>
      <StyledButton type="button" onClick={() => navigate('/')}>
        <StyledArrowSvg width="20" height="20">
          <use href={`${sprite}#icon-arrow-left`}></use>
        </StyledArrowSvg>
        Back
      </StyledButton>
      <StyledDropdown value={filter} onChange={handleFilterChange}>
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </StyledDropdown>
      <StyledContainer>
        <StyledTweetsUl>
          {filteredUsers.length !== 0
            ? filteredUsers.map((user) => (
                <li key={user.id}>
                  <TweetCard
                    cardId={user.id}
                    tweets={user.tweets}
                    followers={user.followers}
                    avatar={user.avatar}
                    setUsers={setUsers}
                  />
                </li>
              ))
            : users.map((user) => (
                <li key={user.id}>
                  <TweetCard
                    cardId={user.id}
                    tweets={user.tweets}
                    followers={user.followers}
                    avatar={user.avatar}
                    setUsers={setUsers}
                  />
                </li>
              ))}
        </StyledTweetsUl>
        {isLoading && <p>Loading...</p>}
        {isVisibleButton && (
          <StyledTweetButton type="button" onClick={onClick}>
            Load More
          </StyledTweetButton>
        )}
      </StyledContainer>
    </>
  );
};

export default TweetsPage;
