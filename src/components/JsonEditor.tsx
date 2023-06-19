import { memo, useEffect, useState } from "react";
import { Input } from "antd";
import { JsonService } from "../services/JsonSirvice";

const { TextArea } = Input;

const JsonEditor = memo(() => {
  const [jsonText, setJsonText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedJsonText = localStorage.getItem("jsonText");
    if (storedJsonText) {
      setJsonText(storedJsonText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jsonText", jsonText);
    try {
      const json = JsonService.parseJson(jsonText);
      console.log(json);
      setError(false);
    } catch (e) {
      setError(true);
    }
  }, [jsonText]);

  return (
    <div>
      <TextArea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        rows={10}
      />
      {error ? (
        <h1
          style={{
            backgroundColor: "red",
            width: "16%",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Это не JSON код!
        </h1>
      ) : (
        <h1
          style={{
            backgroundColor: "#34C924",
            width: "24%",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Это валидный JSON код!
        </h1>
      )}
    </div>
  );
});

export default JsonEditor;
