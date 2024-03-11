import React from "react";
import "./Details.css";
import Title from "../../components/Title/Title";
import { MdGroups } from "react-icons/md";
import { MdPerson } from "react-icons/md";

const DUMMY_GROUPS = [
  {
    title: "Grupe U6-U14",
    details: [
      "Fiecare categorie de varsta are grupa separatac(ex. U6 au varsta sub 6 ani)",
      "Antrenamentele dureaza 90min.",
    ],
    icon: <MdGroups style={{ marginRight: "1rem" }} />,
  },
  {
    title: "Grupa U15",
    details: ["Copii cu varsta de 15 ani", "Antrenamentele dureaza 60min."],
    icon: <MdPerson style={{ marginRight: "1rem" }} />,
  },
];

export default function Details() {
  return (
    <section className="details-page">
      <Title title="DETALII" />
      <span>
        {DUMMY_GROUPS.map((group) => (
          <div className="cont">
            <span className="details-page-container-title">
              {group.icon}
              {group.title}
            </span>
            <div className="details-page-container" key={group.title}>
              {group.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </div>
          </div>
        ))}
      </span>
    </section>
  );
}
