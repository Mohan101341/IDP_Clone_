import React from "react";
import "./Essentials_Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMoneyBillTransfer,
  faHeartPulse,
  faUniversity,
  faHouse,
  faSimCard,
  faUserShield,
  faCreditCard,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const EssentialsCards = () => {
  const essentials = [
    {
      title: "Education loan",
      icon: faGraduationCap,
      desc: "Easy access to finances so you don’t delay your dreams.",
    },
    {
      title: "Money transfer",
      icon: faMoneyBillTransfer,
      desc: "Safe, secure and fast payments to your institution and other key services.",
    },
    {
      title: "Health Insurance",
      icon: faHeartPulse,
      desc: "Your choice, your health cover, your peace of mind abroad.",
    },
    {
      title: "Student banking",
      icon: faUniversity,
      desc: "Open a bank account before you arrive.",
    },
    {
      title: "Accommodation",
      icon: faHouse,
      desc: "Student apartment or homestay, the choice is yours.",
    },
    {
      title: "Sim cards",
      icon: faSimCard,
      desc: "No SIM? No problem – We’ve got it covered.",
    },
    {
      title: "Guardianship",
      icon: faUserShield,
      desc: "If you’re under 18, we’ll find you a guardian.",
    },
    {
      title: "Forex",
      icon: faCreditCard,
      desc: "Unlock the world with a hassle-free Forex Card – Your Perfect Travel Companion.",
    },
    {
      title: "Student Identity Card",
      icon: faIdCard,
      desc: "Start enjoying global student discounts on food, fashion, travel, and more.",
    },
  ];

  return (
    <div className="essentials-grid4">
      <h1 style={{ gridColumn: "span 5", textAlign: "center" }}>Student Essentials Cards</h1>
      {essentials.map((item, index) => (
        <div key={index} className="card4">
          <FontAwesomeIcon icon={item.icon} className="icon4" />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <button className="learn-btn4">Learn more →</button>
        </div>
      ))}
    </div>
  );
};

export default EssentialsCards;