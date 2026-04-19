
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
// test iteration case 3
// test iteration case 8
// test iteration case 25
// test iteration case 27
// test iteration case 30
// test iteration case 33
// test iteration case 36
// test iteration case 40
// test iteration case 46
// test iteration case 49
// test iteration case 53
// test iteration case 55
// test iteration case 56
// test iteration case 57
// test iteration case 65
// test iteration case 66
// test iteration case 68
// test iteration case 78
// test iteration case 82
// test iteration case 84
// test iteration case 91
// test iteration case 107
// test iteration case 108
// test iteration case 110
// test iteration case 119
// test iteration case 120
// test iteration case 129
// test iteration case 132
// test iteration case 137
// test iteration case 139
// test iteration case 140
// test iteration case 145
// test iteration case 151
// test iteration case 152
// test iteration case 167
// test iteration case 177
// test iteration case 182
// test iteration case 188
// test iteration case 189
// test iteration case 190
// test iteration case 196
// test iteration case 204
// test iteration case 207
// test iteration case 212
// test iteration case 215
// test iteration case 217
// test iteration case 219
// test iteration case 221
// test iteration case 225
// test iteration case 226
// test iteration case 232
// test iteration case 235
// test iteration case 238
// test iteration case 242
// test iteration case 257
// test iteration case 260
// test iteration case 287
// test iteration case 291
// test iteration case 293
// test iteration case 7
// test iteration case 8
// test iteration case 12
// test iteration case 16
// test iteration case 29
// test iteration case 32
// test iteration case 37
// test iteration case 45
// test iteration case 46
// test iteration case 56
