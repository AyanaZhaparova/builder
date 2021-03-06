import Layout from "./components/Layout/Layout";
import SeedsBuilder from "./components/SeedsBuilder/SeedsBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";
import Logout from "./components/Logout/Logout";
import Auth from "./components/Auth/Auth";

const App = () => {
  
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.token !== null )

    useEffect(() => {
      dispatch(restore());
      }, [dispatch]);
  
      let output = (
        <Switch>
          <Route path="/" component={SeedsBuilder} exact />
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      );

      if (isAuthenticated) {
        output = (
          <Switch>
        <Route path="/" component={SeedsBuilder} exact />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth}  />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />

          </Switch>
        )
      }


  return (
    <div className="App">
      <Layout>
        {output}
      </Layout>
    </div>
  );
}

export default App;