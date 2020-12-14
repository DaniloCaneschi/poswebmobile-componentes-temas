import {createGlobalStyle} from "styled-components";

export const EstiloGlobal = createGlobalStyle `
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }
  
  input[type=button] {
    background: ${({theme}) => theme.backgroundButton};
    color: ${({theme}) => theme.colorTextButton};    
  }
  
  input {
    background: ${({theme}) => theme.backgroundText};
    border: ${({theme}) => theme.borderText};
    color: ${({theme}) => theme.colorText};    
  }
`;