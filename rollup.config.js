import pkg from "./package.json"
import typescript from "rollup-plugin-typescript2"

export default [
    {
        input: "src/index.tsx",
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            typescript({
                typescript: require("typescript"),
                tsconfig: "./tsconfig.json"
            })
        ],
        output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }]
    }
]
