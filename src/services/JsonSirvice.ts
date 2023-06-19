 export class JsonService {
  static parseJson(text: string) {
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error("Неправильный JSON");
    }
  }
}
