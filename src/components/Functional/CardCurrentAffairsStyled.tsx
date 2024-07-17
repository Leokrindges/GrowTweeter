import { Fragment } from "react/jsx-runtime";
import { CardAffairStyled } from "../CardAffairStyled";

export function CardCurrentAffairsStyled() {
  return (
    <Fragment>
      <CardAffairStyled>
        <h1 className="titleAffair">O que está acontecendo?</h1>
        <ul>
          <li>
            <p>Esportes - Há 45 min</p>
            <h1>Assunto sobre esportes</h1>
          </li>
          <li>
            <p>Assunto do Momento em Brasil</p>
            <h1>Assunto do Momento</h1>
          </li>
          <li>
            <p>Música - Assunto do Momento</p>
            <h1>Assunto sobre Música</h1>
          </li>
          <li>
            <p>Cinema - Assunto do Momento</p>
            <h1>Assunto sobre Filmes e Cinema</h1>
          </li>
        </ul>
        <div>
          <a href="#">Mostrar Mais</a>
        </div>
      </CardAffairStyled>
    </Fragment>
  );
}
