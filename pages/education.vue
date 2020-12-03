<template>
  <div>
    <AHead></AHead>
    <Banner></Banner>
    <CExam></CExam>
    <DSpecialties></DSpecialties>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from "@/components/home/AHead";
import Banner from "@/components/education/Banner";
import CExam from "@/components/education/CExam";
import DSpecialties from "@/components/education/DSpecialties";
import Footer from "@/components/home/Footer";


export default {
  components: {Banner, CExam, DSpecialties, AHead, Footer}
}
</script>

<style>

</style>
