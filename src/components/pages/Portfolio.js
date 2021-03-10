import React from "react";

function Portfolio() {
    return (
        <>
        <main class="container header">
    <header class="row">
      {/* <div class="col-md-2"> */}
        <h1>Portfolio</h1>
      {/* </div> */}
    </header>

    
    
    <section class="row">
      <div class="col-md-3 border m-1"><img src="./assets/images/nationalparks.jpg" width="100%" alt="nationalparks"/><br/><strong>Title: Midwest National Parks</strong><br/><a href="https://yermasog.github.io/Find-a-National-Park-app/" target="_blank">Deployed Link</a><br/><a href="https://github.com/yermasog/Find-a-National-Park-app" target="_blank">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src="./assets/images/games.jpg" width="100%" alt="Games[i]"/><br/><strong>Title: Games[i]</strong><br/><a href="https://game-i.herokuapp.com/" target="_blank">Deployed Link</a><br/><a href="https://github.com/inqueblot/boardgame_collection" target="_blank">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src="./assets/images/burgers.jpg" width="100%"  alt="burgers"/><br/><strong>Title: Burger App</strong><br/><a href="https://big-fat-burger.herokuapp.com/" target="_blank">Deployed Link</a><br/><a href="https://github.com/JosephRhines/burger" target="_blank">Github Repo</a></div>
     
    </section>
    <br/>
    <section class="row">
      <div class="col-md-3 border m-1"><img src="./assets/images/quizz.jpg" width="100%" alt="quizz"/><br/><strong>Title: Quizz2021</strong><br/><a href="https://josephrhines.github.io/Quiz2021/" target="_blank">Deployed Link</a><br/><a href="https://github.com/JosephRhines/Quiz2021" target="_blank">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src="./assets/images/weather.jpg" width="100%"  alt="weather"/><br/><strong>Title: WeatherDashboard2021</strong><br/><a href="https://josephrhines.github.io/WeatherDashbord2021/" target="_blank">Deployed Link</a><br/><a href="https://github.com/JosephRhines/WeatherDashbord2021" target="_blank">Github Repo</a></div>
      <div class="col-md-3 border m-1"><img src="./assets/images/employee.jpg" width="100%"  alt="employee-directory"/><br/><strong>Title: Employee-Directory</strong><br/><a href="https://josephrhines.github.io/employee-directory/" target="_blank">Deployed Link</a><br/><a href="https://github.com/JosephRhines/employee-directory" target="_blank">Github Repo</a></div>
     
    </section>
    

  
  </main>
    </>
    );
  
}



export default Portfolio;