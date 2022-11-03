import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import styled from 'styled-components';

function logo() {
  return (
    <Header>
        <a href="/">
            <GiKnifeFork />
            <h4>Delicious</h4>
        </a>
    </Header>
  )
}
const Header = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 10px;
  top: 0;
  left: 0;

  a {
    text-decoration: none;
    font-size: 3rem;
    svg {
      color: #494949;
    }
    h4 {
      color: #494949;
      font-size: 1rem;
      font-style: italic;
    }
  }
`;

export default logo