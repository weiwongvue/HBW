<template>
  <div class="footer">
    <div class="containerFooter">
      <div class="containerFooterTop">
        <div class="container">
          <ul class="row footerNav">
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
      <div class="containerFooterButton">
        <div class="container">
          <div class="row footerAddress">
            <div class="col-6">
              <p>地址：深圳市龙华区民治街道民治社区民治大道222东边商业大厦603</p>
            </div>
            <div class="col-6">
              <p>服务热线：0755-23774425</p>
            </div>
            <div class="col-12">
              <p>友情链接： XX公司、XX公司、XX公司、XX公司、XX公司、XX公司</p>
            </div>
            <div class="col-12">
              <p>Copyright©2014-2020 深圳市华邦教育咨询有限公司 版权所有 粤ICP备20061099号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="server">
      <a target="_blank" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1064985177&amp;site=qq&amp;menu=yes">
        <img src="~static/home/server.png" alt="华邦" title="华邦">
        <span href="javascript:void(0);">在线咨询</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
/** {*/
/*  margin: 0 auto;*/
/*  padding: 0;*/
/*}*/

a {
  color: #ffffff;
}

ul{
  padding: 0;
}

li {
  list-style: none;
}

.footer{
  min-width: 1140px;
}

.containerFooter{
  background-color: #232323;
}

.containerFooterTop{
  background-color: #343434;
}

.footerNav{
  background-color: #343434;
  text-align: center;
  color: #FFFFFF;
}

.footerNav a{
  display: block;
  height: 40px;
  line-height: 40px;
  color: #FFFFFF;
  position: relative;
}

.footerNav li::after{
  content: "";
  display: inline-block;
  height: 15px;
  border-right: 1px solid #FFFFFF;
  margin-bottom: 4px;
  position: absolute;
  right: 0;
  top: 12.5px;
}

.footerNav li:last-child::after{
  display: none;
}

.footerAddress p{
  color: #FFFFFF;
}

.server a{
  display: block;
  width: 150px;
  height: 180px;
  padding: 20px;
  border: 1px solid #314A7F;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 0 5px 5px 0;
}

.server:hover span{
  background-color: #314A7F;
  color: #FFFFFF;
}

.server img{
  width: 100%;
}

.server span{
  display: block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  color: #314A7F;
  text-align: center;
  margin: 20px auto;
  font-size: 14px;
  border: 1px solid #314A7F;
}

</style>
