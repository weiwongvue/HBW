<template>
  <div class="newsList">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="newsTitle">
            <h2>新闻中心</h2>
          </div>
        </div>
      </div>
      <ul class="row newsTypeUl">
        <li v-for="(item, index) of titleArr" class="col-2">
          <div class="newsType">
            <a @click="changeNewsType(index+1)" :class="{selected: page.typeId === index+1}" href="javascript:void(0);">{{ item }}</a>
          </div>
        </li>
      </ul>
      <div class="row">
        <div class="col-12 HBNewsContent">
          <div class="HBNewsContentImg">
            <div class="HBNewsContentImgLeft">
              <p>深圳成人学历教育指定报考中心</p>
            </div>
            <div class="HBNewsContentImgRight">
              <div class="HBNewsContentImgRight1">
                <p>深圳成人学历教育指定报考中心</p>
              </div>
              <div class="HBNewsContentImgRight2">
                <p>深圳成人学历教育指定报考中心</p>
              </div>
            </div>
          </div>
          <ul class="HBNewsList">
            <li class="HBNewsListLi" v-for="item of news">
              <nuxt-link class="" :to="{path:'/news/detail',query:{id:item.id}}">
                <div class="HBNewsList1">
                  <img src="~static/home/hbimg4.png" alt="华邦" title="华邦">
                </div>
                <div class="HBNewsList2">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.content }}</p>
                  <span>发布时间：{{ item.createTime }}</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
          <div class="HBNewsListIndex">
            <a @click="changePage('first',page.pageNum)" href="javascript:void(0);">首页</a>
            <a @click="changePage('prev',page.pageNum)" href="javascript:void(0);">上一页</a>
            <a v-for="item of page.navigatepageNums" @click="changePage('navigate',item)"
               :class="{pageNum: item===page.pageNum}"
               href="javascript:void(0);">{{ item }}</a>
            <a @click="changePage('next',page.pageNum,page.pages)"
               href="javascript:void(0);">下一页</a>
            <a @click="changePage('last',page.pageNum,page.pages)" href="javascript:void(0);">尾页</a>
            <span>共{{ page.pages }}页</span>
            <span>到第</span>
            <input v-model="goTo" type="text" class="page" name="" id="" value=""/>
            <span>页</span>
            <button @click="changePage('goTo',page.pageNum,page.pages,goTo)" type="button">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNewsList, firstPage, lastPage, prevPage, nextPage, goToPage, toPage} from '~/api/news/news.js'
import {dateFormat} from "~/service/dateFormat";

export default {
  name: 'news',
  data() {
    return {
      news: [],
      page: {
        typeId: 1,
        pageNum: 1,
        pageSize: '8',
      },
      goTo: '',
      titleArr: ['学历教育','深圳入户','会计证书','建筑上岗证书','特种操作证','特种设备作业',],
    }
  },

  methods: {
    changeNewsType(type) {
      this.page.typeId = type;
      this.getNewsList();
    },

    changePage(pageName, pageNum, pages, goTo) {
      if ('first' === pageName) {
        this.page.pageNum = firstPage(pageNum)
      } else if ('last' === pageName) {
        this.page.pageNum = lastPage(pageNum, pages)
      } else if ('prev' === pageName) {
        this.page.pageNum = prevPage(pageNum)
      } else if ('next' === pageName) {
        this.page.pageNum = nextPage(pageNum, pages)
      } else if ('goTo' === pageName) {
        this.page.pageNum = goToPage(pageNum, pages, goTo)
      } else if ('navigate' === pageName) {
        this.page.pageNum = toPage(pageNum)
      }
      window.scrollTo(0, 0);
      this.getNewsList();

    },

    // 新闻列表数据
    getNewsList() {
      const p = getNewsList(this.page);
      p.then(res => {
        console.log(res);
        let {data, status} = res.data;
        if (200 === status) {
          for (let index in data.page) {
            data.page[index].createTime = dateFormat('YYYY-mm-dd HH:MM:SS', new Date(data.page[index].createTime));
          }
          let navNums = data.PageInfo.navigatepageNums;
          if (this.page.pageNum > 3) {
            for (let index in navNums) {
              if (navNums[0] <= 3 || navNums[0] + 1 < this.page.pageNum) {
                navNums.shift();
              }
            }
          } else {
            for (let index in navNums) {
              if (navNums[navNums.length - 1] > 5) {
                navNums.pop();
              }
            }
          }

          // 赋值新闻数据
          data.PageInfo.typeId = this.page.typeId;
          this.page = data.PageInfo;

          this.news = data.page;
        }
      }).catch(err => {
        // 错误信息
        console.log(err);
      })
    }
  },

  created() {
    // 创建时加载
    this.getNewsList();
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
  text-decoration: none;
}

li {
  list-style: none;
}

.newsTitle h2 {
  text-align: center;
  margin-top: 50px;
}

.newsTypeUl {
  margin-top: 40px;
}

.newsTypeUl li {
  padding: 10px;
}

.newsType a {
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  color: #080000;
  border: 1px solid #D3D3D3;
}

.newsTypeUl{
  .selected{
    background-color: #314A7F;
    color: #FFFFFF;
  }

  a:hover{
    background-color: #314A7F;
    color: #FFFFFF;
  }

}

.HBNewsContentImg {
  margin-top: 30px;
  height: 350px;
}

.HBNewsContentImgLeft {
  width: 70%;
  height: 350px;
  background-image: url("~static/home/hbimg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  float: left;
  position: relative;
}

.HBNewsContentImg p {
  height: 35px;
  width: 100%;
  line-height: 35px;
  position: absolute;
  bottom: 0;
  color: #FFFFFF;
  background-color: rgba(52, 52, 54, .5);
  margin-bottom: 0;
  padding-left: 10px;
}

.HBNewsContentImgRight {
  margin-left: 1%;
  height: 350px;
  width: 29%;
  float: left;
}

.HBNewsContentImgRight p {
  height: 25px;
  line-height: 25px;
  font-size: 12px;
}

.HBNewsContentImgRight1 {
  height: 48.5%;
  background-image: url("~static/home/hbimg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
}

.HBNewsContentImgRight2 {
  margin-top: 4%;
  height: 48.5%;
  background-image: url("~static/home/hbimg3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
}

.HBNewsList {
}

.HBNewsListLi {
  margin-top: 30px;
  width: 100%;
  height: 190px;
  border-bottom: 1px solid #DFDFDF;

  a {
    color: #000000;
  }
}

.HBNewsList1 {
  float: left;
  width: 25%;
  height: 160px;
}

.HBNewsList1 img {
  width: 100%;
  height: 100%;
}

.HBNewsList2 {
  float: left;
  width: 75%;
  height: 160px;
  position: relative;
  padding: 5px 10px 0;
}

.HBNewsList2 p {
  margin-top: 10px;
  font-size: 14px;
  height: 84px;
  overflow: hidden;
}

.HBNewsList2 span {
  font-size: 14px;
  position: absolute;
  bottom: 0;
}

.HBNewsListIndex {
  text-align: center;
  margin: 30px 0;

  * {
    margin-right: 10px;
    color: #010000;
    font-size: 14px;
  }

  input {
    padding: 5px;
  }

  .pageNum {
    background-color: #314A7F;
    color: #FFFFFF;
  }

  a {
    display: inline-block;
    height: 35px;
    line-height: 35px;
    padding: 0px 15px;
    border: 1px solid #DFDFDF;

    &:hover {
      background-color: #314A7F;
      color: #FFFFFF;
    }
  }

  .page {
    height: 35px;
    width: 39px;
    border: 1px solid #DFDFDF;
  }

  button {
    height: 35px;
    padding: 5px 15px;
    background-color: #FFFFFF;
    border: 1px solid #DFDFDF;

    &:hover {
      background-color: #314A7F;
      color: #FFFFFF;
    }
  }
}

</style>
