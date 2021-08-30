import React from "react";
import Header from "../sub-components/Header";

const Ebook = () => {
  return (
    <main>
      <Header />
      <section>
        <article>
         <p>Download the book <a href="/book/ebook.epub" download>here</a></p>
        </article>
      </section>
    </main>
  );
};

export default Ebook;
