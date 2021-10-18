<template>
  <div class="modelsInfo">
    <normalNav></normalNav>
    <rightNav></rightNav>
    <div class="all">
      <div class="basicInfo">
        <div class="modelName">模型名称</div>
        <div class="team">
          <h1>团队</h1>
          <div class="Leader">
            <h2>创建者</h2>
            <h3>1234</h3>
          </div>
          <div class="Member">
            <h2>成员</h2>
            <h3>123/456/789</h3>
          </div>
        </div>
        <div class="date">
          <h1>修改日期</h1>
          <h2>123/24/25</h2>
        </div>
        <div class="state">
          <h1>训练状态</h1>
          <h2>未完成</h2>
        </div>
      </div>
      <div class="main">
        <section id="content">
          <ul>
            <li id="page_0">
              <div class="inner">
                <div class="menu">
                  <ul id="menu" class="reset">
                    <li id="nav1" style="top: -239.4px;left: 0px;z-index: 49;">
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav1.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav1_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav7"
                      style="top: -149.263px; left: -187.17px; z-index: 49;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav7.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav7_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav6"
                      style="top: 53.2715px; left: -233.398px; z-index: 49;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav6.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav6_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav5"
                      style="top: 215.692px; left: -103.872px; z-index: 49;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav5.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav5_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav4"
                      style="top: 215.692px; left: 103.872px; z-index: 50;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav4.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav4_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav3"
                      style="top: 53.2715px; left: 233.398px; z-index: 49;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav3.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav3_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                    <li
                      id="nav2"
                      style="top: -149.263px; left: 187.17px; z-index: 49;"
                    >
                      <a href="#page_0"
                        ><img
                          src="../assets/Info/nav2.png"
                          alt=""
                          class="img"
                          style="opacity: 1;"/><img
                          src="../assets/Info/nav2_active.png"
                          alt=""
                          class="img_act"
                          style="opacity: 0; visibility: hidden;"
                      /></a>
                    </li>
                  </ul>
                </div>
                <div class="menu_box">
                  <div class="images">
                    <span class="nav1"></span>
                    <span class="nav2"></span>
                    <span class="nav3"></span>
                    <span class="nav4"></span>
                    <span class="nav5"></span>
                    <span class="nav6"></span>
                    <span class="nav7"></span>
                    <span class="nav8"></span>
                    <span class="nav9"></span>
                  </div>
                  <div class="tittles">
                    <div class="nav1">
                      <h2>Menu 1 &nbsp;</h2>
                    </div>
                    <div class="nav2">
                      <h2>Menu 2 &nbsp;</h2>
                    </div>
                    <div class="nav3">
                      <h2>Menu 3</h2>
                    </div>
                    <div class="nav4">
                      <h2>Menu 4 &nbsp;</h2>
                    </div>
                    <div class="nav5">
                      <h2>Menu 5 &nbsp;</h2>
                    </div>
                    <div class="nav6">
                      <h2>Menu 6 &nbsp;</h2>
                    </div>
                    <div class="nav7">
                      <h2>Menu 7 &nbsp;</h2>
                    </div>
                    <div class="nav8">
                      <h2>Privacy &nbsp;</h2>
                    </div>
                    <div class="nav9">
                      <h2>Read more &nbsp;</h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <!--content end-->
      </div>
    </div>
  </div>
</template>

<script>

import "../../static/js/jquery.min";
// import '../../static/js/jquery.transform.min'
import "../../static/js/script";
import "../../static/js/mobilyblocks";
import "../../static/js/superfish";
import "../../static/js/atooltip.jquery";
import "../../static/js/pages";

import normalNav from "../components/normalNav";
import rightNav from "../components/rightNav";

export default {
  name: "modelsInfo",
  components: { normalNav, rightNav }
};
</script>

<style>
.modelsInfo{
  width: 100%;
  height: 100%;
}
.all {
  display: flex;
  height: 100%;
}
.main {
  /* padding-top: 200px;*/
  margin-right: 400px;
  margin-top: 200px;
  float: right;
  margin-left: 300px;
}
.modelName{
  font-size: 80px;
  font-weight:bolder;
}
h1{
  font-size: 45px;
  font-weight:bolder;
}
h2{
  font-size: 30px;
  font-weight:bold;
}
h3{
  font-size: 25px;
  font-weight: normal;
}
.basicInfo {
  width: 1000px;
  height: 500px;
  float: left;
  margin-top: 150px;
  margin-left: -250%;
}
ol,
ul {
  list-style: none;
}
.menu_box {
  width: 252px;
  height: 252px;
  position: absolute;
  top: -48px;
  left: -44px;
}
.menu_box .images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.images span {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.images .nav1 {
  background: url("../assets/Info/nav1_hover.png") 0 0 no-repeat;
}
.images .nav2 {
  background: url("../assets/Info/nav2_hover.png") 0 0 no-repeat;
  transform: rotate(50deg);
}
.images .nav3 {
  background: url("../assets/Info/nav3_hover.png") 0 0 no-repeat;
  transform: rotate(100deg);
}
.images .nav4 {
  background: url("../assets/Info/nav4_hover.png") 0 0 no-repeat;
  transform: rotate(155deg);
}
.images .nav5 {
  background: url("../assets/Info/nav5_hover.png") 0 0 no-repeat;
  transform: rotate(-155deg);
}
.images .nav6 {
  background: url("../assets/Info/nav6_hover.png") 0 0 no-repeat;
  transform: rotate(-100deg);
}
.images .nav7 {
  background: url("../assets/Info/nav7_hover.png") 0 0 no-repeat;
  transform: rotate(-50deg);
}
.images .nav8 {
  background: url("../assets/Info/nav8.png") 0 0 no-repeat;
}
.images .nav9 {
  background: url("../assets/Info/nav1_hover.png") 0 0 no-repeat;
}

#menu {
  display: block;
  width: 252px;
  height: 252px;
}
#menu > li {
}
#menu > li > a {
  position: relative;
  display: block;
  width: 168px;
  height: 168px;
}
#menu > li > a img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#menu > li > a:hover {
}

ul.reset li {
  position: absolute;
}

.inner {
  width: 252px;
  height: 252px;
  position: relative;
  margin-top: 255px;
  margin-left: 387px;
}
.trigger {
  width: 0px !important;
  height: 0px !important;
  font-size: 0;
  line-height: 0;
}

.menu {
  z-index: 1;
  position: relative;
}
.menu_box {
  z-index: 99;
}

.tittles {
  text-align: center;
  line-height: 18px;
  position: relative;
}
.tittles > div {
  width: 150px;
  padding-left: 51px;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 88px;
}
.tittles .nav1 {
  padding-top: 112px;
}
.tittles .nav2 {
  padding-top: 112px;
}
.tittles .nav2:hover {
}
.tittles .nav3 {
  padding-top: 112px;
}
.tittles .nav4 {
  padding-top: 112px;
}
.tittles .nav4 .addit_menu {
}
.tittles .nav5,
.tittles .nav6,
.tittles .nav7,
.tittles .nav8,
.tittles .nav9 {
  padding-top: 112px;
}

.addit_menu {
  width: 120px;
  margin-left: -10px;
}
.addit_menu > li {
  margin-top: -1px;
  background: url("../assets/Info/menu_line.gif") 10px bottom no-repeat;
  height: 25px;
  position: relative;
}
.addit_menu > li > a {
  line-height: 25px;
  display: block;
  text-decoration: none;
  border-radius: 14px;
  -moz-border-radius: 14px;
  -webkit-border-radius: 14px;
  padding: 0 10px;
  zoom: 1;
  position: relative;
}
.addit_menu > li > a > span {
  display: block;
}
.addit_menu > .end {
  background: none;
}
.addit_menu > .with_ul > a {
  border-radius: 14px 0 0 14px;
  -moz-border-radius: 14px 0 0 14px;
  -webkit-border-radius: 14px 0 0 14px;
}
.addit_menu > .with_ul > a > span {
  background: url("../assets/Info/menu_arrow.gif") right 9px no-repeat;
}
.addit_menu > li:hover > a {
  background: #0d0c0c;
}

.addit_menu .ul_1,
.addit_menu .ul_2 {
  position: absolute;
  top: 0;
  left: 114px;
  width: 147px;
  padding-right: 1px;
}
.addit_menu .ul_1 > li,
.addit_menu .ul_2 > li {
  padding-bottom: 1px;
  position: relative;
  background: #0d0c0c;
  padding: 0 12px;
  zoom: 1;
}
.addit_menu .ul_1 > li > a,
.addit_menu .ul_2 > li > a {
  text-decoration: none;
  display: block;
  line-height: 26px;
  background: #0d0c0c;
}
.addit_menu .ul_1 > li > a span,
.addit_menu .ul_2 > li > a span {
  display: block;
}
.addit_menu .ul_1 > li > a span span,
.addit_menu .ul_2 > li > a span span {
  padding: 0 10px;
}
.addit_menu .ul_1 > li:hover > a,
.addit_menu .ul_2 > li:hover > a {
  color: #fff;
  background: #2c2c2c;
}
.addit_menu .ul_1 > li:hover > a > span,
.addit_menu .ul_2 > li:hover > a > span {
  background: url("../assets/Info/menu_bg_top.png") 0 0 no-repeat;
}
.addit_menu .ul_1 > li:hover > a > span span,
.addit_menu .ul_2 > li:hover > a > span span {
  background: url("../assets/Info/menu_bg_top.png") top right no-repeat;
}
.addit_menu .ul_1 > li:hover,
.addit_menu .ul_2 > li:hover {
}
.addit_menu .ul_1 > .top,
.addit_menu .ul_2 > .top {
  background: url("../assets/Info/menu_bg_top.png") 0 0 no-repeat;
  width: 148px;
  height: 17px;
  font-size: 0;
  line-height: 0;
}
.addit_menu .ul_1 > .bot,
.addit_menu .ul_2 > .bot {
  background: url("../assets/Info/bg_menu_bot.png") 0 0 no-repeat;
  width: 148px;
  height: 17px;
  font-size: 0;
  line-height: 0;
}

.addit_menu .ul_2 {
  left: 148px;
  top: -17px;
}
.addit_menu .ul_2 > .top {
  background: url("../assets/Info/menu_bg_top2.png") 0 0 no-repeat;
}
</style>
