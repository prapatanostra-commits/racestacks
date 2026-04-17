
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/stacks/clarinet-js-sdk
*/

describe("example tests", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  // it("shows an example", () => {
  //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
  //   expect(result).toBeUint(0);
  // });
});
// test iteration case 4
// test iteration case 4
// test iteration case 12
// test iteration case 15
// test iteration case 17
// test iteration case 24
// test iteration case 25
// test iteration case 32
// test iteration case 37
// test iteration case 41
// test iteration case 42
// test iteration case 43
// test iteration case 48
