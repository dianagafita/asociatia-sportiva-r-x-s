import React from "react";
import "./Home.css";
import { GiSoccerBall } from "react-icons/gi";
import { GiWhistle } from "react-icons/gi";
import { TfiTimer } from "react-icons/tfi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { FaCalendarAlt } from "react-icons/fa";
import HeaderMain from "../../components/MainPageHeader/HeaderMain";
import { FaPeopleLine } from "react-icons/fa6";
import img from "../../assets/homePage/2.jpg";
import img2 from "../../assets/homePage/3.jpg";
import img3 from "../../assets/homePage/4.jpg";
import FutureGames from "../../components/FutureGames/FutureGames";
import bk from "../../assets/homePage/d.jpeg";

const DUMMY = [
  {
    logo: <GiSoccerBall />,
    title: "Pentru cine?",
    details: [
      "Pentru copii cu varstele cuprinse intre 6 si 15 ani (2009-2016).",
      "Nu necesita pregatire anterioara.",
    ],
  },
  {
    logo: <GiWhistle style={{ fontSize: "4rem", padding: 0, margin: 0 }} />,
    title: "Grupe",
    details: "Pentru fiecare categorie de varsta se vor crea grupe diferite.",
  },
  {
    logo: <FaCalendarAlt />,
    title: "Inscrieri",
    details:
      "Locurile sunt limitate, inscrierile  se fac in functie de locurile disponibile ",
  },

  {
    logo: <LiaMapMarkerAltSolid style={{ fontSize: "4rem" }} />,
    title: "Locatia",
    details: "Stadion Gura Humorului, Suceava",
  },
  {
    logo: <TfiTimer />,
    title: "Durata antrenamentului",
    details: "60min",
  },
];

const DUMMY_INCLUDES = [
  "Echipament de antrenament gratuit",
  "Profesori specializati in domeniu",
  "Materiale sportive performante",
  "Antreamente pe tot parcursul anului",
  "Participarea la competitii si turnee interne",
];

const DUMMY_VALUES = [
  "Atmosfera distractiva, recreativa si plina de pasiune pentru copii.",
  "Conditii de antrenament la standarde ridicate",
  "Dustinem performanta scolara si formarea unor comportamente bazate perespect",
  "Jocul de echipa inseamna mai mult decat relatii de joc si antrenamente",
];

export default function Home() {
  return (
    <>
      <section id="main-page">
        <div>
          <img src={bk} alt="" />
          <span>Academia RxS </span>
        </div>
      </section>
      <HeaderMain className="header-main" />
      <FutureGames />
      <section id="main-page-info" className="main-page-info">
        <div className="info-title">DESCOPERA ACADEMIA DE FOTBAL</div>
        {DUMMY.map((item, index) => (
          <div className="info-details" key={index}>
            <p>{item.logo}</p>
            <h1>{item.title}</h1>
            <ul>
              {Array.isArray(item.details) ? (
                item.details.map((detail, detailIndex) => (
                  <li className="detail-item" key={detailIndex}>
                    {detail}
                  </li>
                ))
              ) : (
                <li className="detail-item">{item.details}</li>
              )}
            </ul>
          </div>
        ))}
      </section>
      <section id="main-page-values" className="main-page-values">
        <div>
          <span className="bigger">V</span>
          <span>ALORILE A.S. </span>
          <span className="bigger">R</span>
          <span> x </span>
          <span className="bigger">S</span>
        </div>

        <ul>
          {DUMMY_VALUES.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </section>
      <section id="main-page-includes" className="main-page-inludes">
        <span>
          <FaPeopleLine />
        </span>
        <p>Servicii incluse</p>
        <ul className="main-page-inludes_items">
          {DUMMY_INCLUDES.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
