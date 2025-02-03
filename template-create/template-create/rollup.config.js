// rollup.config.js
export default {
    input: './bin/index.js', // 入口文件
    output: {
        file: 'dist/bundle.js', // 输出文件
        format: 'es' // 输出格式，这里使用 ES 模块格式
    }
};
