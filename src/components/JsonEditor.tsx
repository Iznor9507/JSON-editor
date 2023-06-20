import { memo, useEffect, useState } from "react";
import { Alert, Input } from "antd";
import { JsonService } from "../services/JsonService";
const { TextArea } = Input;

const JsonEditor = () => {
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
    <>
      <TextArea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        rows={10}
      />
      {error ? (
        <Alert
          message="Ощибка"
          description="Это не JSON"
          type="error"
          showIcon
        />
      ) : (
        <Alert
          message="Отлично"
          description="Это валидный JSON"
          type="success"
          showIcon
        />
      )}
    </>
  );
};

const MemoizedJsonEditor = memo(JsonEditor);
export default MemoizedJsonEditor;
