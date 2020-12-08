<template>
  <div>
    <AHead></AHead>
    <BannerAbout></BannerAbout>
    <CEleStudent></CEleStudent>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerAbout from "~/components/about/BannerAbout"
import CEleStudent from "@/components/electrician/CEleStudent"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerAbout, CEleStudent, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
