<template>
  <div>
    <AHead></AHead>
    <Banner></Banner>
    <Construction></Construction>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import Banner from "@/components/engineer/Banner"
import Construction from "@/components/engineer/Construction "
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, Banner, Construction, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
