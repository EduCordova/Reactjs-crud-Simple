// import {createStore} from 'redux'

// const reducer = (state,action)=>{

//     if(action.type === "ADD_TO_TABLE"){
//         return{
//             ...state,
//             datosTab:state.datosTab.concat(action.dato)
            
//         }
//     }else if(action.type === "DELETE_TO_TABLE"){
//         return{
//             ...state,
//             datosTab:state.datosTab.filter(dato => dato.id !== action.dato.id)
//         }
//     }

//     return state;
// }


// export default createStore(reducer,{
//     datosTab:[],
//     name:''
//     // fecha: new Date().toISOString().slice(0, 10),
//     // hora: "13:00"

// })