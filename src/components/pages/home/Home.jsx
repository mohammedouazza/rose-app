import React from "react";
import LongCardShadow from "./cards/LongCardShadow";
import RoseImg from "../../../images/rose.jpg";
import RoseRedImg from "../../../images/rose-red.jpg";
import RoseOrangeImg from "../../../images/rose-orange.jpg";
import LongCardCentered from "./cards/LongCardCentered";
import LongCardResponsive from "./cards/LongCardResponsive";
import LongCardForm from "./cards/LongCardForm";

function Home() {
  return (
    <>
      <LongCardShadow
        title="Eau de rose"
        body="Produit de l'eau de rose pure"
        link="Contactez nous"
        image={RoseImg}
      />
      <LongCardCentered
        title="Eau de rose"
        body="Produit de l'eau de rose pure"
        link="Contactez nous"
        image={RoseRedImg}
      />
      <LongCardResponsive
        title="Eau de rose"
        body="Produit de l'eau de rose pure"
        link="Contactez nous"
        image={RoseOrangeImg}
      />
    </>
  );
}

export default Home;
