import { classNames } from "./classNames";

describe("className", () => {
    // beforeEach(() => {
    // });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("test1", () => {
        const spyArrayJoin = jest.spyOn(Array.prototype, "join");
        // expect(classNames("someClass")).toBe("someClass");
        classNames("");
        expect(spyArrayJoin).toHaveBeenCalledTimes(1);
    });

    test("test2", () => {
        expect(classNames("red")).toEqual("red");
    });

    test("test3", () => {
        expect(classNames("")).toEqual("");
    });
});
