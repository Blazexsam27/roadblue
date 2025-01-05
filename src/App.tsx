import Home from "./views/Home";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
