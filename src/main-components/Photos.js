import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import data from "../database/data";
import Header from "../sub-components/Header";
import DesignPortfolio from "../sub-components/DesignPortfolio";

const Home = () => {
  const [isChapter, setisChapter] = useState(0)
  const menu = Array.from({length: 20}, (_, i) => i + 1)


  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto" md="auto" lg="auto">
            <Header />
        <section>
          <article className="portfolio">
            Select the chapter to view the photos that go along with it.
            <ul>
              {menu.map((chapter) => (
                <li key={chapter}><button onClick={() => setisChapter(chapter)}>Chapter {chapter}</button></li>
              ))}
            </ul>
          </article>
          </section>
          </Col>
        </Row>
      </Container>
      <main>
          <Container fluid>
            <Row className="justify-content-center">
              <Row className="justify-content-sm-center, justify-content-md-center, justify-content-lg-center">
                {data
                  .filter((entry) => (entry.chapter === isChapter))
                  .map((entry) => (
                    <Col
                      sm={entry.sm}
                      md={entry.md}
                      lg={entry.lg}
                      // className="buffer"
                      className={entry.rotate}
                      key={entry.title}
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
