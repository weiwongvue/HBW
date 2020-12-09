<template>
  <div class="cAboutUs">
    <div class="container about">
      <div class="row">
        <div class="col-12">
          <h2>关于我们</h2>
        </div>
        <div class="col-12">
          <img src="~static/about/about.png" alt="华邦" title="华邦">
          <p>深圳市华邦教育咨询有限公司(简称:“
            华邦教育”)是一家致力于成人高考、学历提升、深圳积分入户、职业技能提升的综合性教育机构。华邦教育自创办以来，一直从事成人教育行业，课程和服务范围广阔，在深圳拥有多家分校。从成人学历教育、技能提升，到与职业相关的就业服务，客户遍及全国各地，华邦本着以“诚信为本，服务至上”的经营理念，已经培训数万名学员，为学员构建个性化职业生涯美好蓝图。</p>
          <p>目前，华邦标准化的课程体系，已成为教育职业培训行业的模范，华邦教育获得三十多所大学授权，先后与湖南师范大学、广东第二师范学院、江西理工大学、湖南工商大学、湘潭大学、广州交通学院、广东南方职业学院、暨南大学等名校联合办学，勘学的目的是为了指导、培训广大考生参加全国成人高考考试，以吸取得正规大学的学籍后的学习，获得国家认可的毕业证。华邦教育学历教育核心资源于一身，旗下拥有网课产品、公开课、在线直播、考试题库、在线学习APP客户端等平台资源，为广东上班族人员提供优质的学历解决方案。</p>
        </div>
      </div>
    </div>
    <div class="purpose">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>我们的宗旨</h4>
          </div>
        </div>
        <ul class="row purposeUl">
          <li class="col">
            <div>
              <h5>学员至上</h5>
              <p>给客户提供高质量的课程和最满意的服务。</p>
            </div>
          </li>
          <li class="col">
            <div>
              <h5>学员至上</h5>
              <p>给客户提供高质量的课程和最满意的服务。</p>
            </div>
          </li>
          <li class="col">
            <div>
              <h5>学员至上</h5>
              <p>给客户提供高质量的课程和最满意的服务。</p>
            </div>
          </li>
          <li class="col">
            <div>
              <h5>学员至上</h5>
              <p>给客户提供高质量的课程和最满意的服务。</p>
            </div>
          </li>
          <li class="col">
            <div>
              <h5>学员至上</h5>
              <p>给客户提供高质量的课程和最满意的服务。</p>
            </div>
          </li>
        </ul>
        <div class="row">
          <div class="col-12">
            <div class="contactAbout">
              <a href="javascript:void(0);">立即咨询</a>
            </div>
          </div>
        </div>
      </div>
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

.about h2 {
  margin-top: 50px;
  text-align: center;
}

.about img {
  margin: 30px 0;
  width: 1140px;
}

.about p {
  text-indent: 2em;
  line-height: 30px;
}

.purpose {
  margin-top: 50px;
  width: 100%;
  min-width: 1140px;
  height: 500px;
  background-image: url("~static/about/about2.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
  color: #FFFFFF;
}

.purpose h4{
  text-align: center;
  margin-top: 50px;
}

.purpose h4::after {
  content: "";
  display: block;
  width: 50px;
  height: 5px;
  background-color: #FFFFFF;
  border-radius: 3px;
  margin: 10px auto;
}

.purposeUl{
  margin-top: 30px;
}

.purposeUl li{
  padding: 25px;
}

.purposeUl li>div{
  background-color: rgba(49,74,127,.5);
  height: 180px;
  padding: 15px;
  box-shadow: 0px 0px 10px #314A7F;
}

.purposeUl li>div h5{
  font-size: 22px;
  margin-top: 20px;
}

.purposeUl li>div p{
  margin-top: 20px;
}

.contactAbout a{
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;
  border: 1px solid #FFFFFF;
  margin-top: 40px;
}

</style>
