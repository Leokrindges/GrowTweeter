import styled from "styled-components";

interface ContainerSideBarStyledProps{
    width: string;
}

export const ContainerSideBarStyled = styled.div<ContainerSideBarStyledProps>`
width: ${(props) => props.width};
background-color: cadetblue;
display: flex;
flex-direction: column;
align-items: start;
`