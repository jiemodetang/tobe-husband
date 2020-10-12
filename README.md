![avatar](https://pic4.zhimg.com/80/v2-0973fd26fb7d591df4985ed1090b9173_1440w.jpg)

# 1.项目初始化

    - gitignore:忽略push
    - install: 镜像pull设置

# 2.代码规范

    - EditorConfig: 编译器风格统一
    - Prettier: 保存时项目风格
    - ESLint: 代码风格问题
    - StyleLint: css风格统一
    （ eslint-config-prettier: 解决Prettier和ESLint的冲突）
    - husky lint-staged : commit前校验代码、
    - commitlint + changelog:commit的格式统一

# 3.webpack 的配置

    ## Pulgin
    - webpack-dev-server :本地服务
    - html-webpack-plugin :自动注入js
    - clean-webpack-plugin :清理html
    - copy-webpack-plugin  :静态文件复制

    （优化）👇
    - webpackbar :显示编译进度
    - fork-ts-checker-webpack-plugin :打包时校验
    - hard-source-webpack-plugin:加快二次编译速度
    - webpack.HotModuleReplacementPlugin :局部刷新
    - mini-css-extract-plugin :抽离出 css 样式
    - purgecss-webpack-plugin :去除无用样式
    - terser-webpack-plugin :压缩js
    - optimize-css-assets-webpack-plugin :css压缩
    - 内置tree-shaking
    - webpack-bundle-analyzer:分析工具

    ## loader
    - style-loader  css-loader less-loader等等
    - postcss-preset-env postcss-flexbugs-fixes 等css兼容
    - file-loader   url-loader:处理问题以及图片
    - babel-loader :编译jsx

    ## alias（相对路径）
    （优化）👇
    ## external(减少打包体积)
    ## optimization
        splitChunks:抽离第三方公共代码，减小代码包大小

# 4.第三方插件

-   react react-dom
-   babel 一系列插件
----------------------------------------------------------------------------------
1. “现在的状态就是 微信没有消息 游戏也打腻了 每天看着短视频 时而被文案触动 时而被视频戳心 生活也很迷茫”
2. 我讨厌有人为我牺牲 为我放弃什么 我不需要 你的路该走就走 不要停 你懂吗——《撒野》顾飞
3. 其实古代人挺乐观的，有点闲工夫都琢磨着怎么长生不老。现代人忙完一天的事，静下心来瘫在床上，心里只有四个字:不想活了。
4. 成年人都不是傻子 是个正常人都能发现你那一点点的小情绪 但能发现和能哄你是两回事 他要是装糊涂不知道你就别揭穿他了

