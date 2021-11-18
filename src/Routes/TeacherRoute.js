import { Route, Redirect } from "react-router-dom";

import { IsAuth } from "../helpers/Requests";

// export const TeacherRoutes = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       console.log(IsAuth().rol);
//       IsAuth().rol === "teacher" ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/SignIn",
//             state: { from: props.location },
//           }}
//         />
//       );
//     }}
//   ></Route>
// );

const TeacherRoutes = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        IsAuth().rol === "teacher" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export { TeacherRoutes };
