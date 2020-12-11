<template>
  <div>
    <AHead></AHead>
    <BannerEqu></BannerEqu>
    <COccupation></COccupation>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerEqu from "~/components/equipment/BannerEqu"
import COccupation from "@/components/equipment/COccupation"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerEqu, COccupation, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
