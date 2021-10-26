import {createStore} from  "redux"


const init = {
    datas : null
}

const redu = (state=init,action)=>{
    switch (action.type) {
        case "loged":
            return{
                ...state,datas : action.users
            }   
    
        default:
            return state
    }

}

export const store = createStore(redu);

