import './App.css';
import { Provider } from "react-redux";
import Home from './content/home';
import store from './stateManagement/store';
import Router from './content/router';

function App() {
  return (
    <Provider store={store}>
    <Router/>
    </Provider>
  );
}

export default App;
