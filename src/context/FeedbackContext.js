import { createContext, useReducer } from "react";
import FeedbackReducer from "./FeedbackReducer";

const initialState = {
    feedback: [
        {
            id: 1,
            text: 'text 1',
        },
        {
            id: 2,
            text: 'text 2',
        },
    ],  
}

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FeedbackReducer, initialState );

    const deleteFeedback = (payload) => {
        dispatch({type: 'DELETE' , payload})

    }

  return (
    <FeedbackContext.Provider value={{...state, deleteFeedback}}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
