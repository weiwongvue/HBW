<template>
  <div>
    <AHead></AHead>
    <Banner></Banner>
    <CAccountCourse></CAccountCourse>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import Banner from "@/components/accounting/Banner"
import CAccountCourse from "@/components/accounting/CAccountCourse"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, Banner, CAccountCourse, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
