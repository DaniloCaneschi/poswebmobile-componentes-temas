import './App.css';
import React from "react";
import NewsLetter from "./NewsLetter";
import {temaDark, temaLight} from "./Temas";
import {ThemeProvider} from "styled-components";
import {EstiloGlobal} from "./EstiloTemaApp";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tema: temaLight
    }
  }

  mudarTema = () => {
    let tema = this.state.tema === temaLight ? temaDark : temaLight;
    this.setState({tema: tema})
  }

  render() {

    return (
        <div>
          <input className={'btn-mudar-Tela'} type={'button'} value={'Mudar Tema'} onClick={this.mudarTema}/>

          <ThemeProvider theme={this.state.tema}>
            <EstiloGlobal/>
            <header className="App-header">
              <NewsLetter/>
            </header>
          </ThemeProvider>
        </div>
    )
  }
}

export default App;
