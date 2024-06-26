import { Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import RecipeItem from "../components/recipe-item";
import noRecipes from "../assets/undraw_no_data_re_kwbl.svg";
import spinner from "../assets/Infinity@1x-1.0s-200px-200px.svg"
import Navbar from "../components/navbar";



function Recipe(){
    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [loading, setLoading] = useState(false);
  
    const searchRecipes = () => {
  
      setLoading(true);
      const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
      url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
      url.searchParams.append('query', searchItem);

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //update recipes state
        //console.log({data});
        setRecipes(data.results)

      })
      .catch((error) => {
        console.log(error);
      }).finally(() => setLoading(false))
  };

  useEffect(searchRecipes, [])
  return(
    <>
    <Navbar/>
    <Container className="pt-[50px] " sx={{ my: '2rem' }}>
    <TextField
      fullWidth
      id="outlined-basic"
      label="Enter a keyword to search recipes and hit enter"
      variant="outlined"
      value={searchItem}
      onChange={(event) => setSearchItem(event.target.value)}
      onKeyDown={event => event.key == 'Enter' && searchRecipes()}
    />


    <Grid sx={{ mt: '1rem' }} container spacing={3}>
      {loading ? <Container sx={{ display: 'flex', justifyContent: 'center' }}><img src={spinner} width='25%' /></Container> : recipes.length > 0 ? recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} />) :
        (<Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={noRecipes} width="25%" />
        </Container>)}

    </Grid>
  </Container>
  </>
)}




export default Recipe