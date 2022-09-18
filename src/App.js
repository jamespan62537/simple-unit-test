import "./App.css";
// Redux
import setupStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";

// Pages
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Provider store={setupStore()}>
      <div className="App">
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;
