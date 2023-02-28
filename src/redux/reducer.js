
const initialState = {
  name:"" ,
  image: ""
} 
const reducer = (state = initialState,action) =>{
    console.log(action);
    switch(action.type){
        case "CREATED_NAME":
        case "CREATED_image":
        return{name: action.name,image: action.image}
        default :
        return state
    }
  }

export { reducer }