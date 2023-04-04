
// --------------------------------------------------------------------------------
/// <summary>
/// App.js
/// ReactApp
/// created by Mehrdad Soleimanimajd on 26.03.2023
/// </summary>
/// <created>ʆϒʅ, 26.03.2023</created>
/// <changed>ʆϒʅ, 04.04.2023</changed>
// --------------------------------------------------------------------------------


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavButtons />
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <aside className="App-sidebar">

      </aside>
      <div className="App-content">
        <Article />

      </div>
      <footer className="App-footer">

      </footer>
    </div>
  );
}


function Article() {
  return (
    <>
      <section>
        <h3>
          React App
        </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </section>
      <article>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
      </article>
      <details>
        <h5>
          React App details
        </h5>
        <p>
          Edit <code>source</code> and save to reload.
        </p>
      </details>
    </>
  )
}


function NavButtons() {
  let a = ["a", "b", "c", "d", "hello"];
  let columns = [];

  // for (let index = 0; index < a.length; index++) {
  //   columns.push(<button id={index} >AButton</button>)
  // }
  for (const item of a) {
    columns.push(<button id={item}>{item} Button</button>)
  }
  // for (const item of a) {
  //   columns.push(<a id={item} href="https://google.com" target="_blank">{item} URL</a>)
  // }
  return columns;
}

export default App;
