import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

it('testing rendering Header component', () => {
  const tree = renderer.create(<Router><Header /></Router>).toJSON;
  expect(tree).toMatchSnapshot();
});
