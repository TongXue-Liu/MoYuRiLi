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
.box {
    display: flex;
    height: 100%;
    width: 100%;
    /* gap: 20px; */
    overflow: hidden;
}

.calendar {
    width: 300px;
    min-width: 300px;
}

.hot {
    width: calc(100% - 300px);
    height: 100%;
}
</style>