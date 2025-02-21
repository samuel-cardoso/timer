import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: 0;
} 

/* Fórum da rocketseat:

Boa noite gente!

Não sei se mais alguém tem toque que nem eu, e dá nos nervos a borda do focus aparecendo com o click. 😅

Então se quiser evitar que apareça, troca o :focus por :focus-visible dentro do arquivo de estilos globais, isso vai fazer com que o essas bordas só apareçam acessando o elemento com 'tab' e não com click.

Não sei se isso influencia em alguma estilização futura que o Diego vai fazer, mas quando descobri que dava para mudar isso fiquei bem feliz hehe

Forte abraço */

/* Alteração feita! */

:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};
}

body {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
}

body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;
