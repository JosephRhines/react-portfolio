import React from "react";
import burgers from "../../assets/images/burgers.jpg";
import games from "../../assets/images/games.jpg";
import employee from "../../assets/images/employee.jpg";
import weather from "../../assets/images/weather.jpg";
import quizz from "../../assets/images/quizz.jpg";
import nationalparks from "../../assets/images/nationalparks.jpg";
import "../../styles/Portfolio.css";

function Portfolio() {
    return (
        <>
        <main class="container header">
    <header class="row">
       {/* <div class="col-md-2">  */}
        <h1>Portfolio</h1>
       {/* </div> */}
    </header>

    
    
    <section class="row">
      <div class="col-md-3 border m-1"><img src={nationalparks} width="100%" alt="nationalparks"/><br/><strong>Title: Midwest National Parks</strong><br/><a href="https://yermasog.github.io/Find-a-National-Park-app/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/yermasog/Find-a-National-Park-app" target="_blank" rel="noreferrer">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src={games} width="100%" alt="Games[i]"/><br/><strong>Title: Games[i]</strong><br/><a href="https://game-i.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/inqueblot/boardgame_collection" target="_blank" rel="noreferrer">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src={burgers} width="100%"  alt="burgers"/><br/><strong>Title: Burger App</strong><br/><a href="https://big-fat-burger.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/JosephRhines/burger" target="_blank"rel="noreferrer" >Github Repo</a></div>
     
    </section>
    <br/>
    <section class="row">
      <div class="col-md-3 border m-1"><img src={quizz} width="100%" alt="quizz"/><br/><strong>Title: Quizz2021</strong><br/><a href="https://josephrhines.github.io/Quiz2021/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/JosephRhines/Quiz2021" target="_blank" rel="noreferrer">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src={weather} width="100%"  alt="weather"/><br/><strong>Title: WeatherDashboard2021</strong><br/><a href="https://josephrhines.github.io/WeatherDashbord2021/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/JosephRhines/WeatherDashbord2021" target="_blank" rel="noreferrer">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src={employee} width="100%"  alt="employee-directory"/><br/><strong>Title: Employee-Directory</strong><br/><a href="https://josephrhines.github.io/employee-directory/" target="_blank" rel="noreferrer">Deployed Link</a><br/><a href="https://github.com/JosephRhines/employee-directory" target="_blank" rel="noreferrer">Github Repo</a></div>
     
    </section>
    

  
  </main>
    </>
    );
  
}



export default Portfolio;