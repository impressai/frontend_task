export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch("http://example.com/users");
    const parsedResponse = await response.json();
    dispatch({
      type: "LIST_USERS",
      payload: parsedResponse,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addUser = (payload) => async (dispatch) => {
  try {
    const response = await fetch("http://example.com/user", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch(getUsers());
    }
  } catch (e) {
    console.log(e);
  }
};

// added deleteUser and editUser to userActions
export const deleteUser = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`http://example.com/user/${payload}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: "DELETE_USER",
        payload: { id: payload },
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const editUser = (id,payload) => async (dispatch) => {
  try {
    const response = await fetch(`http://example.com/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: "EDIT_USER",
        payload: payload,
      });
    }
  } catch (e) {
    console.log(e);
  }
};