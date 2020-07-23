import React, { useState } from "react";
import marked from "marked";
import ReactMarkDown from "react-markdown";

import "./App.css";

export const App = () => {
  const [markDown, setMarkDown] = useState(`
  # Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no 'dangerouslySetInnerHTML' is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

But
> This blockquote will change based on the HTML settings above.


Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
  `);

  const onChange = (e) => {
    setMarkDown(e.target.value);
  };

  return (
    <div className="app">
      <textarea onChange={onChange} value={markDown} />

      {/* 1 way */}
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markDown) }}
      /> */}

      {/* 2 way */}
      <ReactMarkDown className="preview" source={markDown} />
    </div>
  );
};
