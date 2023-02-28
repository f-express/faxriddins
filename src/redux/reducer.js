
const initialState = {
  name: "",
  image: ""
}

const basketInitialState = {
  obj: []
}
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATED_NAME":
    case "CREATED_image":
      return { name: action.name, image: action.image }
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