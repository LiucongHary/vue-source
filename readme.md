### 搭建环境
1 npm install -y

2 安装rollup环境

` npm install @babel/preset-env @babel/core rollup rollup-plugin-babel rollup-plugin-serve cross-env -D`

3 rollup.config.js文件编写
```
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
export default {
    input: './src/index.js',
    output: {
        format: 'umd', // 模块化类型
        file: 'dist/umd/vue.js', 
        name: 'Vue', // 打包后的全局变量的名字
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        process.env.ENV === 'development'?serve({
            open: true,
            openPage: '/public/index.html',
            port: 3000,
            contentBase: ''
        }):null
    ]
}
```
4 配置 .babelrc文件
```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
5 执行配置脚本
```
"scripts": {
    "build:dev": "rollup -c",
    "serve": "cross-env ENV=development rollup -c -w"
}
```


 

