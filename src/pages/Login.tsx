import { useNavigate } from "react-router-dom";
import { CardStyledLogin } from "../components/CardStyledLogin";
import { CardStyledTextLogin } from "../components/CardStyledTextLogin";
import { ContainerStyled } from "../components/ContainerStyled";
import { ContainerStyledLogin } from "../components/ContainerStyledLogin";
import { InputGroupStyled } from "../components/InputGroupStyled";
import { useEffect } from "react";
import { login } from "../services/growtweeter-api/auth/auth.service";
import { Credentials } from "../services/growtweeter-api/auth/auth.types";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      navigate("/feed");
    }
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailOrPassword: string = event.currentTarget.username_email.value;
    let credentials: Credentials;

    if (emailOrPassword.includes("@")) {
      credentials = {
        email: event.currentTarget.username_email.value,
        password: event.currentTarget.password.value,
      };
    } else {
      credentials = {
        username: event.currentTarget.username_email.value,
        password: event.currentTarget.password.value,
      };
    }

    const result = await login(credentials);

    if (!result.ok) {
      alert(result.message);
      return;
    }
    console.log(result.authToken);
    
    localStorage.setItem("authToken", JSON.stringify(result.authToken));
    // (event.target as HTMLFormElement).reset();

    alert(result.message);
    navigate("/feed");
  }

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
            <form onSubmit={handleSubmit}>
              <label htmlFor="username_email">Username/Email</label>
              <input
                type="text"
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
            </form>
          </InputGroupStyled>
        </CardStyledLogin>
      </ContainerStyledLogin>
    </ContainerStyled>
  );
}
