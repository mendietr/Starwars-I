import "./CharacterCard.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import * as ReactRedux from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.
const CharacterCard = (props) => {
  const dispatch = ReactRedux.useDispatch();

  const onHandleClick = (e) => {
    dispatch(actions.deleteCharacter(props.id));
  };

  return (
    <div>
      <button onClick={onHandleClick}>X</button>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>{props.faction}</p>
      <Link to={`/character/${props.id}`}>{props.name}</Link>
    </div>
  );
};

export default CharacterCard;
