<template>
  <div>
    <AHead></AHead>
    <BannerAbout></BannerAbout>
    <CAboutUs></CAboutUs>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerAbout from "~/components/about/BannerAbout"
import CAboutUs from "@/components/about/CAboutUs"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerAbout, CAboutUs, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
