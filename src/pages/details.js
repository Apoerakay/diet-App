import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";


const meal =[
{
  title:"green tea/decaf tea ",
  description:"1 bag with Skimmed milk",
  condition: "Diabetes",
  timeOfDay: "Breakfast"
},
{
  title:"white porridge ",
  description:"2 soup laddles with 2 slices of wheat bread",
  condition: "Diabetes",
  timeOfDay: "Breakfast"
},
{
title:"Natural cocoa powder",
  description:"1 and half spoon scoop",
  condition: "Diabetes",
  timeOfDay: "Breakfast"
},

{
  title:"Tom brown",
    description:"2 soup ladles  with sweetener (1-2 sachets splenda)",
    condition: "Diabetes",
    timeOfDay: "Breakfast"
  },
  {
    title:"Wheat porridge",
      description:"2 soup ladles with skimmed milk (2-3 tea spoons)",
      condition: "Diabetes",
      timeOfDay: "Breakfast"
    },

    {
      title:"jollof",
        description:"2 soup laddles with all types of vegetables",
        condition: "Diabetes",
        timeOfDay: "Lunch"
      },

      {
        title:"Banku /Fufu (little cassava)",
          description:"5 or less ladles of soups(all vegetable soups are recommended with minute oil content",
          condition: "Diabetes",
          timeOfDay: "Lunch"
        },

        {
          title:"Rice Balls",
            description:"5 or less ladles of soups(all vegetable soups are recommended with minute oil content",
            condition: "Diabetes",
            timeOfDay: "Lunch"
          },
          {
            title:"Yam",
              description:"4 slices with 5 or less ladles of stew (all vegetable stews are recommended with minute oil content",
              condition: "Diabetes",
              timeOfDay: "Lunch"
            },
            {
              title:"kenkey",
                description:"5 or less ladles of soups(all vegetable soups are recommended with minute oil content",
                condition: "Diabetes",
                timeOfDay: "Lunch"
              },
              {
                title:"for supper",
                  description:"Repeat any of the meals for lunch",
                  condition: "Diabetes",
                  timeOfDay: "Supper"
                }
]


function Detail() {
  const [details, setDetails] = useState({})
  const params = useParams()
  const [meals, setMeals] = useState([])
  const [filteredmeals, setFilteredMeals] = useState([])


  console.log('params', params)

  const url = `http://localhost:8000/api/Condition/${params.id}`
  const displayDetails = async () => {
    const detail = await fetch(`http://localhost:8000/api/Condition/${params.id}`).then((response) => response.json()).then((conditionsdetails) => {
      setDetails(conditionsdetails)
      console.log({ conditionsdetails })
    })

  }



  const getMealDet = async () => {

    const mealsData = await fetch("http://localhost:8000/api/Meals").then((response) => response.json()).
      then((mealData) => {
        setMeals(mealData)
        console.log({mealData})
        
      })
      

  }
  let mealData = []
  const getFiltredData = () => {

    console.log({meals})
    console.log({details})
    const filteredMeal = meals.filter((meal) => {
      return meal.condition == details.title;
    });
    // setFilteredMeals(filteredMeal)
    mealData = filteredMeal
    console.log({filteredMeal})
  };
  getFiltredData()
  console.log({mealData})
  const finalData=mealData[0]?.meals
  console.log({finalData})
  useEffect(() => {
    displayDetails()
    getMealDet()
    // getFiltredData()
  }, [])

  {
    return (

      <>
        <Navbar />
        <div className="text-center text-5xl pt-24 font-bold">
          <h1>{details.title}</h1>

        </div>
        <div className="text-center text-3xl pt-4 w-[700px] mx-[300px]">
          <p>{details.description}</p>
     
        </div>

   
   <table class="w-full h-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto pt-24 p-20 mb-20">
  <thead>
    <tr class="bg-blue-500 text-white">
      
      <th class="py-2 px-4 text-left">Title</th>
      <th class="py-2 px-4 text-left">Serving</th>
      <th class="py-2 px-4 text-left">time of meal</th>
    </tr>
  </thead>
  <tbody>
  {meal.map((data)=>{
  return(
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">{data.title}</td>
      <td class="py-2 px-4">{data.description}</td>
      <td class="py-2 px-4">{data.timeOfDay}</td>
    </tr>
    )})}
    
  </tbody>
</table>
  
  

       
        
       


      </>
    )

  }
}




export default Detail;
