export const getUsers = () => async dispatch => {
  try{
    const response = await fetch('http://example.com/users')
    const parsedResponse = await response.json()
    dispatch({
      type: 'LIST_USERS',
      payload: parsedResponse
    });
  }catch(e){
    console.log(e);
  }
};

export const addUser = (payload) => async dispatch => {
  try{
    const response = await fetch("http://example.com/user", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const parsedResponse = await response.json()
    if(parsedResponse.success){
      dispatch(getUsers());
    }
  }catch(e){
    console.log(e);
  }
};
