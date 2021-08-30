import { Fragment, useEffect } from 'react';

import Navbars from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import Cart from './components/Cart/Cart';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setCartItem, fetchCartItem } from './hooks/use-storeItem';

function App() {
  const showCart = useSelector((state) => state.cartModal.CartisVisible);
  const cartDataOnLoad = useSelector((state) => state.cartItem);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItem(dispatch));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCartItem(cartDataOnLoad));
  }, [cartDataOnLoad, dispatch]);

  return (
    <Fragment>
      {showCart && <Cart />}
      <Router>
        <Navbars />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
