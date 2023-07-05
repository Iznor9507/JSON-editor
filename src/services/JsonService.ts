//  Это класс с именем "JsonService",
//  который содержит статический метод "parseJson".
//  Метод "parseJson" принимает один аргумент - строку "text".
//  Этот метод пытается преобразовать эту строку в объект
//  с помощью функции "JSON.parse()".

//  Если строка "text" не является корректным JSON
//  , то "JSON.parse()" вызовет ошибку. Эта ошибка будет перехвачена блоком
//   "catch", и вместо неё будет выброшена новая ошибка
//    с сообщением "Неправильный JSON".

//  Таким образом, если метод "parseJson" успешно преобразует строку в объект,
//   он возвращает этот объект. Если преобразование не удаётся,
//   метод выбрасывает ошибку.

export class JsonService {
  static parseJson(text: string) {
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error("Неправильный JSON");
    }
  }

  // Метод getStoredJson получает значение из localStorage по ключу "jsonText" и возвращает его.
  // Если по данному ключу в localStorage ничего не сохранено, метод вернет null.
  static getStoredJson() {
    return localStorage.getItem("jsonText");
  }

  // Метод setStoredJson принимает строку jsonText и сохраняет ее в localStorage под ключом "jsonText".
  // Если в localStorage уже есть значение по этому ключу, оно будет перезаписано.
  static setStoredJson(jsonText: string) {
    localStorage.setItem("jsonText", jsonText);
  }
}
