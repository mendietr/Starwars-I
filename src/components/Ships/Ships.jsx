import React from "react";
import * as actions from "../../redux/actions";
import * as ReactRedux from "react-redux";
import ShipCard from "../ShipCard/ShipCard";
// Este componente hay que resolverlo de la mano de ShipCard para hacerlo funcionar correctamente!
// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'

export default function Ships() {
  const dispatch = ReactRedux.useDispatch();
  // let detail = useSelector((state) => state.detail);
  const naves = ReactRedux.useSelector((state) => state.ships);

  React.useEffect(() => {
    dispatch(actions.getShips());
  }, []);
  return (
    <div>
      <h1>The most iconic Ships!</h1>
      {naves &&
        naves.map((n) => (
          <ShipCard name={n.name} image={n.image} alt={n.name} />
        ))}
    </div>
  );
}
