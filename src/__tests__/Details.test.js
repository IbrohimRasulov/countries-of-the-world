import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import Details from '../components/Details';

it('testing rendering Details component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
