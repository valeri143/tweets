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
} from './TweetsPage.styled';
import sprite from '../../assets/sprite.svg';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const naigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers(page);
      setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
    };
    getUsers();
  }, [page]);

  const onClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <StyledContainer>
        <StyledH1>Tweets</StyledH1>
      </StyledContainer>
      <StyledButton type="button" onClick={() => naigate('/')}>
        <StyledArrowSvg width="20" height="20">
          <use href={`${sprite}#icon-arrow-left`}></use>
        </StyledArrowSvg>
        Back
      </StyledButton>
      <StyledContainer>
        <StyledTweetsUl>
          {users &&
            users.map((user) => (
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
        <button type="button" onClick={onClick}>
          {' '}
          Load more
        </button>
      </StyledContainer>
    </>
  );
};

export default TweetsPage;
