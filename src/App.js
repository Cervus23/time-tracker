import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import TrackerBox from "./containers/TrackerBox";
import "./App.scss";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TrackerBox />
      </div>
    </Provider>
  );
}

export default App;
