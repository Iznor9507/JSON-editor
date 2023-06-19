import { JsonService } from "./JsonSirvice";




test("parseJson", () => {
  expect(JsonService.parseJson('{"key":"value"}')).toEqual({ key: "value" });
  expect(() => JsonService.parseJson("invalid")).toThrow("Неправильный JSON");
});
