<template>
  <div class="aHead">
    <div class="container containerHeader">
      <div class="row row1">
        <div class="col-sm-6 col-6">
          <div class="row1_logo">
            <div class="row1_title">
              <h1>华邦教育</h1>
              <span>学历教育 人才落户</span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-6">
          <div class="row1_map">
            <a target="_blank" rel="nofollow" href="http://edu.huabedu.com/">
              华邦课堂
            </a>
            <a target="_blank" rel="nofollow" href="http://edu.huabedu.com/">
              资源中心
            </a>
<!--            <a target="_blank" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1064985177&amp;site=qq&amp;menu=yes">-->
<!--              网站地图-->
<!--            </a>-->
            <a target="_blank" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1064985177&amp;site=qq&amp;menu=yes">
              联系我们
            </a>
          </div>
        </div>
      </div>
      <ul class="row nav_head">
        <li class="col"><nuxt-link to="/">首页</nuxt-link></li>
        <li class="col"><nuxt-link to="/education">学历教育</nuxt-link></li>
        <li class="col"><nuxt-link to="/register">深圳入户</nuxt-link></li>
        <li class="col"><nuxt-link to="/accounting">职业资格证书</nuxt-link></li>
        <li class="col"><nuxt-link to="/engineer">建筑上岗证书</nuxt-link></li>
        <li class="col"><nuxt-link to="/equipment">特种操作证</nuxt-link></li>
        <li class="col"><nuxt-link to="/electrician">特种设备作业</nuxt-link></li>
        <li class="col"><nuxt-link to="/news">新闻中心</nuxt-link></li>
        <li class="col"><nuxt-link to="/about">关于我们</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000000;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  min-width: 1140px;
}

.containerHeader{
  padding-bottom: 20px;
}

.row1 {
  padding-top: 10px;
}

.row1_logo {
  height: 60px;
  background-image: url("~static/home/logo.jpg");
  background-size: 60px;
  background-repeat: no-repeat;
}

.row1_title {
  margin-left: 60px;
  color: #314A7F;
  padding-left: 13px;
}

.row1_title h1 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 0;
}

.row1_title span {
  font-size: 12px;
}

.row1_title span::before {
  content: "";
  display: inline-block;
  width: 15px;
  border-top: 1px solid #314A7F;
  margin-bottom: 4px;
}

.row1_title span::after {
  content: "";
  display: inline-block;
  width: 15px;
  border-top: 1px solid #314A7F;
  margin-bottom: 4px;
}

.row1_map {
  text-align: right;
  margin-top: 30px;
  transform: translate(0, -50%);
}

.row1_map a {
  display: inline-block;
  width: 100px;
  height: 18px;
  line-height: 15px;
  text-align: center;
  border-right: 1px solid #314A7F;
}

.row1_map a:last-child {
  border-right: 0px;
}

.nav_head {
  text-align: center;
}

.nav_head a {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

</style>
