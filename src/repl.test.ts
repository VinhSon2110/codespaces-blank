import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  ",
    expected: [],
  },
  // TODO: more test cases here
  {
    input: "  hello  ",
    expected: ["hello"],
  },
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  HellO  World  ",
    expected: ["hello", "world"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    // TODO: call cleanInput with the input here

    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
        // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
