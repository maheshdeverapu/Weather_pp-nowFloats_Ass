import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Consumer/>
    </Provider>
  );
}

export default App;
