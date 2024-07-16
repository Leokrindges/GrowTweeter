import { CardStyledLogin } from "../components/CardStyledLogin";
import { CardStyledTextLogin } from "../components/CardStyledTextLogin";
import { ContainerStyled } from "../components/ContainerStyled";
import { ContainerStyledLogin } from "../components/ContainerStyledLogin";
import { InputGroupStyled } from "../components/InputGroupStyled";

export function Login() {
  return (
    <ContainerStyled>
      <ContainerStyledLogin>
        <CardStyledTextLogin>
          <h1>GrowTwitter</h1>
          <p id="subtitle">Trabalho final do bloco intermediário</p>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </CardStyledTextLogin>
        <CardStyledLogin>
          <h2>Entrar no Growtwitter</h2>
          <InputGroupStyled>
            <label htmlFor="username_email">Username/Email</label>
            <input
              type="username_email"
              name="username_email"
              id="username_email"
              required
              placeholder="Username or Email"
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            ></input>
            <button>Entrar</button>
          </InputGroupStyled>
        </CardStyledLogin>
      </ContainerStyledLogin>
    </ContainerStyled>
  );
}
