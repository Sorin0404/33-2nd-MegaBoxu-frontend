import React from 'react';
import styled, { css } from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

function MovieLists({ age, title, handleSelectMovie, titleSelect }) {
  const { bgColor, ageColor } = matchToAge[age];
  return (
    <MovieTitles
      onClick={() => {
        handleSelectMovie(title);
      }}
      titleSelect={titleSelect}
    >
      <MovieAge bgColor={bgColor}>{ageColor}</MovieAge>
      <span>{title}</span>
      <FaRegHeart className="icons" />
    </MovieTitles>
  );
}

export default MovieLists;

const MovieTitle = css`
  ${({ titleSelect }) => {
    if (titleSelect) {
      return css`
        background-color: ${({ theme }) => theme.colors.gray};
        color: white;
      `;
    } else {
      return css`
        background-color: transparent;
        color: black;

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightGray};
        }
      `;
    }
  }}
`;

const MovieTitles = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.5rem;
  ${MovieTitle};

  .icons {
    position: absolute;
    color: #d8d9db;
    right: 0;
    cursor: pointer;
  }
`;

const MovieAge = styled.div`
  padding: 0.3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const matchToAge = {
  All: { ageColor: 'All', bgColor: '#3fa900' },
  12: { ageColor: '12', bgColor: '#198ef6' },
  15: { ageColor: '15', bgColor: '#e49c0c' },
  18: { ageColor: '18', bgColor: '#e81002' },
};
