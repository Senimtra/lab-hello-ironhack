const Sections = () => {
  return (
    <div id="app-sections">
      <section>
        <img src="./images/icon1.png" alt="declarative-logo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </section>
      <section>
        <img src="./images/icon2.png" alt="components-logo" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </section>
      <section>
        <img src="./images/icon3.png" alt="single-way-logo" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </section>
      <section>
        <img src="./images/icon4.png" alt="jsx-logo" />
        <h3>JSX</h3>
        <p>Statically-typed. Designed to run on modern browsers.</p>
      </section>
    </div>
  );
};

export default Sections;
