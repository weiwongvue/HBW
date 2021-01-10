<template>
  <div>
    {{ title}}

    <AHead></AHead>
<!--    <NewsList></NewsList>-->

<!--    <Footer></Footer>-->

  </div>
</template>

<script lang="ts">
import AHead from '~/components/home/AHead.vue';
// import NewsList from "~/components/news/NewsList.vue"
// import Footer from '~/components/home/Footer.vue';
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class newsLoading extends Vue{
  title:string = 'a';


  setTitle(title:string):void{
    this.title = 'aaaaa';
  }

  getTitle():string{
    return this.title;
  }

  create(){
    this.title = 'aaaaa';
  }


}
</script>

<style>

.container {
  min-width: 1140px;
}

</style>
