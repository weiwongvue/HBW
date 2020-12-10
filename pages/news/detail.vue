<template>
  <div>
    <AHead></AHead>
    <NewsDetail></NewsDetail>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import NewsDetail from "~/components/news/NewsDetail"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, NewsDetail, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
