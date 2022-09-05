<template>
  <div class="home-container">
   <van-nav-bar title="今日头条" fixed/>
    <div>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" :disabled="finished">
      <!-- 上拉加载更多 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
     <!-- 在使用组件的时候，如果某个属性名是"小驼峰"形式，则绑定属性的时候，建议改写成"连字符"格式
      例如：cmtCount改为cmt-count -->
       <ArtInfo
      v-for="item in articlesList"
      :key="item.art_id"
      :title="item.title"
      :author="item.aut_name"
      :com-count="item.comm_count"
      :pubdate="item.pubdate"
      :cover="item.cover"
       ></ArtInfo>
      </van-list>
     </van-pull-refresh>
    </div>
  </div>
</template>

<script>
// 引入api接口方法
import { getArticleListAPI } from '@/api/articleAPI.js'
// 引入需要的组件
import ArtInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home-h',
  data() {
    return {
      articlesList: [],
      // 页码值
      page: 1,
      // 每页显示多少条
      limit: 10,
      // 是否正在加载下一页数据,当正在加载时为ture，下一页加载完毕之后要立即改为false
      loading: true,
      // 所有的数据是否加载完毕，当所有数据加载完毕之后要改为true
      finished: false,
      // 是否正在刷新
      isLoading: false
    }
  },
  methods: {
    // 获取文章数据列表
    async initArticle() {
      // 发起get请求获取数据  调用获取文章接口函数
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // console.log(res)
      // 如果是下拉刷新 this.articlesList=[新数据,旧数据] 拼接数组
      if (this.isLoading) {
        this.articlesList = [...res, ...this.articlesList]
        this.isLoading = false
      } else {
      // 如果是上拉加载更多
      // this.articlesList=[旧数据,新数据] 拼接数组
        this.articlesList = [...this.articlesList, ...res]
        this.loading = false
      }

      // 如果所有数据加载完毕,就不会再触发onload事件
      if (res.length === 0) {
        // 没有数据了 把finished改为true
        this.finished = true
      }
    },
    // 上拉加载获取更多数据
    onLoad() {
      // console.log('触发了load事件')
      this.page += 1
      this.initArticle()
      // this.loading = true
    },
    // 下拉刷新获取更多数据
    onRefresh() {
      // console.log('触发了下拉刷新')
      this.page += 1
      this.initArticle()
    }
  },
  // 注册组件
  components: {
    ArtInfo
  },
  created() {
    this.initArticle()
  }

}
</script>

<style lang="less" scoped>
  .home-container{
    padding: 46px 0 50px 0;
    // .van-nav-bar{
    //   background-color: #007bff;
    // }
    // /deep/.van-nav-bar__title{
    //   font-size: 18px;
    //   color: #fff;
    // }
  }
</style>
