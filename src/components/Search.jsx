import {React, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";



function Search() {

    // get value entered
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    // event handler
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <FormStyle action="" onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 10rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    border-radius: 10px;
    color: #fff;
    padding: 1rem 3rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 1%;
    transform: translate(100%, -50%);
    cursor:pointer;
  }
`;

export default Search