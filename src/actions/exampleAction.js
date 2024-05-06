export const exampleAction = () => async dispatch => {
  try{
    const response = await fetch('https://example.com/user')
    const parsedResponse = await response.json()
    dispatch({
      type: 'EXAMPLE_ACTION',
      payload: parsedResponse
    });

  }catch(e){
    console.log(e);
  }
};