<template>
  <div>
    <AHead></AHead>
    <BannerAcc></BannerAcc>
    <CAccountCourse></CAccountCourse>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerAcc from "~/components/accounting/BannerAcc"
import CAccountCourse from "@/components/accounting/CAccountCourse"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerAcc, CAccountCourse, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
