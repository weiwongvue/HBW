<template>
  <div>
    <AHead></AHead>
    <BannerEle></BannerEle>
    <CEleStudent></CEleStudent>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerEle from "~/components/electrician/BannerEle"
import CEleStudent from "@/components/electrician/CEleStudent"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerEle, CEleStudent, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
