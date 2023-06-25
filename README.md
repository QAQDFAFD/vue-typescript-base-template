# vue-base-template

> `vue+ts` 开发模板。

> 请只使用 `pnpm` 作为包管理工具。

## 包含的内容

### 格式化

-   [x] eslint 配置 -> `.eslintrc.js` + `.eslintignore`
-   [x] prettier 配置 -> `.prettierrc` + `.prettierignore`
-   [x] 冲突解决：`eslint-config-prettier` + `eslint-plugin-prettier`

### 开发包

-   [ ] pinia 安装 + 使用
-   [ ] axios 安装 + 二次封装
-   [ ] sass 安装 + 全局变量的配置
-   [ ] vue-router 安装 + 使用
-   [ ] animate.css 的引入
-   [ ] element 按需引入
-   [ ] echarts 按需引入
-   [ ] iconfont 图标库引入
-   [ ] unocss 集成

## 项目初始化

- [ ] `typescript` 的相关配置

-   [x] 公共样式的编写
-   [x] 典型组件的抽离
    -   [x] SvgIcon：图标组件
-   [x] `.env.development` + `.env.production` + `.env.test`
-   [x] `.gitignore`
-   [x] `README.md` 的编写
-   [ ] `vite.config.ts` 配置的相关配置
-   [x] `.cssrem` 的配置（第三方插件用于**单位转换**）
-   [ ] `commitlint` 提交的 comment 的规范化
-   [ ] `husky` 在提交代码时对代码进行格式化
-   [x] 配置开发包 -> 统一开发包的使用 -> 只允许使用 `pnpm`
-   [x] 全局组件（`globalComponent`）的注册
    -   [x] icon组件 -> 如果要使用 iconfont 中的图标，直接复制 svg 即可
-   [x] `mockjs` 相关数据的配置 -> **模拟后端**