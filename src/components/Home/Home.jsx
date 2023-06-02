import "./home.css";
import React, { Component } from "react";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import mainImage from "../../img-cp2/cp-fm2-image.png";
import CharacterCard from "../CharacterCard/CharacterCard";
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
// Aparte Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <h2>May the force be with you</h2>
        <img src={mainImage} alt="star-wars-logo" />
        <h3>Characters</h3>
        <ul>
          {this.props.characters &&
            this.props.characters.map((c) => (
              <CharacterCard
                id={c.id}
                name={c.name}
                faction={c.faction}
                image={c.image}
              ></CharacterCard>
            ))}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { characters: state.characters };
};

export const mapDispatchToProps = (dispatch) => {
  return { getCharacters: () => dispatch(actions.getCharacters()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
