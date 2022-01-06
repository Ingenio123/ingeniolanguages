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
// import UserPrivate from "./components/Private/UserPrivate";
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
// import BookLesson from "./components/Private/UserUI/BookLesson";

import { UserProvider } from "./components/Context/userDataContext";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import Footer from "./components/Footer/NewFooter";
import StudentState from "./hooks/useStudent";

// component pruebas
import Pruebas from "./pruebas";

// -----------components Teacher  ------------------------
import PrivateTeacher from "./Teacher/private";

import Notificacion from "./pages/Notificacion";
import Democlass from "./pages/verifyclassdemo";

import UserPrivate from "./pages/Private_pages/UserOrStudent/userprivate";

import StudentProvider from "./hooks/useStudent";

import { ModalContextProvider } from "./components/Context/modlaContext";

// Navbar statete -> idiom
import NavbarState from "./hooks/useNavbar";

// ######################################### PAGES ########################################## //
import BookLesson from "./pages/Private_pages/UserOrStudent/bookLesson";
import Progress from "./pages/Private_pages/UserOrStudent/progress";
import Prices from "./pages/prices/Prices";
import PaypalOrder from "./pages/PaypalOrder/paypalorder";

// i18next.init({
//   interpolation: {
//     escapeValue: false,
//   },
//   lng: "en",
//   resources: {
//     es: {
//       global: global_es,
//     },
//     en: {
//       global: global_en,
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18next}> */}
    <Provider store={store}>
      <UserContextProvider>
        <Router>
          <App />
          <Switch>
            <Route exact path="/prices" component={Prices} />
            <Route exact path="/payclient" component={formCheckOutPay} />
            <Route exact path="/results" component={resultDatafast} />
            <Route
              exact
              path="/politicasPrivacidad"
              component={PoliticasPrivacidad}
            />
            <Route exact path="/redirect" component={redirectpage} />
            <Route exact path="/orderSummary" component={OrderSummary} />
            <Route
              exact
              path="/TerminosCondiciones"
              component={TerminosCondiciones}
            />
            <Route path="/pruebas" component={Pruebas} />
            <Route exact path="/createonetemary" component={FormTemary} />
            {/*  */}
            <Route path="/paypalorder" component={PaypalOrder} />
            <AdminRoute path="/admin" exact component={Admin} />
            <TeacherRoutes path="/teacherPage" exact component={Teacher} />
            <UserProvider>
              <ModalContextProvider>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/ProfileTeachers/:idTeacher"
                  component={Profile}
                />
              </ModalContextProvider>
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <PrivateRouter
                path="/notificacion"
                exact
                component={Notificacion}
              />
              <StudentProvider>
                <PrivateRouter path="/private" exact component={UserPrivate} />
                <NavbarState>
                  <PrivateRouter
                    path="/booklesson"
                    exact
                    component={BookLesson}
                  />
                </NavbarState>
                <PrivateRouter path="/progress" exact component={Progress} />
              </StudentProvider>
              <PrivateRouter path="/democlass" exact component={Democlass} />
              <StudentState>
                <PrivateRouter path="/temary" exact component={IndexTemary} />
              </StudentState>
            </UserProvider>
          </Switch>
        </Router>
      </UserContextProvider>
    </Provider>
    {/* </I18nextProvider> */}
  </React.StrictMode>,

  document.getElementById("root")
);
