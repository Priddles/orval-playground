import { defineConfig } from "orval";

export default defineConfig({
  zodGeneratesNothing: {
    input: "spec.yml",
    output: {
      workspace: "gen",
      target: "nothing.ts",
      client: "zod",
      indexFiles: false,

      override: {
        mock: {
          generateEachHttpStatus: true
        }
      }
    }
  },
  zodGeneratesTooMuch: {
    input: "spec.yml",
    output: {
      workspace: "gen",
      target: "toomuch.ts",
      client: "zod",
      indexFiles: false,

      // @ts-expect-error Probably a bug.
      mock: {
        generateEachHttpStatus: true
      }
    }
  }
});
