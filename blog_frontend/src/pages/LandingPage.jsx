// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./LandingPage.module.css";
import TeacupSVG from "../assets/teacup.svg?react";
import NotebookSVG from "../assets/notebook.svg?react";
import ProjectorSVG from "../assets/projector.svg?react";
import BookSVG from "../assets/open_book.svg?react";
import MagnifyingGlassSVG from "../assets/magnifying_glass.svg?react";
import TelephoneSVG from "../assets/telephone.svg?react";
import CoinSVG from "../assets/coin.svg?react";
import CrumpledPaperSVG from "../assets/crumpled_paper.svg?react";


import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  const handleNotebookClick = () => {
    console.log("Handling notebook click");
  };

  const handleProjectorClick = () => {
    console.log("Handling projector click");
  };

  const handleMagnifyingGlassClick = () => {
    console.log("Handling magnifying glass click");
  };

  const handleTelephoneClick = () => {
    console.log("Handling magnifying glass click");
  };

  return (
    <main className={styles.background}>
      <ProjectorSVG className={styles.projector} onClick={handleProjectorClick} />
      <TeacupSVG className={styles.teacup}  />
      <NotebookSVG className={styles.notebook} onClick={handleNotebookClick} />
      <MagnifyingGlassSVG className={styles.magnifyingglass} onClick={handleMagnifyingGlassClick} />
      <CrumpledPaperSVG className={styles.crumpledpaper} />
      <BookSVG className={styles.openbook} />
      <CoinSVG className={styles.coin} />
      <TelephoneSVG className={styles.telephone} onClick={handleTelephoneClick}/>
    </main>
  );
}
