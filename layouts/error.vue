<template>
  <div class="error">
    <img src="~static/home/404.png" alt="华邦" title="华邦">
  </div>
</template>

<script>

export default {
  name:'error',

  mounted() {
    setTimeout(function(){
      location.href = '/'
    }, 3000);
  }
}
</script>

<style>
.error img{
  width: 100%;
}

</style>
