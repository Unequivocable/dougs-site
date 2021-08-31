import React from "react";
import Header from "../sub-components/Header";

const Ebook = () => {
  return (
    <main>
      <Header />
      <section>
        <article className="portfolio centre">
         <p>Download the ebook <a href="/book/ebook.epub" download>here</a></p>
        </article>
      </section>
    </main>
  );
};

export default Ebook;
