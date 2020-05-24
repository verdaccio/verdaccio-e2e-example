#!/usr/bin/env node
const { calculateArea } = require("./src/area")

const { argv } = require("yargs")
  .scriptName("area")
  .usage("Usage: $0 -w num -h num")
  .example(
    "$0 -w 5 -h 6",
    "Returns the area (30) by multiplying the width with the height."
  )
  .option("w", {
    alias: "width",
    describe: "The width of the area.",
    demandOption: "The width is required.",
    type: "number",
    nargs: 1,
  })
  .option("h", {
    alias: "height",
    describe: "The height of the area.",
    demandOption: "The height is required.",
    type: "number",
    nargs: 1,
  })
  .describe("help", "Show help.")
  .describe("version", "Show version number.")
  .epilog("copyright 2019");

const { width, height } = argv;

console.log(`The area is ${calculateArea(width, height)}`);