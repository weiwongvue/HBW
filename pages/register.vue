<template>
  <div>
    <AHead></AHead>
    <Banner></Banner>
    <CTestForm></CTestForm>
    <DPlans></DPlans>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import Banner from "@/components/register/Banner"
import CTestForm from "@/components/register/CTestForm"
import DPlans from "@/components/register/DPlans"


export default {
  name:'register',
  components:{
    Banner,CTestForm,DPlans
  }
}
</script>

<style>

.container{
  min-width: 1140px;
}

</style>
