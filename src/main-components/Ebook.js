import React from "react";
import { Link } from "react-router-dom";
import Header from "../sub-components/Header";

const Ebook = () => {
  return (
    <main>
      <Header />
      <section>
        <article className="portfolio centre">
          <p>
            For over seven decades Doug Siggelkow has experienced the
            faithfulness of the Lord Jesus Christ in his life. This is the story
            of a pastor’s son growing up next door to a country church in
            northern Alberta. He shares his own personal call to the ministry as
            a young man, and the development of that ministry. Together with his
            wife Donna, he tells of serving in pastorates in Canada and the
            United States as well as years of Missionary work in Central America
            in the 1980’s and 90’s. He shares stories of the incredible
            adventures they faced raising a family, as well as being involved in
            ministry, during a difficult political time in Central America. Doug
            and Donna now live in Moose Jaw, Saskatchewan, surrounded by their
            children and grandchildren.
          </p>
          <p>
            You can purchase the book{" "}
            <a
              href="https://www.amazon.ca/Adventures-Experiencing-Gods-Faithfulness-Siggelkow-ebook/dp/B09V4C92HH"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
          <p>
            If you have the password, you can view the photos associated with
            the book <Link to="/photos">here</Link>
          </p>
        </article>
      </section>
    </main>
  );
};

export default Ebook;
