import React from "react";
import "./Coaces.css";
import antrenor1 from "../../assets/CoachePage/r.png";
import antrenor2 from "../../assets/CoachePage/s.png";
import Title from "../../components/Title/Title";

const coloredText = [
  "P",
  "Universitatea de Educație Fizica si Sport UBB",
  "Licența UEFA C",
  "pasiunea",
  "A.S.Fotbal RxS",
];

const styles = {
  color: "var(--second-color)",
  fontSize: "1.2rem",
};

const DUMMY_COACHES = [
  {
    id: 1,
    name: "Razvan Beleca",
    photo: antrenor1,
    info: "",
    contact: "0756416840",
  },
  {
    id: "details",
    name: "",
    info: (
      <>
        <span style={{ fontSize: "1.5rem", color: "var(--second-color)" }}>
          {coloredText[0]}
        </span>
        asionati de fotbal, cei doi antrenori și-au început drumul în acest
        domeniu jucând pentru echipele locale din Gura Humorului. Pe parcursul
        anilor, și-au cultivat pasiunea pentru acest sport și au decis să-și
        continue studiile, absolvind o facultate de profil la Cluj,{" "}
        <span style={styles}>{coloredText[1]}</span>, ambii avand{" "}
        <span style={styles}>{coloredText[2]}</span>, și participând la cursuri
        specializate în antrenament sportiv pentru instructori sportivi. Astfel,
        au reușit să-și transforme <span style={styles}>{coloredText[3]}</span>{" "}
        într-o carieră dedicată, aducându-și contribuția la dezvoltarea
        tinerilor talentați și a echipei lor{" "}
        <span style={styles}>{coloredText[4]}</span>.
      </>
    ),
    contact: "",
  },

  {
    id: 2,
    name: "Sergiu Beleca",
    photo: antrenor2,
    info: "",
    contact: " 0742809772",
  },
];

export default function Coaches() {
  return (
    <section id="coaches-page" className="coaches-page">
      <Title title="ANTRENORI" />
      <ul>
        {DUMMY_COACHES.map((coach) => (
          <div key={coach.id} className={`container-a antrenor-${coach.id}`}>
            <img src={coach.photo} alt="" />
            <div className="coaches-info">
              <h1>{coach.name}</h1>
              <span>{coach.info}</span>
              <div className="coaches-contact">
                <h>Contact</h>
                <span>{coach.contact}</span>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}
