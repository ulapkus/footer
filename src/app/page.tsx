import React from "react";
import Head from "next/head";

function App() {
  return (
    <div className="random">
      <Head>
        <title>XP - Request Early Access</title>
      </Head>
      <footer>
        <main>
          <img
            className="image"
            src="https://hngr-icons.s3.amazonaws.com/supperclub/ticketdex/xp_logo_4+1.png"
            alt="XP logo"
          ></img>
          <section className="links-one">
            <h1 className="xp-tickets">XP TICKETS</h1>
            <a href="www.google.com">About XP</a>
            <a href="www.google.com">Upcoming Events</a>
            <a href="www.google.com">Sell Your Tickets</a>
          </section>
          <section className="links-two">
            <section className="icon-group">
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
            </section>
            <section class="links-two-without-icons">
              <a href="www.google.com">Tamperproof</a>
              <a href="www.google.com">Captain Labs</a>
              <a href="www.google.com">Contact Us</a>
            </section>
          </section>
          <div id="rightside-gap">
            <section className="rightside">
              <h1>STAY IN THE KNOW</h1>
              <input placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button>REQUEST EARLY ACCESS</button>
            </section>
          </div>
        </main>
        <div className="xp-by-captain">
          XP BY CAPTAIN / 2023 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
