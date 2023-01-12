import React, { Component } from "react";

export class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  render() {
    const { heroName, realName, image } = this.props;
    const { age } = this.state;
    const birthday = () => this.setState({ age: age + 1 });

    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col">
            <img className="card-img-top" src={image} alt={heroName} />
          </div>
          <div className="col">
            <div className="card-body">
              <h2>{heroName}</h2>
              <p className="card-text">Real Name: {realName}</p>
              <p className="card-text">Age: {age}</p>
              <button className="btn btn-success" onClick={birthday}>Birthday</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCard;
