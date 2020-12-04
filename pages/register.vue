<template>
  <div>
    <AHead></AHead>
    <BannerReg></BannerReg>
    <CTestForm></CTestForm>
    <DPlans></DPlans>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from '~/components/home/AHead';
import BannerReg from "~/components/register/BannerReg"
import CTestForm from "@/components/register/CTestForm"
import DPlans from "@/components/register/DPlans"
import Footer from '~/components/home/Footer';


export default {
  name: 'register',
  components: {
    AHead, BannerReg, CTestForm, DPlans, Footer
  }
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
