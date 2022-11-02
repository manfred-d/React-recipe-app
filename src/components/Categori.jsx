import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { React} from 'react';
// lazy loading
// const NavLink = lazy("react-router-dom");

function Categori() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"} >
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"} >
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
`;
const Slink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  align-items:center;
  background:linear-gradient(35deg,#494949,#313131);
  border-radius:50%;
  width:5rem;
  height:5rem;
  margin-right:1rem;
  justify-content:center;
  text-decoration:none;
  cursor:pointer;
  h4{
    color:#fff;
    font-size:0.7rem;
  }
  svg{
    color:white;
    font-size:1rem;
  }
  &.active{
    background:linear-gradient(to right, #f27121,#e94067);
  }

`;
export default Categori