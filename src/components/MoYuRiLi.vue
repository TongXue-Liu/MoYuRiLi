<template>
    <div class="moyu-box">
        <el-image class="moyu-image" :src="url" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
            :preview-src-list="srcList" show-progress  fit="fill">
            <template #toolbar="{ actions, reset, activeIndex }">
                <el-icon @click="actions('zoomOut')">
                    <ZoomOut />
                </el-icon>
                <el-icon @click="actions('zoomIn', { enableTransition: false, zoomRate: 2 })">
                    <ZoomIn />
                </el-icon>
                <el-icon @click="reset">
                    <Refresh />
                </el-icon>
                <el-icon @click="download(activeIndex)">
                    <Download />
                </el-icon>
            </template>

        </el-image>
    </div>
</template>

<script lang="ts" setup>
import {
    Download,
    Refresh,
    Right,
    ZoomIn,
    ZoomOut,
} from '@element-plus/icons-vue'

const url =
    'https://api.vvhan.com/api/moyu'
const srcList = [
    'https://api.vvhan.com/api/moyu'
]

const download = (index: number) => {
    const url = srcList[index]
    const suffix = url.slice(url.lastIndexOf('.'))
    const filename = Date.now() + '.png'

    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            //创建图片链接
            const blobUrl = URL.createObjectURL(new Blob([blob]))
            // 创建标签元素
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = filename
            document.body.appendChild(link)
            link.click()
            // 下载文件
            URL.revokeObjectURL(blobUrl)
            link.remove()
        })
}
</script>

<style>
.moyu-box {
    height: 100%;
}

.moyu-image {
    width: 100%;
    height: 100%;
}
</style>