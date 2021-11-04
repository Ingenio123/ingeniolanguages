import React from "react";
import ReactDOM from "react-dom";
import "./assets/components/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/components/default.css";
import { Profile } from "./components/profileTeacher/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SignIn from "./components/Forms/SignIn";
import SignUp from "./components/Forms/SignUp";
import PrivateRouter from "./Routes/PrivateRoute";
import UserPrivate from "./components/Private/UserPrivate";
import formCheckOutPay from "./components/Pay/formCheck";
import Home from "./home";

// admins
import { AdminRoute } from "./Routes/AdminRoute";
import { Admin } from "./components/Private/Admin";

import { TeacherRoutes } from "./Routes/TeacherRoute";
import { Teacher } from "./components/Private/Teacher";
import resultDatafast from "./components/Pay/PageResultDatafast";

import PoliticasPrivacidad from "./components/PoliticasPrivacidad/PoliticasPrivacidad";

import FormTemary from "./components/Temary/FormTemary";
import OrderSummary from "./components/OrderCarts/OrderPay";
import { IsAuth } from "./helpers/Requests";
import Sidebar from "./components/Private/UserUI/Sidebar";
import IndexTemary from "./components/Private/UserUI/Temary/IndexTemary";
import { UserContextProvider } from "./components/Context/UserContext";

import redirectpage from "./components/Redirect/redirect";
import UserSumary from "./components/Private/UserSumary";

import TerminosCondiciones from "./components/TerminosCondiciones/TerminosCondiciones";
import BookLesson from "./components/Private/UserUI/BookLesson";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <Router>
          <App />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/ProfileTeachers/:idTeacher"
              component={Profile}
            />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/payclient" component={formCheckOutPay} />
            <Route exact path="/results/" component={resultDatafast} />
            <Route
              exact
              path="/politicasPrivacidad"
              component={PoliticasPrivacidad}
            />
            <Route exact path="/redirect" component={redirectpage} />
            <Route exact path="/createonetemary" component={FormTemary} />
            <Route exact path="/orderSummary" component={OrderSummary} />
            <Route
              exact
              path="/TerminosCondiciones"
              component={TerminosCondiciones}
            />
            <PrivateRouter path="/private" exact component={UserPrivate} />
            <PrivateRouter path="/myprogress" exact component={UserSumary} />
            <PrivateRouter path="/temary" exact component={IndexTemary} />
            <PrivateRouter path="/booklesson" exact component={BookLesson} />

            <AdminRoute path="/admin" exact component={Admin} />

            <TeacherRoutes path="/teacherPage" exact component={Teacher} />
          </Switch>
        </Router>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
