<template>
    <div class="bilibili-box">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index"
                :timestamp="dateFormat(activity.timestamp)">
                <el-link type="default" @click="copyUrlHandler(activity.url)">{{ activity.title }}</el-link>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { BilibiliHot } from '@/api/hot.js';
import moment from 'moment'
// 剪贴板操作
import { copyUrlHandler } from '@/utils/clipboard.js';
//时间处理
import { dateFormat } from '@/utils/date.js';

//返回的热点数据
let activities = ref({});


//分页数据
BilibiliHot().then((res) => {
    activities.value = res.data;
})
</script>

<style>
.bilibili-box {
    height: 100%;
}

.el-link>.el-link__inner {
    font-weight: 600;
    color: black;
}
</style>