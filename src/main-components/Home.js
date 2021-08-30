import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../database/data";
import Header from "../sub-components/Header";
import DesignPortfolio from "../sub-components/DesignPortfolio"

const Home = () => {
  return (
    <>
    <Container fluid>
    <Row className="justify-content-center">
    <Col xs="auto">
      <Header />
    </Col>
  </Row>
  </Container>
    <main>
      <section>
        <article>
          <p>These are the photos that go along with my book.</p>
          <p>If you have the password, you can download the ebook <Link to="/ebook">here</Link></p>
        </article>
        <Container fluid>
          <Row className="justify-content-center">
            <Row className="justify-content-sm-center, justify-content-md-center, justify-content-lg-center">
              {data.map((entry) => (
                <Col
                  sm={entry.sm}
                  md={entry.md}
                  lg={entry.lg}
                  className="buffer"
                >
                  <DesignPortfolio
                    bordercolor={entry.bordercolor}
                    color={entry.color}
                    title={entry.title}
                    text={entry.text}
                    alt={entry.alt}
                    src={entry.src}
                  />
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </section>
    </main>
    </>
  );
};

export default Home;
