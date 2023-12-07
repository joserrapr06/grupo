const initialState = {
  token: localStorage.getItem('token'),
  loginUser: {},
  loginError: null,
  allUser: [],
  isAuthenticated: false,
  allLead: [],
  dataPersonal: [],
  clientLead: []

  
  }
  
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER':
        return {
          ...state
        };
  
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload,
        };
      case 'LOGOUT_USER':
        // Limpia el token en el estado
        return {
          ...state,
          token: null,
        };
  
      case 'LOGIN_ERROR':
        return {
          ...state,
          loginError: true,
        };

        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
          };
  
      case 'ADD_LEAD':
        return {
          ...state,
        };

        case 'All_LEAD':
          return {
            ...state,
            allLead: action.payload
          };

          case 'DATA_PERSONAL':
            return {
              ...state,
              dataPersonal: action.payload

            };
            case 'CLIENT_LEAD':
              return {
                ...state,
                clientLead: action.payload
  
              };

              case 'UPDATE_LEAD':

              return {
                ...state,
                clientLead: { ...state.clientLead, ...action.payload },

              }
              case "DELETE_LEAD":

              return {
                ...state,
                clientLead: { ...state.clientLead, ...action.payload },
              };



            
       
     
  
      default: return { ...state }
    }
  }
  
  
  
  
  
  
  