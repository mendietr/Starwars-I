import React from "react";

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/character/create">Create Character</Link>
    </div>
  );
}
// class Nav extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/characters/create">Create Characters</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Nav;



