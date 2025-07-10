import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-menu">
            <div className="footer-items">
              <div className="footer-image-wrapper">
                <img src="/logo-black.png" alt="" />
              </div>
            </div>
            <ul className="footer-items">
              <li className="footer-item">Terms & policies</li>
              <li className="footer-item">Terms of Service</li>
              <li className="footer-item">Privacy Policy</li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">Company</li>
              <li className="footer-item">Home</li>
              <li className="footer-item">About Us</li>
              <li className="footer-item">Contact Us</li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">Contact</li>
              <li className="footer-item">(+62) 893912392190</li>
              <li className="footer-item">agecnycr@gmail.com</li>
            </ul>
            <ul className="footer-items">
              <li className="footer-item">Location</li>
              <li className="footer-item">
                PT Osiris Real Estate Internasional
              </li>
              <li className="footer-item">Jl. KH. Wahid Hasyim Kel No.10D</li>
              <li className="footer-item">Jakarta, Indonesia</li>
              <li className="footer-item">team@OsirisRealEstate.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-sosial">
          <ul className="footer-sosial-media-items-list">
            <li className="footer-sosial-media-item">
              <Facebook />
            </li>
            <li className="footer-sosial-media-item">
              <Instagram />
            </li>
            <li className="footer-sosial-media-item">
              <Linkedin />
            </li>
            <li className="footer-sosial-media-item">
              <Mail />
            </li>
            <li className="footer-sosial-media-item">
              <Twitter />
            </li>
          </ul>
          <div className="footer-copyright">
            <span>Copyright @ 2022 Agency Creative. All Right Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
