const initialState = {
  loginUser: {},
  loginError: null,
  token: localStorage.getItem('token'),
  allUser: []
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
  
      case 'ALL_USERS':
        return {
          ...state,
          allUser: action.payload
        };
      case 'POST_CREATED':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
  
      case 'ALL_POST_TURISTIC':
        return {
          ...state,
          allPost: action.payload
        };
  
      case 'DETAIL_POST_TURISTIC':
        return {
          ...state,
          detailpost: action.payload
        };
  
      case 'HOSTESS_USER':
  
        return {
          ...state,
          hostessuser: action.payload
        }
  
      case 'ONLY_POST':
  
        return {
          ...state,
          onlypost: action.payload
        }
  
      case "DELETE_POST":
        // Filtra las publicaciones para eliminar la que coincide con el postId
        const updatedOnlyPost = state.onlypost.filter(post => post.id !== action.payload.id);
        return {
          ...state,
          onlypost: updatedOnlyPost,
        };
  
      case "UPDATE_PERSONAL":
        return {
          ...state,
          datapersonal: action.payload,
        };
  
        case "USER_POST":
          return {
            ...state,
            userandpost: action.payload,
          };
  
      default: return { ...state }
    }
  }
  
  
  
  
  
  
  