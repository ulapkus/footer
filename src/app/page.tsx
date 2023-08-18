import React from "react";
// import '/page.module.css';

function App() {
  return (
    <body>
      <main>
        <img
          className="image"
          src="https://i.ibb.co/KDGFs9d/XP-Logo.png"
          alt="XP logo"
        ></img>
        <section className="leftside">
          <section className="left-side-one">
            <h1 className="xp-tickets">XP TICKETS</h1>
            <p>
              <a href="www.google.com">About XP</a>
            </p>
            <p>
              <a href="www.google.com">Upcoming Events</a>
            </p>
            <p>
              <a href="www.google.com">Sell Your Tickets</a>
            </p>
          </section>
          <section className="left-side-two">
            <h1 className="icon-group">
              <a href="www.google.com">
                <img
                  className="icon"
                  src="https://i.ibb.co/4FdMwHs/Twitter.png"
                  alt="Twitter logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className="icon"
                  src="https://i.ibb.co/hmJ1kLq/Discord.png"
                  alt="Discord logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className="icon"
                  src="https://i.ibb.co/RjbNQsL/Threads.png"
                  alt="Threads logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className="icon"
                  src="https://i.ibb.co/1sX8YPw/Mastodon.png"
                  alt="Mastodon logo"
                ></img>
              </a>
            </h1>
            <section className="left-side-two-links">
              <p>
                <a href="www.google.com">Tamperproof</a>
              </p>
              <p>
                <a href="www.google.com">Captain Labs</a>
              </p>
              <p>
                <a href="www.google.com">Contact Us</a>
              </p>
            </section>
          </section>
        </section>
      </main>
      <section className="rightside">
        <h1>STAY IN THE KNOW</h1>
        <div className="indent">
          <input placeholder="Name" />
        </div>
        <div className="indent">
          <input type="email" placeholder="Email" />
        </div>
        <button>REQUEST EARLY ACCESS</button>
      </section>
      <footer>
        <div className="bottom">XP BY CAPTAIN / 2023 All Rights Reserved</div>
      </footer>
    </body>
  );
}

export default App;
