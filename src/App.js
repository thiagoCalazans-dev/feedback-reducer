import { FeedbackProvider } from "./context/FeedbackContext";
import Home from "./pages/Home";


function App() {


  return (
    <FeedbackProvider>
    <div className="App">
      <Home/>
    </div>
    </FeedbackProvider>
  );
}

export default App;
