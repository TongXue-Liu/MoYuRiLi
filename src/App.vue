<template>
    <div class="box">
        <!-- 一言 -->
        <div class="top">
            <div class="yiyan" @click="getYiYanHandler">
                🌱 思绪一角：<span>{{ hitokoto ?? '希望你今天黑开心！' }}</span>
            </div>
            <div class="tips">
                <div class="github">
                    🐱 <el-link type="primary" @click="copyUrlHandler(project_url)">开源地址</el-link>
                </div>
                <div class="time">
                    ⏰ {{ timer ?? '2025……' }}
                </div>
            </div>
        </div>
        <div class="bottom">
            <!-- 摸鱼日历图片展示 -->
            <div class="calendar">
                <MoYuRiLi />
            </div>
            <!-- 热点榜单 -->
            <div class="hot">
                <Hot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
// 摸鱼模块
import MoYuRiLi from '@/components/MoYuRiLi.vue'
// 热点模块
import Hot from '@/components/Hot.vue'
// 一言
import { getYiYan } from '@/api/yiyan'
// 当前时间
import { getCurrentDate } from '@/utils/date';
//打开浏览器
import { copyUrlHandler } from '@/utils/clipboard.js'

//项目地址
const project_url = ref("https://github.com/TongXue-Liu/MoYuRiLi");

let reguqetFlag = ref(false);

//获取一言数据
const hitokoto = ref(null);

function getYiYanHandler() {
    if (reguqetFlag.value)
        return

    reguqetFlag.value = true;

    getYiYan().then((res) => {
        hitokoto.value = res.hitokoto;
    }).finally(() => {
        reguqetFlag.value = false;
    })
}

//挂载时加载
onMounted(() => {
    //一言
    getYiYanHandler();
})

//获取最新时间
let timer = ref(null);
setInterval(() => {
    timer.value = getCurrentDate();
}, 1000)

</script>
<style>
.box {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    /* gap: 20px; */
    overflow: hidden;
    position: relative;
}

/* 一言 */
.top {
    height: 40px;
    /* padding: 10px 0; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

.yiyan {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
}

.yiyan>span {
    font-size: 0.8rem;
    color: #887272;
}

.tips {
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    gap: 15px;
}

/* hot部分 */
.bottom {
    height: calc(100% - 40px);
    display: flex;
}

/* 日历 */
.calendar {
    width: 300px;
    min-width: 300px;
}

/* 热点 */
.hot {
    width: calc(100% - 300px);
    height: 100%;
}
</style>