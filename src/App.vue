<template>
    <div class="box">
        <!-- 摸鱼日历图片展示 -->
        <div class="calendar">
            <MoYuRiLi />
        </div>
        <!-- 热点榜单 -->
        <div class="hot">
            <Hot />
        </div>
    </div>


</template>

<script lang="ts" setup>
// 摸鱼模块
import MoYuRiLi from '@/components/MoYuRiLi.vue'
// 热点模块
import Hot from '@/components/Hot.vue'
</script>

<style>
/* .demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
} */

.box {
    display: flex;
    height: 100%;
    gap: 20px;
}

.calender {
    min-width: 300px;
    height: 100%;
}

.hot {
    height: 100%;
    overflow: scroll;
    flex: 1;
}
</style>