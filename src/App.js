import React from "react";
import "./styles/App.sass";
import { Route, Switch } from "react-router-dom";
import PurchaseList from "./containers/PurchaseList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./hoc/Layout";

library.add(fab, faCartPlus, faCheckCircle, faTimesCircle);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={PurchaseList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
