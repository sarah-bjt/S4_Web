import React from "react";
import zodiacData from "../../signes_astro.json"; 
import AstroCard from "./HoroscopeCard";

export default function SigneCard({ signName }) {
  const sign = zodiacData.zodiac_signs.find(
    (z) => z.name.toLowerCase() === signName.toLowerCase()
  );

  if (!sign) {
    return <p>Signe non trouvé.</p>;
  }

  return (
    <div id="sign-card">
      <img
        id="sign-picture"
        src={sign.image} 
        alt={sign.name}
      />

      <div id="sign-description">
        <h3>{sign.name}</h3>
        <p className="signe-description-line">
          Né entre le {sign.start_date} et le {sign.end_date}
        </p>
        <p className="signe-description-line">
          Élément : {sign.element}
        </p>
        <p className="signe-description-line">
          Traits : {sign.traits.join(", ")}
        </p>
        <AstroCard/>
      </div>
    </div>
  );
}
