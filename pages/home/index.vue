<template>
  <div>
    <AHead></AHead>
<!--    <NewsList></NewsList>-->

    <Footer></Footer>
  </div>
</template>

<script>
import AHead from '~/components/home/AHead';
import NewsList from "~/components/news/NewsList"
import Footer from '~/components/home/Footer';

export default {
  name: 'register',
  components: {
    AHead, NewsList, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
