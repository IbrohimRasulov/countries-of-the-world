import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Homepage from '../components/Homepage';

it('testing rendering Homepage component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Homepage />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
