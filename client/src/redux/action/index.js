import axios from 'axios'



export const register = (payload) => {
    return async (dispatch) => {
        const res = axios.post('http://localhost:3001/register', payload)
        const data = res.data

        return dispatch({
            type: "REGISTER",
            payload: data
        })

    }
}

export const login = (email, password) => {
    return async (dispatch) => {
      try {
  
          const response = await axios.post("http://localhost:3001/login", {
            email,
            password,
          });
  
          if (response.status === 200 && response.data.token) {
            localStorage.setItem("token", response.data.token);
  
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: response.data.token,
            });
          } else {
            throw new Error("Error durante el inicio de sesión.");
          }
    
      } catch (error) {
        dispatch({ type: "LOGIN_ERROR" });
      }
    };
  };

  


export const Users = () => {
    return async (dispatch) => {
        const res = axios.get('http://localhost:3001/users')
        const data = res.data

        return dispatch({
            type: "ALL_USERS",
            payload: data
        })

    }
}