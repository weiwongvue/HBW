<template>
  <div>
    <AHead></AHead>
    <Banner></Banner>
    <CAccountCourse></CAccountCourse>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import Banner from "@/components/accounting/Banner"
import CAccountCourse from "@/components/accounting/CAccountCourse"


export default {
  name:'register',
  components:{
    Banner,CAccountCourse
  }
}
</script>

<style>

.container{
  min-width: 1140px;
}

</style>
