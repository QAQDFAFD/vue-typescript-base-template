<template>
    <div class="container">
        <div class="left animate__animated animate__fadeInLeft">
            <div style="font-size: 3rem; margin: 3rem 0 2rem 0; cursor: pointer">
                &nbsp;
                <SvgIcon color="red" width="2rem" height="2rem"></SvgIcon>
                <span style="font-family: 'alimama'; margin-left: 1rem">开始编写你的 Vue 项目</span>
            </div>
            <div class="pic"></div>
        </div>
        <div class="right animate__animated animate__fadeInRight c-red">
            <div class="package">
                <div>开发包</div>
                <li>pinia</li>
                <li>axios</li>
                <li>sass</li>
                <li>vue-router</li>
                <li>animate.css</li>
                <li>组件库按需引入(el/antd)</li>
                <li>echarts</li>
                <li>iconfont</li>
                <li>unocss</li>
                <li>阿里妈妈字体</li>
            </div>
            <div class="init">
                <div>初始化</div>
                <li>css reset</li>
                <li>公共组件的编写</li>
                <li>全局组件的注册</li>
                <li>vite.config.ts</li>
                <li>husky</li>
                <li>commitlint</li>
                <li>mockjs</li>
                <li>只允许使用pnpm</li>
                <li>夜间模式</li>
                <li>基于token的身份验证</li>
                <li>打包配置</li>
                <li>cssrem</li>
                <li>.env.</li>
                <li>脚手架</li>
                <li>README.md</li>
            </div>
        </div>
        <div class="switch">
            <el-switch v-model="value" active-color="#2F2F2F" inactive-color="#F1F1F1" @change="changeTheme">
            </el-switch>
        </div>
    </div>
</template>

<script setup lang="ts">
const value = ref(false)
const changeTheme = (states: any) => {
    let body = document.body
    if (states) {
        body.className = 'night'
    } else {
        body.className = 'daytime'
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    padding: 2rem;
    box-sizing: border-box;

    .left {
        width: 50vw;
        height: 100%;
        color: $color;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            right: -2rem;
            top: 0rem;
            width: 0.1rem;
            height: 100%;
            background-color: gray;
        }

        .pic {
            width: 50vw;
            height: 50vh;
            background: url(https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20231130092248.png) no-repeat
                center/cover;
            border-radius: 1rem;
        }
    }
    .right {
        width: calc(90% - 50vw);
        height: 100%;
        margin-left: 4rem;
        display: flex;
        padding-top: 2rem;

        > div > div {
            font-size: large;
            font-weight: 600;
        }
        .package {
            margin-right: 2rem;
        }

        li {
            list-style: disc;
            margin: 0.5rem;
        }
    }

    .switch {
        position: absolute;
        top: 2rem;
        right: 3rem;
    }
}
</style>
