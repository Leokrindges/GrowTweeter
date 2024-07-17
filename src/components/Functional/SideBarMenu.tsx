import { Fragment } from "react/jsx-runtime";
import growTweet from "../../assets/light_color/logo_growtweet.svg";
import iconePaginaInicial from "../../assets/light_color/icone_pagina_inicial.svg";
import { ListMenuStyled } from "../ListMenuStyled";
import iconeExplorar from "../../assets/light_color/icone_explorar.svg";
import iconePerfil from "../../assets/light_color/icone_perfil.svg";
import { NavStyled } from "../NavStyled";
import { NavProfileStyled } from "../NavProfileStyled";
import imageProfile from "../../assets/default_profile.png";

export function SideBarMenu() {
  return (
    <Fragment>
      <div>
        <img src={growTweet} alt="Logo Growtweet"></img>
      </div>
      <NavStyled>
        <ListMenuStyled>
          <ul>
            <li>
              <img src={iconePaginaInicial} alt="Logo Home"></img>
              <a href="/feed">Página Inicial</a>
            </li>
            <li>
              <img src={iconeExplorar} alt="Exploration icon - Hastag"></img>
              <a href="/explore">Explore</a>
            </li>
            <li>
              <img src={iconePerfil} alt="Icon Profile"></img>
              <a href="/profile">Perfil</a>
            </li>
          </ul>
          <button>Tweetar</button>
        </ListMenuStyled>
        <NavProfileStyled>
          <img src={imageProfile} alt="Image Profile" />
          <div>
            <h1>Leonardo Krindges</h1>
            <p>@leonardo</p>
          </div>
        </NavProfileStyled>
        <div>
          <a href="/">Sair</a>
        </div>
      </NavStyled>
    </Fragment>
  );
}
