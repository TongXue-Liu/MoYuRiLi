<p align="center">
  <img src="./resources/icons/icon_128.png" alt="摸鱼日历" width="128" />
</p>

<h2 align="center">摸鱼日历 🐟📅</h2>



> 人间桂花落，夜静春山空。
> 认真生活的同时，也别忘了偶尔摸鱼。

&emsp;摸鱼日历是一款基于 Electron 开发的跨平台桌面应用，聚合每日“摸鱼日历”内容，展示温暖语句、冷知识和热门话题，帮你在工作/学习中偷得片刻轻松。

## ✨ 功能特色

- 📅 每日更新的摸鱼日历图文内容

- 🌍 支持微博、抖音、B 站、今日头条等平台跳转

- 📘 展示思绪角摘录和精选语句

- 🧠 获取网络日历数据并缓存

- 🌙 纯净桌面小应用，随开随用

## 🖥️ 技术栈

- Electron：构建跨平台桌面应用

- Vite：极速构建工具，提升开发体验

- Vue 3：构建响应式前端界面

- Axios：请求远程 API，获取日历内容

## 🔥 热榜聚合平台支持情况

| 图标 | 平台名称       | 配置/组件名     | 状态       |
|------|----------------|----------------|------------|
| 📺   | 哔哩哔哩       | Bilibili       | ✅ 已接入   |
| 🌟   | 微博           | WeiBo          | ✅ 已接入   |
| 🎵   | 抖音           | DouYin         | ✅ 已接入   |
| 🗞️   | 今日头条       | TouTiao        | ✅ 已接入   |
| 💬   | 百度贴吧       | TieBa          | ✅ 已接入   |
| 🎮   | 原神           | YuanShen       | ✅ 已接入   |
| 📕   | 小红书         | xiaohongshu    | 🚧 预留配置 |
| 🧠   | 知乎           | zhihu          | 🚧 预留配置 |
| 🧬   | 36氪           | 36kr           | 🚧 预留配置 |
| 🔍   | 百度           | baidu          | 🚧 预留配置 |
| 🔥   | 少数派         | sspai          | 🚧 预留配置 |
| 📰   | IT之家         | ithome         | ✅ 预留配置 |
| 💰   | 稀土掘金       | juejin         | ✅ 预留配置 |
| 🗞   | 腾讯新闻       | tencent        | 🚧 预留配置 |
| 🎬   | 豆瓣电影       | douban         | 🚧 预留配置 |
| 🚄   | 星穹铁道       | starrail       | 🚧 预留配置 |
| 🏆   | LOL            | lol            | ✅ 预留配置 |
| 🗞   | 网易新闻       | netease        | 🚧 预留配置 |
| 📚   | 微信读书       | wxread         | 🚧 预留配置 |
| 💬   | 豆瓣小组       | dougroup       | 🚧 预留配置 |
| 🧠   | NGA            | nga            | 🚧 预留配置 |
| 💡   | HelloGitHub    | hellogithub    | ✅ 预留配置 |
| 📖   | 简书           | jianshu        | 🚧 预留配置 |
| 🧠   | 知乎日报       | zhihudaily     | 🚧 预留配置 |

---

📌 *本列表将持续更新，欢迎提交你感兴趣的平台！*

## 🚀 快速启动

```bash
    # 克隆项目
    git clone https://github.com/yourname/mo-yu-calendar.git
    cd mo-yu-calendar

    # 安装依赖
    npm install

    # 启动开发环境
    npm run start

    # 打包生产应用
    npm run make
```

## 📦 安装方式

前往 Releases 页面下载适合你系统的安装包

解压并运行 摸鱼日历.exe（Windows）

支持开机自启、自定义窗口大小与位置

## 🛠 遗留问题

1. Tray托盘右键菜单丢失(25-5-16)  😀
2. 应用程序Icon无法进行打包(25-5-16) 😀
3. 程序集成electron-release-serve 后自动更新未生效(2025-5-23) 😌


## 📖 主要参考文献

- [electronforge](https://www.electronforge.io/)

- [Electron](https://www.electronjs.org/zh/docs/latest/api/menu-item#menuitemsubmenu)

- [Hitokoto](https://developer.hitokoto.cn/sentence/)

<!-- - [今日热榜](https://github.com/imsyy/DailyHotApi) -->

- [electron-release-server(更新服务器-自动更新需要依赖服务器|Github)](https://github.com/ArekSredzki/electron-release-server)

<!-- https://www.cnblogs.com/rion1234567/p/18059244 自动启动 -->

<!-- https://juejin.cn/post/7407610458787889179 托盘图标 -->

## 📄 License

MIT License © 2025 [TongXue-Liu]
