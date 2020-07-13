import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navigation, Footer, Home, Shop, Reviews, Login, Signup, NotFoundPage } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/shop" exact component={() => <Shop />} />
          <Route path="/reviews" exact component={() => <Reviews />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <Signup />} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
