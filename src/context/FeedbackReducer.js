

 const FeedbackReducer = (state, action) => {
     switch(action.type) {
         case 'DELETE': {
             console.log(`DELETE ${action.payload}`)
         }
     }

    return {...state}
}


export default FeedbackReducer;

