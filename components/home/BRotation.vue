<template>
  <div class="bRotation">
    <div id="banner" class="banner">
      <div id="loop" class="loop">
        <div class="loopContent">
          <img src="~static/home/banner.png" alt="华邦" title="华邦">
        </div>
        <div class="loopContent">
          <img src="~static/home/cooperation1.png" alt="华邦" title="华邦">
        </div>
        <div class="loopContent">
          <img src="~static/home/cooperation2.png" alt="华邦" title="华邦">
        </div>
        <div class="loopContent">
          <img src="~static/home/cooperation3.png" alt="华邦" title="华邦">
        </div>
        <div class="loopContent">
          <img src="~static/home/cooperation4.png" alt="华邦" title="华邦">
        </div>
        <div class="loopContent">
          <img src="~static/home/cooperation5.png" alt="华邦" title="华邦">
        </div>
      </div>
      <span id="prevFont" class="iconfont prevFont">&#xe685;</span>
      <span id="nextFont" class="iconfont nextFont">&#xe687;</span>
    </div>
    <div class="container containerLoop">
      <ul id="controlBtn" class="row rowLoop">
        <li class="current col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
        <li class="col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
        <li class="col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
        <li class="col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
        <li class="col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
        <li class="col">
          <div><img src="~static/home/loop1.png" alt="华邦" title="华邦"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {move, linearAnimation, slowAnimation, loop} from "~/service/animation"

export default {
  name: 'rotation',

  methods:{
    aB(){

    }

  },

  mounted() {
    // move();
    // let a = tools.ele('banner');
    // console.log(a)

    // linearAnimation('banner','banner',50, 800);
    // slowAnimation();

    let obj = {
      marginLeft : 1800,
      height: 900
    }

    for (const key in obj) {
      console.log(key)
      console.log(obj[key])

    }

    loop('loop');
  }
}

</script>

<style lang="scss" scoped>
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

.banner {
  min-width: 1140px;
  position: relative;

  .loop{
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;

    .loopContent{
      width: 100%;
      height:100%;
      position: absolute;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .prevFont {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c0c0;
  }

  .nextFont {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c0c0;
  }
}

.containerLoop {
  padding-top: 30px;
  padding-bottom: 30px;
}

.rowLoop img {
  width: 100%;
}

@font-face {
  font-family: 'iconfont';
  src: url('~static/fonts/iconfont.eot');
  src: url('~static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('~static/fonts/iconfont.woff2') format('woff2'),
  url('~static/fonts/iconfont.woff') format('woff'),
  url('~static/fonts/iconfont.ttf') format('truetype'),
  url('~static/fonts/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 50px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}

.rowLoop li{
  margin: 0 15px 0;
  cursor: pointer;
}

.current{
  border: 2px solid yellow;
}
</style>
