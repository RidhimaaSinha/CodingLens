import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"

import './App.css'

function App() {

  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
{/*             work on this code snippet----
            <pre>
              <code className="language-javascript">
{`function sum(){
  return 1 + 1;
}`}
              </code>
            </pre> */}


          </div>
          <div className="review-btn">Review</div>
        </div>

        <div className="right"></div>
      </main>
    </>
  )
}

export default App
