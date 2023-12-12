import axios from 'axios'






 export const register = (payload) => {
  return async (dispatch) => {
      const res = axios.post('https://grupo-production.up.railway.app/register', payload)
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

        const response = await axios.post("https://grupo-production.up.railway.app/login", {
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


// actions/authActions.js

export const logout = () => {
return {
  type: 'LOGOUT',
};
};


export const Users = () => {
  return async (dispatch) => {
      const res = axios.get('https://grupo-production.up.railway.app/users')
      const data = res.data

      return dispatch({
          type: "ALL_USERS",
          payload: data
      })

  }
}




export const DataPersonal = (token) => {
return async (dispatch) => {
  try {
    const res = await axios.get('https://grupo-production.up.railway.app/user', {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = res.data;

    dispatch({
      type: 'DATA_PERSONAL',
      payload: data,
    });
  } catch (error) {
    console.error("Error al obtener datos personales:", error);
    // Podrías dispatch una acción de error si es necesario
  }
};
};


export const addLead = (payload) => {
return async (dispatch) => {
    const res = await axios.post('https://grupo-production.up.railway.app/lead', payload)
    const data = res.data

    return dispatch({
        type: "ADD_LEAD",
        payload: data
    })

}
};

export const AllLead = () => {
return async (dispatch) => {
    const res = await axios.get('https://grupo-production.up.railway.app/lead')
    const data = res.data

    return dispatch({
        type: "All_LEAD",
        payload: data
    })

}
}
export const ClientLead = (clientId) => {
  return async (dispatch) => {
      const res = await axios.get(`https://grupo-production.up.railway.app/lead/${clientId}`)
      const data = res.data
  
      return dispatch({
          type: "CLIENT_LEAD",
          payload: data
      })
  
  }
  }

  export const UpdateClient = (clientId, payload) => {
    return async (dispatch) => {
        const res = await axios.put(`https://grupo-production.up.railway.app/lead/${clientId}`, payload)
        const data = res.data
    
        return dispatch({
            type: "UPDATE_LEAD",
            payload: data
        })
    
    }
    }

    export const DeleteClient = (clientId) => {
      return async (dispatch) => {
          const res = await axios.delete(`https://grupo-production.up.railway.app/lead/${clientId}`, )
          const data = res.data
      
          return dispatch({
              type: "DELETE_LEAD",
              payload: data
          })
      
      }
      }  

    











      




























/*  export const register = (payload) => {
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


// actions/authActions.js

export const logout = () => {
return {
  type: 'LOGOUT',
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




export const DataPersonal = (token) => {
return async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/user', {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = res.data;

    dispatch({
      type: 'DATA_PERSONAL',
      payload: data,
    });
  } catch (error) {
    console.error("Error al obtener datos personales:", error);
    // Podrías dispatch una acción de error si es necesario
  }
};
};


export const addLead = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/lead', payload);
      const data = res.data;

      dispatch({
        type: "ADD_LEAD",
        payload: data
      });
    } catch (error) {
      console.error('Error al agregar el Lead:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};


export const AllLead = () => {
return async (dispatch) => {
    const res = await axios.get('http://localhost:3001/lead')
    const data = res.data

    return dispatch({
        type: "All_LEAD",
        payload: data
    })

}
}
export const ClientLead = (clientId) => {
  return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/lead/${clientId}`)
      const data = res.data
  
      return dispatch({
          type: "CLIENT_LEAD",
          payload: data
      })
  
  }
  }

  export const UpdateClient = (clientId, payload) => {
    return async (dispatch) => {
        const res = await axios.put(`http://localhost:3001/lead/${clientId}`, payload)
        const data = res.data
    
        return dispatch({
            type: "UPDATE_LEAD",
            payload: data
        })
    
    }
    }

    export const DeleteClient = (clientId) => {
      return async (dispatch) => {
          const res = await axios.delete(`http://localhost:3001/lead/${clientId}`, )
          const data = res.data
      
          return dispatch({
              type: "DELETE_LEAD",
              payload: data
          })
      
      }
      } 
 */












      