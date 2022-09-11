import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Example = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);
  const config = {
    // readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    // placeholder: placeholder || "Start typings...",
    filebrowser: {
      ajax: {
        url: "http://localhost:3000", // this parameter is required
        process: (resp) => {
          return {
            success: true,
            data: {
              sources: [
                {
                  baseurl: "http://localhost:3000/",
                  path: "/images/",
                  files: resp,
                  name: "default",
                },
              ],
              code: 220,
            },
          };
        },
      },
    },
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

export default Example;
