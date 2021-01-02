<template>
  <div>
    <AHead></AHead>
    <NewsDetail :news-content="newsContent"></NewsDetail>
    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import NewsDetail from "~/components/news/NewsDetail"
import Footer from '~/components/home/Footer';
import axios from "axios";
import {getNews} from "~/api/news/news";
import {dateFormat} from "~/service/dateFormat";

export default {
  name: 'register',
  components: {
    AHead, NewsDetail, Footer
  },

  async asyncData(content) {
    const {data} = await getNews({id: content.route.query.id});
    let news = data.data;
    // console.log(news)
    news.createTime = dateFormat('YYYY-mm-dd HH:MM:SS', new Date(news.createTime));
    news.content = news.content.split('  ');
    return {newsContent: news}
  },
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
