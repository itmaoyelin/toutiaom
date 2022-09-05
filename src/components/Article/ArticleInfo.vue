<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img v-if="cover.type==1"  :src="cover.images[0]" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type==3">
          <img v-for="(item,index) in cover.images" :key="index"
          :src="item" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者：{{author}} &nbsp;&nbsp;{{comCount-0}}评论 &nbsp;&nbsp; 发布日期: {{pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArtInfo',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 文章封面
    cover: {
      type: Object,
      //  对象或者数组应当用工厂函数返回
      default: function() {
        return { type: 0 }
      }

    },
    // 文章作者
    author: {
      type: String,
      default: ''
    },
    // 评论数量
    comCount: {
      // 通过数组形式，定义多个可能的类型
      type: [Number, String],
      default: 0
    },
    // 发布日期
    pubdate: {
      type: String,
      default: ''

    }

  }

}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
