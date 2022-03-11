import './reset.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';

// ! Components
import Header from './components/Header';
import Homepage from './components/Homepage';
import Details from './components/Details';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Header className="App-header" />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  </Provider>
);

export default App;
