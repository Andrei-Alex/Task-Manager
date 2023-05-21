import { BASE, API } from "../index";
describe("URLS", () => {
  it("returns correct url", () => {
    const newUrl = new URL("/api/auth", BASE).toString();
    expect(newUrl).toBe(`http://${process.env.NEXT_PUBLIC_SERVER}/api/auth`);
    expect(newUrl).toBe(API.toString());
  });
});
