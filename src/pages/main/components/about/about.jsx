import { Play } from "lucide-react";
import SectionHeader from "../../../../components/section-header/section-header";
import "./about.css";
import ButtonCollection from "../../../../components/button-collection/button-collection";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <SectionHeader
          highlight={"About Us"}
          content={"Our Teammate"}
          position={"center"}
        />
        <div className="about-wrapper">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="about-image-wrapper">
                <img src="/team.png" alt="team" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-content-wrapper">
                <p className="about-content">
                  We move with make a Creative Strategy for help your business
                  goal, we help to improve your income by a services we have.
                  make your content look interesting and make people look for
                  your business
                </p>
                <p className="about-content">
                  We move with make a Creative Strategy for help your business
                  goal, we help to improve your income by a services we have.
                  make your content look interesting and make people look for
                  your business
                </p>
                <ButtonCollection position={"flex-start"}>
                  <a href="/about">
                    <button className="btn btn-white">About Us</button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=tbnzAVRZ9Xc">
                    <button className="btn btn-transparent">
                      <Play />
                      <span>Our Story</span>
                    </button>
                  </a>
                </ButtonCollection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
