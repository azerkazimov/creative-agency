import { Star } from "lucide-react";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-section-header">
            Make your dream business goal come true
          </h1>
          <p className="hero-section-description">
            when you need us for improve your business, <br /> then come with us
            to help your business have reach it, you just sit and feel that goal
          </p>
          <div className="btn btn-white">Start Project</div>
          <div className="image-container">
            <div className="rayting">
              <div className="rayting-header">
                <Star />
                <span> great project</span>
              </div>
              <div className="rayting-counter">
                <span>800+ Done</span>
              </div>
            </div>
            <div className="image-wrapper">
              <img src="/hero.png" alt="" />
            </div>
            <div className="hero-testimonial-card">
              <div className="hero-testimonial-card-avatar-bio">
                <div className="hero-testimonial-card-avatar">
                  <img src="/avatar.png" alt="" />
                </div>
                <div className="hero-testimonial-card-bio">
                  <p>Bill Adams</p>
                  <span>CEO UpTech</span>
                </div>
              </div>
              <div className="hero-testimonial-card-description">
                <span>
                  “ This team is really the best in its field,I don't regret
                  working with them, and will come back again thanks “
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
