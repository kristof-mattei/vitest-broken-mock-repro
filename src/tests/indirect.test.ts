import { isValidEmailCustom } from "@/main";

vitest.mock("@hapi/address",  () => {
    return {
        isEmailValid: () => {
            return true;
        },
    };
});

describe("indirect", () => {
    test("works", () => {
        expect(isValidEmailCustom("foo@bar.com")).toBe(true);
    });

    test("mocking does not work, the mock should make isValidEmailCustom return true", () => {
        expect(isValidEmailCustom("notValid")).toBe(true);
    });
});
