<template>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="formName">
            <input type="text" id="formName" value="" placeholder="请输入您的姓名" />
          </div>
        </div>
        <div class="col-6">
          <div class="formName">
            <input type="text" id="formContact" value="" placeholder="请输入您的联系方式" />
          </div>
        </div>
        <div class="col-6">
          <div class="formName">
            <input type="text" id="formClass" value="" placeholder="请输入您想要培训的课程" />
          </div>
        </div>
        <div class="col-6">
          <div class="formName">
            <input type="text" id="formTime" value="" placeholder="请输入您理想的上课时间" />
          </div>
        </div>
        <div class="col-12">
          <div class="formName formQuestion">
            <input type="text" id="formIssue" value="" placeholder="请输入您的问题或建议" />
          </div>
        </div>
        <div class="col-12">
          <div class="formName formCommit">
            <button type="button">提交留言</button>
          </div>
        </div>
      </div>
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

li {
  list-style: none;
}

.form {
  margin-top: 50px;
  width: 100%;
  height: 600px;
  background-image: url("~static/home/form.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding-top: 50px;
  min-width: 1140px;
}

.formName input {
  width: 100%;
  height: 80px;
  background-color: transparent;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  outline: none;
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
  font-size: 20px;
}

.form input::-webkit-input-placeholder {
  color: #FFFFFF;
}

.form input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #FFFFFF;
}

.form input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #FFFFFF;
}

.form input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #FFFFFF;
}

.formQuestion input{
  height: 160px;
}

.formCommit{
  text-align: center;
}

.formCommit button{
  height: 35px;
  line-height: 24px;
  padding: 5px 20px;
  background-color: #FFFFFF;
  border: 0px solid #DFDFDF;
  margin-top: 50px;
  font-weight: 600;
  font-size: 20px;
}

</style>
