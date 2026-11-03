import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import EditorModule from "react-simple-code-editor";
import "./App.css";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
const Editor = EditorModule.default?.default ?? EditorModule.default ?? EditorModule;

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return 1 + 1;
}`);
  const [review, setReview] = useState(`Your results appear here`);

async function reviewCode(){
  const response = await axios.post("http://localhost:3000/ai/get-response", {code})
  console.log(response.data)
  setReview(response.data)
}

  return (
    <>
    <div className="section">CODINGLENS : Review Smarter, Ship Cleaner</div>
    <main>
      <div className="left">
        <div className="heading" style={{ fontSize: "1.2rem", color: "#fff", 
          paddingBottom: "1rem", fontWeight: "bold"}}>
          Paste your code below
        </div>
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(value) =>
              prism.highlight(value, prism.languages.javascript, "javascript")
            }
            padding={12}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              minHeight: "100%",
            }}
          />
        </div>
        <button className="review-btn" onClick={reviewCode}>
          Review
        </button>
      </div>

      <div className="right">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
</div>
    </main>
    </>
  );
}

export default App;