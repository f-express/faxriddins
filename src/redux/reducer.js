
const initialState = {
  email:"",
  avatar: "",
  name: "",
  id: ""
}

const basketInitialState = {
  obj: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATED":
      return { email: action.email, avatar: action.avatar, name: action.name , id: action.id}
    default:
      return state
  }
}

const basketReducer = (state = basketInitialState, action) => {
  switch(action.type){
    case "ADD_TO_BASKET":
    return {
      obj: [...state.obj,action.obj]
    }
    default:
      return state
  }
  return ""
}

export { reducer,basketReducer }