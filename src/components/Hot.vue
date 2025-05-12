<template>
    <el-tabs v-model="activeName" class="demo-tabs" tabPosition="left" @tab-click="handleClick">
        <el-tab-pane label="📺 哔哩哔哩" name="bilibili">哔哩哔哩内容</el-tab-pane>
        <el-tab-pane label="🌟 微博" name="weibo">微博内容</el-tab-pane>
        <el-tab-pane label="🎵 抖音" name="douyin">抖音内容</el-tab-pane>
        <el-tab-pane label="🧠 知乎" name="zhihu">知乎内容</el-tab-pane>
        <el-tab-pane label="🧬 36氪" name="36kr">36氪内容</el-tab-pane>
        <el-tab-pane label="🔍 百度" name="baidu">百度内容</el-tab-pane>
        <el-tab-pane label="🔥 少数派" name="sspai">少数派内容</el-tab-pane>
        <el-tab-pane label="📰 IT之家" name="ithome">IT之家内容</el-tab-pane>
        <el-tab-pane label="🧾 澎湃新闻" name="thepaper">澎湃新闻内容</el-tab-pane>
        <el-tab-pane label="🗞️ 今日头条" name="toutiao">今日头条内容</el-tab-pane>
        <el-tab-pane label="💬 百度贴吧" name="tieba">百度贴吧内容</el-tab-pane>
        <el-tab-pane label="💰 稀土掘金" name="juejin">稀土掘金内容</el-tab-pane>
        <el-tab-pane label="🗞 腾讯新闻" name="tencent">腾讯新闻内容</el-tab-pane>
        <el-tab-pane label="🎬 豆瓣电影" name="douban">豆瓣电影内容</el-tab-pane>
        <el-tab-pane label="🎮 原神" name="genshin">原神内容</el-tab-pane>
        <el-tab-pane label="🚄 星穹铁道" name="starrail">星穹铁道内容</el-tab-pane>
        <el-tab-pane label="🏆 LOL" name="lol">LOL内容</el-tab-pane>
        <el-tab-pane label="🗞 网易新闻" name="netease">网易新闻内容</el-tab-pane>
        <el-tab-pane label="📚 微信读书" name="wxread">微信读书内容</el-tab-pane>
        <el-tab-pane label="💬 豆瓣小组" name="dougroup">豆瓣小组内容</el-tab-pane>
        <el-tab-pane label="🧠 NGA" name="nga">NGA内容</el-tab-pane>
        <el-tab-pane label="💡 HelloGitHub" name="hellogithub">HelloGitHub内容</el-tab-pane>
        <el-tab-pane label="📖 简书" name="jianshu">简书内容</el-tab-pane>
        <el-tab-pane label="🧠 知乎日报" name="zhihudaily">知乎日报内容</el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'

const activeName = ref('bilibili')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style>
</style>