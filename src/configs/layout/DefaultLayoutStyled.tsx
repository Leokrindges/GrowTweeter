import { Fragment } from "react/jsx-runtime";
import { LightTheme } from "../theme/LightTheme";
import { GlobalStyles } from "../global/GlobalStyles";
import { ContainerSideBarStyled } from "../../components/ContainerSidebarStyled";
import { ContainerMainStyled } from "../../components/ContainerMainStyled";
import { SideBarMenu } from "../../components/Functional/SideBarMenu";

interface DefaultLayoutStyledProps {
  children?: React.ReactNode;
}

export function DefaultLayoutStyled(props: DefaultLayoutStyledProps) {
  return (
    <Fragment>
      <LightTheme>
        <GlobalStyles />
        <ContainerMainStyled>
          <ContainerSideBarStyled width="13%">
            <SideBarMenu></SideBarMenu>
          </ContainerSideBarStyled>
          <ContainerSideBarStyled width="30%">{props.children}</ContainerSideBarStyled>
          <ContainerSideBarStyled width="20%">assuntos</ContainerSideBarStyled>
        </ContainerMainStyled>
      </LightTheme>
    </Fragment>
  );
}
