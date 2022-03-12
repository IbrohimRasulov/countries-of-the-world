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
import Homepage from './components/Homepage';
import Details from './components/Details';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:countryName" element={<Details />} />
        </Routes>
      </Router>
    </div>
  </Provider>
);

export default App;
