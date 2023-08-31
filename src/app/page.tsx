/* eslint-disable @next/next/no-img-element */

import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";

function App() {
  return (
    <div className="random">
      <Head>
        <title>XP - Request Early Access</title>
      </Head>
      <footer>
        <main>
          <img
            className={styles.image}
            src="https://hngr-icons.s3.amazonaws.com/supperclub/ticketdex/xp_logo_4+1.png"
            alt="XP logo"
          ></img>
          <section className={styles.linksOne}>
            <h1>XP TICKETS</h1>
            <a href="www.google.com">About XP</a>
            <a href="www.google.com">Upcoming Events</a>
            <a href="www.google.com">Sell Your Tickets</a>
          </section>
          <section className={styles.linksTwo}>
            <section className={styles.iconGroup}>
              <a href="www.google.com">
                <img
                  className={styles.icon}
                  src="https://i.ibb.co/4FdMwHs/Twitter.png"
                  alt="Twitter logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className={styles.icon}
                  src="https://i.ibb.co/hmJ1kLq/Discord.png"
                  alt="Discord logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className={styles.icon}
                  src="https://i.ibb.co/RjbNQsL/Threads.png"
                  alt="Threads logo"
                ></img>
              </a>
              <a href="www.google.com">
                <img
                  className={styles.icon}
                  src="https://i.ibb.co/1sX8YPw/Mastodon.png"
                  alt="Mastodon logo"
                ></img>
              </a>
            </section>
            <section className={styles.linksTwoNoIcons}>
              <a href="www.google.com">Tamperproof</a>
              <a href="www.google.com">Captain Labs</a>
              <a href="www.google.com">Contact Us</a>
            </section>
          </section>
          <div className={styles.rightsideGap}>
            <section className={styles.rightside}>
              <h1>STAY IN THE KNOW</h1>
              <input placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button>REQUEST EARLY ACCESS</button>
            </section>
          </div>
        </main>
        <div className={styles.xpByCaptain}>
          XP BY CAPTAIN / 2023 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
