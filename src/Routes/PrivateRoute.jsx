import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { IsAuth } from "../helpers/Requests";

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuth().rol === "user" || IsAuth().rol === "student" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/SignIn",
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
);

export default PrivateRouter;
