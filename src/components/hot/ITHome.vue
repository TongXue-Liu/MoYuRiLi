<template>
    <div class="douyin-box">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index"
                :timestamp="dateFormat(activity.timestamp)">
                <el-link type="default" @click="copyUrlHandler(activity.url)">{{ activity.title }}</el-link>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getITHomeHot } from '@/api/hot.js';
// 剪贴板操作
import { copyUrlHandler } from '@/utils/clipboard.js';
//时间处理
import { dateFormat } from '@/utils/date.js';

//返回的热点数据
let activities = ref({});
const getITHomeHotHandler = () => {
    getITHomeHot().then((res) => {
        activities.value = res.data;
    })

}

// 暴露刷新方法
const refresh = () => {
    console.log("ITHome Refresh……");
    getITHomeHotHandler();
}

// onMounted
onMounted(() => {
    getITHomeHotHandler();  //获取热点数据
})


defineExpose({ refresh })
</script>

<style>
.douyin-box {
    height: 100%;
}

.el-link>.el-link__inner {
    font-weight: 600;
    color: black;
}
</style>