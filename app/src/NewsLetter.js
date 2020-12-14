import React from "react";
import './App.css';

class NewsLetter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h3 className={'App'}>Sign up to my newsletter</h3>
          <br/>

          <div>
            <input type={'email'} name={'email'} placeholder={'informe um email'} value={'exemplo@gmail.com'}/>
            <input type={'button'} value={'Sign up'}/>
          </div>
        </div>
    );
  }
}

export default NewsLetter;