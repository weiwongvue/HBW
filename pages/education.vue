<template>
  <div>
    <AHead></AHead>
    <BannerEdu></BannerEdu>
    <CExam></CExam>
    <DSpecialties></DSpecialties>

    <Footer></Footer>
  </div>
</template>

<script lang="js">
import AHead from "@/components/home/AHead";
import BannerEdu from "~/components/education/BannerEdu";
import CExam from "@/components/education/CExam";
import DSpecialties from "@/components/education/DSpecialties";
import Footer from "@/components/home/Footer";


export default {
  components: {AHead,BannerEdu, CExam, DSpecialties, Footer}
}
</script>

<style>

</style>
