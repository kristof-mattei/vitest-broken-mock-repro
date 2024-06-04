import { email } from "@sideway/address";

vitest.mock("@sideway/address", () => {
    return {
        email: {
            isValid: () => {
                return true;
            },
        }
    };
});

describe("direct", () => {
    test("works", () => {
        expect(email.isValid("foo@bar.com")).toBe(true);
    });

    test("mocking a direct import works", () => {
        expect(email.isValid("notValid")).toBe(true);
    });
});
