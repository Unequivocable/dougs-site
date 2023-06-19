import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

const res2 = "HisPlanIsGreat!"

  return (
    <Route
      {...rest}
      render={(props) => {
        const res = prompt("Enter the Password","")
        if(res === res2){
          return <Component {...rest} {...props} />
        } else {
          alert("You do not have permission to access the photos")
          return           <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        }
      }} />

  );
};

export default ProtectedRoute;
