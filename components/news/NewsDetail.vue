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
        <div class="col-10">
          <div class="newsContent">
           <p v-for="item of news.content">
             {{item}}
           </p>
          </div>
        </div>
        <div class="col-2">
          <div class="qrcode">
            <h4>扫描二维码 添加微信</h4>
              <img src="~static/news/qrcode.jpg" alt="华邦" title="华邦">
            <h4>案例展示</h4>

            <img src="~static/news/tu1.jpg" alt="华邦" title="华邦">
              <img src="~static/news/tu2.jpg" alt="华邦" title="华邦">


          </div>
        </div>
      </div>
      <div class="row newNext">
        <div class="col-10">
          <nuxt-link v-if="prevNext.prevNews!=null" :to="{path:'/news/detail',query:{id:prevNext.prevNews.id}}">上一篇:{{prevNext.prevNews.title}}</nuxt-link>
          <span v-if="prevNext.prevNews!=null && prevNext.nextNews!=null">/</span>
          <nuxt-link v-if="prevNext.nextNews!=null" :to="{path:'/news/detail',query:{id:prevNext.nextNews.id}}">下一篇:{{prevNext.nextNews.title}}</nuxt-link>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNews,prevAndNext} from "~/api/news/news";
import {dateFormat} from "~/service/dateFormat";
import axios from "axios";

export default {
  name: 'newDetail',
  props:["newsContent"],
  data(){
    return {
      news: this.newsContent,
      prevNext:{},
      newsId: ''
    }
  },

  head() {
    return {
      title: this.news.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.news.keywords || '高空证培训,制冷工证考试,哪里考电工证,特种操作证办理,电工证办理,焊工证报考,年审换证'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.news.description || '深圳新联教育是一家专业的培训考证机构,并提供电工证办理与报考,焊工培训考证,高空证培训考证,制冷工证办理,特种操作证年审换证等培训学校,全国联网可查的正规有效证件,服务于全国各地,并在深圳打造了专业培训考证服务的培训学校!'
        }
      ],
    }
  },

  methods:{
    getNewsDetail(){
      window.scrollTo(0, 0);

      console.log(this.$route.query.id)
      const p = getNews({id: this.$route.query.id});
      p.then(res => {
        console.log(res)
        this.news = {}
        let {data, status} = res.data;
        if (200 === status) {
          this.news = data;
          this.news.createTime = dateFormat('YYYY-mm-dd HH:MM:SS', new Date(this.news.createTime));
          this.news.content = this.news.content.split('  ');
        }else {
          alert("加载新闻失败 请稍后再试");
        }
      });

      p.then(()=>{
        this.prevAndNext();
      })
    },
    prevAndNext() {
      const p = prevAndNext({typeId: this.news.typeId,beginCreateTime: this.news.createTime});
      p.then((res) => {
        let {data, status} = res.data;
        console.log(data);

        if (200 === status) {
          this.prevNext = data;
        }
      });
    }
  },

  created() {
    this.prevAndNext();
  },

  watch: {
    '$route'(to, from) { //监听路由是否变化
      if (to.query.id !== from.query.id) {
        console.log(to.query.id,from.query.id)
        this.getNewsDetail();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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

.newsContent{
  padding: 15px;
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

.qrcode{
  text-indent: 0;
  text-align: center;

  img{
    width: 100%;
    margin-top: 20px;
  }

  h4{
    margin-top: 20px;
  }

}
</style>
