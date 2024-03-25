export const Theme = () => {
  return (
    <>
      <section className="container--theme">
        <section className="themes">
          <article className="themeTexts">BLACK</article>
          <article className="square"></article>
          <article className="themeTexts" id="themeTextRed">
            RED
          </article>
          <article className="square"></article>
        </section>
        <section className="themeLineDot">
          <article className="theme--line"></article>
          <article className="theme--dot">●</article>
        </section>
      </section>
    </>
  );
};
