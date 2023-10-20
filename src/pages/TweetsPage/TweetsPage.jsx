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
  StyledDropDownOption,
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

        if (page !== 1) {
          setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
        } else {
          setUsers(fetchedUsers);
        }
        setIsVisibleButton(fetchedUsers.length !== 0 && page !== 4);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  useEffect(() => {
    const currentFollowingTweets =
      JSON.parse(localStorage.getItem('followingTweets')) || [];
    let followingUsers;
    let withoutFollowingUsers;
    switch (filter) {
      case 'show all':
        setFilteredUsers(users);
        break;
      case 'follow':
        withoutFollowingUsers = users.filter(
          (user) => !currentFollowingTweets.includes(user.id),
        );
        setFilteredUsers(withoutFollowingUsers);
        break;
      case 'followings':
        followingUsers = users.filter((user) =>
          currentFollowingTweets.includes(user.id),
        );
        setFilteredUsers(followingUsers);
        break;
      default:
        break;
    }
  }, [users, filter]);

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
        <StyledDropDownOption value="show all">Show All</StyledDropDownOption>
        <StyledDropDownOption value="follow">Follow</StyledDropDownOption>
        <StyledDropDownOption value="followings">
          Followings
        </StyledDropDownOption>
      </StyledDropdown>
      <StyledContainer>
        {filteredUsers.length === 0 && filter === 'followings' && (
          <>
            <p>No followings yet </p>
            <p>It`s time to follow someone!</p>
          </>
        )}
        <StyledTweetsUl>
          {filteredUsers.length !== 0 &&
            filteredUsers.map((user) => (
              <li key={user.id}>
                <TweetCard
                  cardId={user.id}
                  tweets={user.tweets}
                  followers={user.followers}
                  avatar={user.avatar}
                  setUsers={setUsers}
                  isFollowed={user.isFollowed}
                />
              </li>
            ))}
        </StyledTweetsUl>
        {isLoading && <p>Loading...</p>}
        {isVisibleButton && filter === 'show all' && (
          <StyledTweetButton type="button" onClick={onClick}>
            Load More
          </StyledTweetButton>
        )}
      </StyledContainer>
    </>
  );
};

export default TweetsPage;
