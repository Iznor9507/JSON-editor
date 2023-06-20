import { memo, useEffect, useState } from "react";
import { Alert, Input } from "antd";
import { JsonService } from "../services/JsonSirvice";
import style from "./JsonEditor.module.css";
const { TextArea } = Input;

const JsonEditor = () => {

  const [jsonText, setJsonText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // сохраняем данныее из localStorage под ключом jsonText,
    // и если есть, то мы их извлекаем и устанавливаем в setJsonText
    const storedJsonText = localStorage.getItem("jsonText");
    if (storedJsonText) {
      setJsonText(storedJsonText);
    }
  }, []);

  useEffect(() => {
    // вызывается каждый раз при изменении jsonText
    //  Он сохраняет новый текст в localStorage,
    //   а затем пытается его разобрать с помощью `JsonService.parseJson()`.
    //   Если разбор проходит успешно, `error` устанавливается в `false иначе в `true`
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
         message="Error"
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
