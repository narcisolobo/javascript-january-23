import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import superheroes from "./data/superheroes";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="container border border-primary my-3 p-3">
        <h1>App</h1>
        <h3>Props are READ ONLY.</h3>
        {superheroes.map((hero, idx) => {
          return (
            <HeroCard
              key={idx}
              heroName={hero.heroName}
              realName={hero.realName}
              age={hero.age}
              image={hero.image}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
