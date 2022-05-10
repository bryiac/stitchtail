import pkg from "./package.json"
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "default"
    },
    {
      file: pkg.module,
      format: "esm",
    }
  ],
  plugins: [
    typescript(),
    terser()
  ]
};