import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only Solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem esse aliquam sunt nisi adipisci. Quod quibusdam magnam
            excepturi. Dolores architecto numquam soluta nobis eaque odio a
            dolore exercitationem nulla, blanditiis consequuntur sunt neque
            illum, dolor expedita nostrum quas, debitis quidem! Maxime, dolore
            blanditiis eos atque ut inventore vitae tempora, temporibus dolorem
            optio quae, eligendi quisquam perspiciatis. Inventore sapiente natus
            enim facere perspiciatis voluptatem quis assumenda eos quae et
            aperiam, amet nulla quos, corrupti illo velit explicabo
            reprehenderit quasi eveniet cumque fugiat quaerat dolorem rem
            quisquam! Amet corrupti veniam optio pariatur et illum inventore
            dignissimos! Beatae, voluptates! Similique, veritatis iure. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo
            praesentium nulla eius sunt vero ratione est quis dolorum maxime.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
