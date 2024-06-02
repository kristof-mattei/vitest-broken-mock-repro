import { isEmailValid } from "@hapi/address";

vitest.mock("@hapi/address", () => {
    return {
        isEmailValid: () => {
            return true;
        },
    };
});

describe("direct", () => {
    test("works", () => {
        expect(isEmailValid("foo@bar.com")).toBe(true);
    });

    test("mocking a direct import works", () => {
        expect(isEmailValid("notValid")).toBe(true);
    });
});
