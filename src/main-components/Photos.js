import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import data from "../database/data";
import Header from "../sub-components/Header";
import DesignPortfolio from "../sub-components/DesignPortfolio";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Header />
        <section>
          <article className="portfolio">
            <p>These are the photos that go along with my book.
            </p>
          </article>
          </section>

          </Col>
        </Row>
      </Container>
      <main>

          <Container fluid>
            <Row className="justify-content-center">
              <Row className="justify-content-sm-center, justify-content-md-center, justify-content-lg-center">
                {data.map((entry) => (
                  <Col
                    sm={entry.sm}
                    md={entry.md}
                    lg={entry.lg}
                    // className="buffer"
                    className={entry.rotate}
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
      </main>
    </>
  );
};

export default Home;
