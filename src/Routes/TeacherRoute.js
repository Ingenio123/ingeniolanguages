import { Route, Redirect } from "react-router-dom";

import { IsAuth } from "../helpers/Requests";

export const TeacherRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuth().rol === "teacher" ? (
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
