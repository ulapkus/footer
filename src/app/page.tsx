import React from "react";

function App() {
  return (
    <div id="main">
      <div className="leftside">
        <img className="image" src="https://i.ibb.co/KDGFs9d/XP-Logo.png"></img>
        <div className="mainwords">
          <div className="big-words xp-tickets">XP TICKETS</div>
          <div className="againwords">
            <div className="words">About XP</div>
            <div className="words">Upcoming Events</div>
            <div className="words">Sell Your Tickets</div>
          </div>
        </div>
        <div className="mainwordstwo">
          <div className="big-words">
            <img
              className="icon"
              src="https://i.ibb.co/4FdMwHs/Twitter.png"
            ></img>
            <img
              className="icon"
              src="https://i.ibb.co/1sX8YPw/Mastodon.png"
            ></img>
            <img
              className="icon"
              src="https://i.ibb.co/hmJ1kLq/Discord.png"
            ></img>
            <img
              className="icon"
              src="https://i.ibb.co/RjbNQsL/Threads.png"
            ></img>
          </div>
          <div className="morewords">
            <div className="words">Tamperproof</div>
            <div className="words">Captain Labs</div>
            <div className="words">Contact Us</div>
          </div>
        </div>
      </div>

      <div className="rightside">
        <div className="in-the-know">STAY IN THE KNOW</div>
        <div className="space"></div>
        <input className="righterside" placeholder="Name" />
        <div className="space"></div>
        <input className="righterside" type="email" placeholder="Email" />
        <div className="space"></div>
        <button className="righterside">REQUEST EARLY ACCESS</button>
      </div>

      <div className="footer">XP BY CAPTAIN / 2023 All Rights Reserved</div>
    </div>
  );
}

export default App;
