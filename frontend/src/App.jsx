import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import EditorModule from "react-simple-code-editor";
import "./App.css";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import Markdown from "react-markdown"

const Editor = EditorModule.default?.default ?? EditorModule.default ?? EditorModule;

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return 1 + 1;
}`);
  const [review, setReview] = useState(``);

async function reviewCode(){
  const response = await axios.post("http://localhost:3000/ai/get-response", {code})
  console.log(response.data)
  setReview(response.data)
}

  return (
    <main>
      <div className="left">
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
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;