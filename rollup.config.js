import babel from "rollup-plugin-babel";

let pluginOptions = [
    babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-runtime"]
    }),
];

export default {
    input: "node_modules/jsonata/jsonata-es5",
    output: {
        name: "jsonata", // for external calls (need exports)
        file: "index.js",
        format: "iife",
    },
    plugins: pluginOptions,
};
