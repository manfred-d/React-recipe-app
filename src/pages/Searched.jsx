import React,{ useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

    const [searchedRecipe, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json(); 
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
      <Grid>
        {searchedRecipe.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          );
        })};
      </Grid>
    );
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
  grid-gap: 1rem;
`;
const Card = styled.div`
  width: 15rem;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched