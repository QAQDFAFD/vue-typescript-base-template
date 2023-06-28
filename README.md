# vue-base-template

> `vue+ts` 开发模板。

> 请只使用 `pnpm` 作为包管理工具。

## 包含的内容

### 格式化

-   [x] eslint 配置 -> `.eslintrc.js` + `.eslintignore`
-   [x] prettier 配置 -> `.prettierrc` + `.prettierignore`
-   [x] 冲突解决：`eslint-config-prettier` + `eslint-plugin-prettier`

### 开发包

-   [x] pinia 安装 + 使用
-   [ ] axios 安装 + 二次封装
-   [x] sass 安装 + 全局变量的配置
-   [x] vue-router 安装 + 使用
-   [x] animate.css 的引入
-   [x] element 按需引入
-   [ ] echarts 按需引入
-   [x] iconfont 图标库引入
-   [x] unocss 集成
-   [x] 引入其他字体

## 项目初始化的一些集成操作

- [x] `typescript` 的相关配置

-   [x] 公共样式的编写
-   [x] 典型组件的抽离
    -   [x] SvgIcon：图标组件
-   [x] `.env.development` + `.env.production` + `.env.test`
-   [x] `.gitignore`
-   [x] `README.md` 的编写
-   [x] `vite.config.ts` 配置的相关配置
-   [x] `.cssrem` 的配置（第三方插件用于**单位转换**）
-   [x] `commitlint` 提交的 comment 的规范化
-   [x] `husky` 在提交代码时对代码进行格式化
-   [x] 配置开发包 -> 统一开发包的使用 -> 只允许使用 `pnpm`
-   [x] 全局组件（`globalComponent`）的注册
    -   [x] icon组件 -> 如果要使用 iconfont 中的图标，直接复制 svg 即可
-   [x] `mockjs` 相关数据的配置 -> **模拟后端**
-   [x] 夜间模式的开关
-   [ ] 基于 token 的身份验证
-   [ ] 拥有脚手架 -> 全局安装后，使用`li-vue`命令即可快速生成项目
-   [x] 文件打包配置`rollupOptions`
-   [x] 打包后会产生一张打包结果分析图用于优化
-   [x] 配置 `esbuild` 配合打包
-   [ ] 配置打包时压缩图片