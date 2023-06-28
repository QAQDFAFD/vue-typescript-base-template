<template>
    <div class="container">
        <div class="left">
            <div style="font-size: 3rem; margin: 3rem 0 2rem 0; cursor: pointer">
                &nbsp;
                <SvgIcon color="red" width="2rem" height="2rem"></SvgIcon>
                <span style="font-family: 'alimama'; margin-left: 1rem">开始编写你的 Vue 项目</span>
            </div>
            <div class="pic"></div>
        </div>
        <div class="right c-red">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
        </div>
        <div class="switch">
            <el-switch v-model="value" active-color="#2F2F2F" inactive-color="#F1F1F1" @change="changeTheme">
            </el-switch>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
            background: url(https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20230604160200.png) no-repeat
                center/cover;
            border-radius: 1rem;
        }
    }
    .right {
        width: calc(90% - 50vw);
        height: 100%;
        margin-left: 4rem;

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
