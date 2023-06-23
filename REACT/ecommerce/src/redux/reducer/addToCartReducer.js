
export const addToCart = (state=[],action)=>{
    switch(action.type){
        case 'ADD':{
            const prevData=localStorage.getItem('cartValue')

            if (prevData !== null){
                let data=JSON.parse(prevData)
                let newData =[...data,action.payload]
                localStorage.setItem('cartValue',JSON.stringify(newData))
            }else{

                localStorage.setItem('cartValue',JSON.stringify([...state,action.payload]))

            }
            
            return[...state,action.payload]

        }
        case 'REMOVE':{
           
            let newState = [...action.payload]
            localStorage.setItem('cartValue',JSON.stringify(newState))
            return newState;
        }
       
      default:{
        let x =localStorage.getItem('cartValue');
        if(x!==null){
            let newState =[...JSON.parse(x)];
            return newState;
        }else{
            return state
        }
      }
    }
}