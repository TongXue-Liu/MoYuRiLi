<template>
    <div class="hot-box">
        <!-- @tab-click="handleClick" -->
        <el-tabs v-model="activeName" class="demo-tabs" tab-position="top">
            <el-tab-pane v-for="tab in hotTabs.filter(tab => tab.isShow)" :key="tab.name" :label="tab.label"
                :name="tab.name">
                <component v-if="tab.component" :is="components[tab.component]" />
                <template v-else>
                    {{ tab.content }}
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 引入热点及是否展示
import { hotTabs } from '@/setting/hot.js';
// 引入展示热点组件
import Bilibili from '@/components/hot/Bilibili.vue';
import WeiBo from '@/components/hot/WeiBo.vue';
import DouYin from '@/components/hot/DouYin.vue';
import TouTiao from '@/components/hot/TouTiao.vue';
import TieBa from '@/components/hot/TieBa.vue';
import YuanShen from '@/components/hot/YuanShen.vue';
// 注册组件
const components = {
    Bilibili,
    WeiBo,
    DouYin,
    TouTiao,
    TieBa,
    YuanShen
}
// 定位tab
const activeName = ref('bilibili')
</script>

<style>
.hot-box {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
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
</style>