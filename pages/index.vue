<template>
  <div>
    <AHead></AHead>
    <BRotation></BRotation>
    <COnlineSignUp></COnlineSignUp>
    <DSchool></DSchool>
    <EHBNews></EHBNews>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>

<script>
import AHead from '~/components/home/AHead';
import BRotation from '~/components/home/BRotation';
import COnlineSignUp from '~/components/home/COnlineSignUp';
import DSchool from '~/components/home/DSchool';
import EHBNews from '~/components/home/EHBNews';
import Form from '~/components/home/Form';
import Footer from '~/components/home/Footer';



export default {
  name: 'aHead',
  components: {AHead, BRotation, COnlineSignUp, DSchool, EHBNews, Form, Footer}
}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
