<template>
  <div>
    <AHead></AHead>
    <BannerEng></BannerEng>
    <Construction></Construction>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerEng from "~/components/engineer/BannerEng"
import Construction from "@/components/engineer/Construction"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerEng, Construction, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
