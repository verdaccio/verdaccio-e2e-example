const path = require('path');
const { spawnRegistry } = require("./helper/registry");
const { runNmp } = require("./helper/npm");
const { runCli } = require("./helper/cli");
const { getTempFolder } = require("./helper/fs-utils");

jest.setTimeout(20000);

describe("test cli", () => {
  let childFork;
  beforeAll(async () => {
    childFork = await spawnRegistry();
  });

  it("run e2e", async () => {
		const folder = getTempFolder();
		await runNmp(["publish", "--registry", "http://localhost:4873"]);
		await runNmp(["install", "verdaccio-e2e-example", "--prefix", folder, "--registry", "http://localhost:4873"]);
		const output = await runCli(path.join(folder, 'node_modules', '.bin', 'cli'), ['-w', '10', '-h', '10']);

    expect(output).toMatch('The area is 100');
  });

  afterAll(() => {
    if (childFork) {
      childFork.kill();
    }
  });
});
