// Neste arquivo o "d.ts" significa que só vou ter código de definição de tipos do TS. Arquivo chamado de Definição de tipos.

import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// Aqui, basicamentes estamos "sobrescrevendo" as tipagens de uma biblioteca já existente.

type ThemeType = typeof defaultTheme;

// Criando uma tipagem para o módulo "styled-components" do npm. Adicionando propriedades novas.
declare module "styled-components" {
    // Esse erro abaixo ocorre porque o TypeScript entende que a interface DefaultTheme está sendo sobrescrita sem adicionar novos membros além dos que já existem. Mas o ThemeType possui novas propriedade e estou conseguindo acessá-las em meus componentes.

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType {} 
}
