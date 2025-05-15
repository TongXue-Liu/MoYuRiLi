<template>
    <div class="box">
        <!-- 一言 -->
        <div class="top">
            <div class="yiyan">
                🌱 思绪一角：<span>{{ hitokoto ?? '希望你今天黑开心！' }}</span>
            </div>
            <div class="current-date">
                ⏰ {{ timer }}
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

//获取一言数据
const hitokoto = ref('');
function getYiYanHandler() {
    getYiYan().then((res) => {
        hitokoto.value = res.hitokoto;
    })
}

//挂载时加载
onMounted(() => {
    //一言
    getYiYanHandler();
})

//获取最新时间
let timer = ref("");
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
}

.yiyan>span {
    font-size: 0.8rem;
    color: #887272;
}

.current-date {
    font-size: 0.8rem;
    font-weight: 600;
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