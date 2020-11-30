<template>
  <div class="banner">
    <div class="bannerShow">
      <img src="~static/register/banner.png" alt="华邦" title="华邦">
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
}

a {
  color: #ffffff;
}

li {
  list-style: none;
}

.banner{
  margin-top: 10px;
  min-width: 1140px;
}

.bannerShow{
  position: relative;
}

.bannerShow img{
  width: 100%;
}

.bannerShow a{
  display: block;
  width: 240px;
  height: 50px;
  letter-spacing: 3px;
  background-color: #1B98F5;
  line-height: 50px;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.bannerShow a:nth-child(3){
  background-color: #FA9C3B;
  transform: translate(-50%,100%);
}


</style>
