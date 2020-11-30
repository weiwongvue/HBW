<template>
  <div class="cTestForm">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="formTitle">
            <h2>2020年在线申报入户测评系统</h2>
          </div>
        </div>
        <div class="col-4">
          <div class="formInput">
            <input type="text" id="formName" value="" placeholder="请输入您的姓名" />
            <select name="age" id="formAge">
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
            </select>
            <select name="education" id="formEducation">
              <option value="">请选择您的学历</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
            </select>
            <select name="socialSecurity" id="formSocialSecurity">
              <option value="">请选择您的社保年限</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
              <option value="">请选择您的年龄</option>
            </select>
            <input type="text" id="formMobile" value="" placeholder="请输入您的手机号码" />
            <button type="button">立即获取测评结果&gt;&gt;</button>
            <p>您的评测结果将以短信形式通知!(由于通讯原因，或有延迟)请耐心等待。
            </p>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-7">
          <div class="formShow">
            <h4>目前已有568329人参与测试</h4>
            <div>

            </div>
            <ul class="formShowTitle">
              <li><span>姓名</span></li>
              <li><span>手机号码</span></li>
              <li><span>积分</span></li>
              <li><span>实时评测结果</span></li>
            </ul>
            <ul class="formList">
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>90</span><span>[协助入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>90</span><span>[协助入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
              <li><span>张*三</span><span>138****1234</span><span>100</span><span>[核准入户]</span></li>
            </ul>
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

.formTitle{
  margin-top: 50px;
}

.formTitle h2{
  font-weight: 700;
  text-align: center;
}

.formInput{
  margin-top: 30px;
}

.formInput input{
  width: 100%;
  height: 50px;
  margin-top: 25px;
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #787878;
}

.formInput select{
  width: 100%;
  height: 50px;
  margin-top: 25px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #787878;
  /*appearance: none; -webkit-appearance: none;*/
}

.formInput button{
  width: 100%;
  height: 50px;
  margin-top: 25px;
  border-radius: 5px;
  background-color: #314a7f;
  color: #ffffff;
  border: 0;
  font-size: 22px;
  line-height: 50px;
}

.formInput p{
  margin-top: 10px;
}

.formShow{
  margin-top: 60px;
}

.formShow h4{
  text-align: center;
}

.formShowTitle{
  height: 40px;
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #1070b8;
  font-size: 22px;
}

.formList{
  margin-top: 20px;
}

.formList li{
  /*display: flex;*/
  text-align: center;
  color: #166fb7;
  margin-top: 10px;
}

.formList li span{
  display: inline-block;
}

.formList li span:first-child{
  width: 132px;

}

.formList li span:nth-child(2){
  width: 176px;

}

.formList li span:nth-child(3){
  width: 132px;
}

.formList li span:last-child{
  color: #ad4261;
  width: 222px;
}

</style>
