import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com/profile.php?id=100085922270762">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/fotbal_rxs_gura_humorului?igsh=MTkwMTJjMmN0ZjJrOQ==">
          <SiInstagram />
        </a>
      </div>
      <div>Copyright &#169; 2024 A.S. RxS. All right received.</div>
    </footer>
  );
}
