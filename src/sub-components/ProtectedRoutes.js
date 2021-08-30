import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        const res = prompt("Enter the Password","")
        if(res === process.env.REACT_APP_PASSWORD){
          return <Component {...rest} {...props} />
        } else {
          alert("You do not have permission to access the ebook")
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
