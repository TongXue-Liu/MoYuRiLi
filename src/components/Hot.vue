<template>
    <div class="hot-box">
        <!-- @tab-click="handleClick" -->
        <el-tabs v-model="activeName" class="demo-tabs" tab-position="top">
            <el-tab-pane v-for="tab in hotTabs.filter(tab => tab.isShow)" :key="tab.name" :label="tab.label"
                :name="tab.name">
                <component v-if="tab.component" :is="components[tab.component]"
                    :ref="el => setComponentRef(tab.name, el)" />
                <template v-else>
                    {{ tab.content }}
                </template>
            </el-tab-pane>
        </el-tabs>
        <!-- 全局刷新 -->
        <div class="refresh">
            <el-button type="success" size="large" round @click="refreshGlobal">
                <el-icon class="spin-icon">
                    <Eleme />
                </el-icon>
                刷新
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// 引入热点及是否展示
import { hotTabs } from '@/setting/hot.js';
// 引入展示热点组件
import Bilibili from '@/components/hot/Bilibili.vue';
import WeiBo from '@/components/hot/WeiBo.vue';
import DouYin from '@/components/hot/DouYin.vue';
import TouTiao from '@/components/hot/TouTiao.vue';
import TieBa from '@/components/hot/TieBa.vue';
import YuanShen from '@/components/hot/YuanShen.vue';
import JueJin from '@/components/hot/JueJin.vue';
import LoL from '@/components/hot/LoL.vue';
import HelloGitHub from '@/components/hot/HelloGitHub.vue';
import ITHome from '@/components/hot/ITHome.vue';

// 注册组件
const components = {
    Bilibili,
    WeiBo,
    DouYin,
    TouTiao,
    TieBa,
    YuanShen,
    JueJin,
    LoL,
    HelloGitHub,
    ITHome
}
// Icon
import {
    Eleme
} from '@element-plus/icons-vue'
import { ElMessage } from "element-plus";

// 定位tab
const activeName = ref('bilibili');

// 用来存放组件 ref 的容器
const componentRefs = reactive({})

const setComponentRef = (name, el) => {
    if (el) componentRefs[name] = el;
}

//刷新全局
const refreshGlobal = () => {
    console.log('正在刷新所有热点组件...');
    Object.values(componentRefs).forEach(c => {
        c?.refresh?.()
    })
    ElMessage.success("刷新成功!")
}

</script>

<style>
.hot-box {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    position: relative;
}

.demo-tabs {
    flex: 1;
    display: flex;
    overflow: hidden;
    /* 避免 tabs 本身超出 */
}

.demo-tabs>.el-tabs__content {
    flex: 1;
    overflow-y: auto;
    /* 只让内容区域滚动 */
    padding: 0 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

/* 刷新 */
.refresh {
    position: absolute;
    right: 5%;
    bottom: 8%;
}

.spin-icon {
    animation: spin 3s linear infinite;
    margin-right: 6px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>