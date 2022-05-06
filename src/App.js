import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Photos from "./main-components/Photos";
import Error from "./main-components/Error";
import About from "./main-components/About";
import Ebook from "./main-components/Ebook";
import ProtectedRoute from "./sub-components/ProtectedRoutes";


const App = () => {
  return (
    <Container fluid>
      <HashRouter>
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="10" lg="8">
            <Switch>
              <Route path="/" component={Ebook} exact />
              <Route path="/about" component={About} />
              
              <ProtectedRoute path="/photos" component={Photos} />

              <Route component={Error} />
            </Switch>
          </Col>
        </Row>
      </HashRouter>
    </Container>
  );
};

export default App;
