// Importa las action types acá
import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  CREATE_CHARACTER,
  DELETE_CHARACTER,
  GET_SHIPS,
} from '../actions/index'


const initialState = {
  characters: [],
  characterDetail: {},
  ships: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };
    }
    case GET_CHARACTER_DETAIL: {
      return {
        ...state,
        characterDetail: {...action.payload},
      }
    }

    case CREATE_CHARACTER: {
      return {
        ...state,
        characters: [...state.characters, action.payload],
      }
    }

    case DELETE_CHARACTER: {
      return {
        ...state,
      characters: [...state.characters.filter((characters) => characters.id !==action.payload)],
    };}
    
    case GET_SHIPS: {
      return {
        ...state,
        ships: [...state.characters, ...action.payload],
      };
    }

    default:
      return state;

  }

   
};

export default rootReducer;
