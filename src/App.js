import James from "./Media/jc.JPG"


function App() {
  return (
    <>
      <nav className="nav-bar">

        <div className="nav-brand">
          <p className="heading-5">
            JC
          </p>
        </div>

        <hr className="nav-divider">
        </hr>
        <div class="nav-container">

          <div className="nav-link-container">
            <a href="#1" className="nav-text">
              Card
            </a>
          </div>
          <div class="nav-link-container">
            <a href="#2" className="nav-text">
              Home
            </a>
          </div>
          <div class="nav-link-container">
            <a href="#3" className="nav-text">
              About
            </a>
          </div>
          <div class="nav-link-container">
            <a href="#4" className="nav-text">
              Contact
            </a>
          </div>
          <div class="nav-link-container">
            <a href="#5" className="nav-text">
              Help
            </a>
          </div>
        </div>
      </nav>
      <section id="1" className="section">

        <h1 className="heading-1">
          Welcome
        </h1>

        <img className="pic" src={James} alt="Italian Trulli" />


      </section>

      {/* Card */}

      {/* Colors */}
      <section className="container" id="2">
        <button className=" btn-outlined-primary text-primary ">
          primary
        </button>
        <button className=" btn-outlined-secondary text-secondary ">
          secondary
        </button>
        <button className=" btn-outlined-tertiary text-tertiary ">
          tertiary
        </button>
        <button className=" btn-outlined-error text-error ">
          error
        </button>
        <button className=" btn-outlined-info text-info ">
          info
        </button>
        <button className=" btn-outlined-warning text-warning ">
          warning
        </button>
        <button className=" btn-outlined-lightBlue text-lightBlue ">
          lightBlue
        </button>
        <button className=" btn-outlined-blue text-blue ">
          blue
        </button>
        <button className=" btn-outlined-darkBlue text-darkBlue ">
          darkBlue
        </button>
        <button className=" btn-outlined-yellow text-yellow ">
          yellow
        </button>
        <button className=" btn-outlined-orange text-orange ">
          orange
        </button>
        <br></br>
        <button className=" btn-filled-primary  ">
          primary
        </button>
        <button className=" btn-filled-secondary  ">
          secondary
        </button>
        <button className=" btn-filled-tertiary ">
          tertiary
        </button>
        <button className=" btn-filled-error">
          error
        </button>
        <button className=" btn-filled-info  ">
          info
        </button>
        <button className=" btn-filled-warning  ">
          warning
        </button>
        <button className=" btn-filled-lightBlue  ">
          lightBlue
        </button>
        <button className=" btn-filled-blue">
          blue
        </button>
        <button className=" btn-filled-darkBlue">
          darkBlue
        </button>
        <button className=" btn-filled-yellow ">
          yellow
        </button>
        <button className=" btn-filled-orange  ">
          orange
        </button>
        <br></br>
        <button className=" btn-compliment-primary  ">
          primary
        </button>
        <button className=" btn-compliment-secondary  ">
          secondary
        </button>
        <button className=" btn-compliment-tertiary ">
          tertiary
        </button>
        <button className=" btn-compliment-error">
          error
        </button>
        <button className=" btn-compliment-info  ">
          info
        </button>
        <button className=" btn-compliment-warning  ">
          warning
        </button>
        <button className=" btn-compliment-lightBlue  ">
          lightBlue
        </button>
        <button className=" btn-compliment-blue">
          blue
        </button>
        <button className=" btn-compliment-darkBlue">
          darkBlue
        </button>
        <button className=" btn-compliment-yellow ">
          yellow
        </button>
        <button className=" btn-compliment-orange  ">
          orange
        </button>

      </section>
      {/* Typography */}
      <br></br>
      <section class="container" id="3">
        <div className="container-test">
          <h1>Typography</h1>
          <h5 className="heading-1">
            Heading-1
          </h5>
          <h5 className="heading-2">
            heading-2
          </h5>
          <h5 className="heading-3">
            heading-3
          </h5>
          <h5 className="heading-4">
            heading-4
          </h5>
          <h5 className="heading-5">
            heading-5
          </h5>
          <h5 className="sub-heading-1">
            sub-heading-1
          </h5>
          <h5 className="sub-heading-2">
            sub-heading-2
          </h5>
          <h5 className="nav-text">
            nav-text
          </h5>
          <h5 className="nav-text-mobile">
            nav-text-mobile
          </h5>
        </div>
      </section>


      <section className="container" id="5">
        <div className="responsive-box">
          <p className="heading-4">I change colors at different sizes</p>
        </div>
      </section>

      {/* Grid */}


      <section id="6">
        <div className="container">
          <div className="row gap-3 justify-center">
            <div className="col-12-xs col-5-sm col-3-xl">
              <div className="card border-lightBlue">
                <h3 className="heading-4 text-lightBlue">Hello World</h3>
                <p className="sub-heading-2 text-lightBlue">
                  In Lorem eu duis proident Lorem cillum Lorem magna ea.Esse culpa labore ipsum aliqua quis duis duis aliqua sint.
                </p>
              </div>
            </div>
            <div className="col-12-xs col-5-sm col-3-xl">
              <div className="card border-darkBlue">
                <h3 className="heading-4 text-darkBlue">Hello World</h3>
                <p className="sub-heading-2 text-darkBlue">
                  In Lorem eu duis proident Lorem cillum Lorem magna ea.Esse culpa labore ipsum aliqua quis duis duis aliqua sint.
                </p>
              </div>
            </div>
            <div className="col-12-xs col-5-sm col-3-xl">
              <div className="card border-yellow">
                <h3 className="heading-4 text-yellow">Hello World</h3>
                <p className="sub-heading-2 text-yellow">
                  In Lorem eu duis proident Lorem cillum Lorem magna ea.Esse culpa labore ipsum aliqua quis duis duis aliqua sint.
                </p>
              </div>
            </div>
            <div className="col-12-xs col-5-sm col-3-xl">
              <div className="card border-orange">
                <h3 className="heading-4 text-orange">Hello World</h3>
                <p className="sub-heading-2 text-orange">
                  In Lorem eu duis proident Lorem cillum Lorem magna ea.Esse culpa labore ipsum aliqua quis duis duis aliqua sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-test">
        <button className="btn-explore">
          <p className="btn-text">Explore</p>
        </button>
      </section>

      <section className="container-test">

        <p className="nav-text">Active</p>
        <p className="nav-text">Hover</p>
        <p className="nav-text">Idle</p>

      </section>

      <section className="container-test">



      </section>


    </>
  );
}

export default App;
