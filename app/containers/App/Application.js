import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Templates/Dashboard";
import { ThemeContext } from "./ThemeWrapper";
import {
  Parent,
  DashboardPage,
  BlankPage,
  Criteria1,
  Criteria2,
  Criteria3,
  Criteria4,
  Criteria5,
  Criteria6,
  Error,
  NotFound,
} from "../pageListAsync";

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path="/app" component={BlankPage} />
        <Route exact path="/app/blank-page" component={BlankPage} />
        <Route path="/app/pages/dashboard" component={DashboardPage} />
        <Route path="/app/QIF/Criteria-1" component={Criteria1} />
        <Route path="/app/QIF/Criteria-2" component={Criteria2} />
        <Route path="/app/QIF/Criteria-3" component={Criteria3} />
        <Route path="/app/QIF/Criteria-4" component={Criteria4} />
        <Route path="/app/QIF/Criteria-5" component={Criteria5} />
        <Route path="/app/QIF/Criteria-6" component={Criteria6} />
        <Route path="/app/pages/not-found" component={NotFound} />
        <Route path="/app/pages/error" component={Error} />
        <Route exact path="/app/pages" component={Parent} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
