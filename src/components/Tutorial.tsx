import { ReactNode } from "react";
import CustomButton from "./CustomButton";
import "./Tutorial.css";
import { GiArrowCursor } from "react-icons/gi";
import pokeball from "../img/pokeball.png"

export default function Tutorial() {
  return (
    <section className="tutorial">
      {/* <TutorialArticle
        className="descartar"
        text="Al descartar un pokemon de tu coleccion, tu barra de energia se llenará por completo">
        <CustomButton>DESCARTAR</CustomButton>
        <GiArrowCursor className="cursor" />
      </TutorialArticle> */}
      <TutorialArticle
        className="pick-free"
        text="cada 60 minutos puedes reclamar un pokemon nuevo de manera totalmente gratuita">
            <img src={pokeball} alt="pokeball" />
      </TutorialArticle>
    </section>
  );
}

interface ArticleProps {
  children?: ReactNode;
  text: string;
  className?: string;
}

const TutorialArticle = ({ children, text, className }: ArticleProps) => {
  return (
    <article className={"tutorial-article " + (className ? className : "")}>
      <p>{text.toUpperCase()}</p>
      <div className="children">{children}</div>
    </article>
  );
};
