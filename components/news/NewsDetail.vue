<template>
  <div class="newsDetail">
    <div class="container">
      <div class="row newsTitle">
        <div class="col-12">
          <div class="">
            <h2>{{ news.title }}</h2>
          </div>
        </div>
        <div class="col-4">
          <span>小编：{{ news.author }}</span>
        </div>
        <div class="col-4">
          <span>浏览次数：{{ news.clickTimes }}次</span>
        </div>
        <div class="col-4">
          <span>发布时间：{{ news.createTime }}</span>
        </div>
      </div>
    </div>
    <div class="container newsContainer">
      <div class="row">
        <div class="col-12">
          <div class="newsContent">
           <p v-for="item of news.content">
             {{item}}
           </p>
          </div>
        </div>
      </div>
      <div class="row newNext">
        <div class="col-6">上一篇：<a href="javascript:void(0);">恭喜夏女士成功学历入户深圳</a>
        </div>
        <div class="col-6">下一篇：<a href="javascript:void(0);">恭喜夏女士成功学历入户深圳</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNews} from "~/api/news/news";
import {dateFormat} from "~/service/dateFormat";

export default {
  name: 'newDetail',
  data(){
    return {
      news: {}
    }
  },

  methods:{
    getNews(){
      const p = getNews({id: this.$route.query.id});
      p.then(res => {
        console.log(res)
        let {data, status} = res.data;
        if (200 === status) {
          this.news = data;
          this.news.createTime = dateFormat('YYYY-mm-dd HH:MM:SS', new Date(this.news.createTime));
          this.news.content = this.news.content.split('  ');
        }else {
          alert("加载新闻失败 请稍后再试");
        }
      })
    }
  },

  created() {
    this.getNews();
  }
}
</script>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
}

a {
  color: #0066B3;
}

li {
  list-style: none;
}

.newsTitle {
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 2px solid #E5E5E5;
  color: #4E4E4E;
}

.newsTitle h2 {
  margin: 50px 0 30px;
}

.newsContainer {
  margin-top: 30px;
  text-indent: 2em;
}

.newsContent > * {
  margin-top: 10px;
}

.newsContent img {
  max-width: 1140px;
}

.newNext{
  margin: 30px 0;
  text-align: center;
}

</style>
