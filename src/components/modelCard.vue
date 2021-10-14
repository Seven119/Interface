<template>
  <!-- 模型卡片 -->
  <!-- <div id="modelCard">
      <div id="modelCardImg" @click="goModelsInfo()">
          <img src="../assets/rightNav/箭头_向右两次.svg" style="height:200px; width:300px">
      </div>
      <div id="modelCardInfo">
        <div id="modelName" @click="goModelsInfo()">模型12345
        <div id="modelCardIcon">
            <i class="el-icon-delete" id="delete" style="color: #409EFF"></i>
            <i class="el-icon-share" style="color: #409EFF"></i>
        </div>
        </div>
      </div>
  </div> -->
  <div id="modelCard" >
    <div class="row" @click="goModelsInfo()">
      <div class="col-1-of-4">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>

            <!-- <div class="card__datails">
              <ul>
                <li>3 day tour</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty:easy</li>
              </ul>
            </div> -->
          </div>
          <div class="card__side card__side--back card__side--back-1">
           <div class="card__datails">
              <ul>
                <li>5 day tour</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty:hard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2">
              &nbsp;
            </div>

            <!-- <div class="card__datails">
              <ul>
                <li>7 day tour</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty:medium</li>
              </ul>
            </div> -->
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <!-- <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$497</p>
              </div>
              <a href="#popup" class="btn btn--white">Book now!</a>
            </div> -->
            <div class="card__datails">
              <ul>
                <li>5 day tour</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty:hard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--3">
              &nbsp;
            </div>

            
          </div>
          <div class="card__side card__side--back card__side--back-3">
              <div class="card__datails">
              <ul>
                <li>5 day tour</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty:hard</li>
              </ul>
            </div>
            <!-- <div class="card__cta">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$897</p>
              </div>
              <a href="#popup" class="btn btn--white">Book now!</a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goModelsInfo() {
      this.$router.push({ path: "../modelsInfo" });
    }
  }
};
</script>

<style>
#modelCard {
  height:100%;
 
  
}
/* #modelCardImg {
  background-color: #409eff;
}
#modelName {
  margin-left: 15px;
  margin-top: 8px;
}
#modelCardIcon {
  float: right;
  font-size: 22px;
  margin-right: 15px;
  margin-top: -3px;
}
#delete {
  margin-right: 10px;
}  */
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
}
.card__side {
  height: 23rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(148, 148, 148, 0.15);
}
.card__side--front {
  background-color: #fff;
}
.card__side--back {
  
  transform: rotateY(180deg);
}
/* .card__side--back-1 {
  background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
}
.card__side--back-2 {
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
}
.card__side--back-3 {
  background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
} */
.card:hover .card__side--front {
  transform: rotateY(-180deg);
}
.card:hover .card__side--back {
  transform: rotateY(0);
}
.card__picture {
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.card__picture--1 {
  background-image: 
    url(../assets/card/1.png);
}
.card__picture--2 {
  background-image: 
    url(../assets/card/2.png);
}
.card__picture--3 {
  background-image: 
    url(../assets/card/3.jpg);
}
.card__datails {
  padding: 1rem;
}
.card__datails ul {
  list-style: none;
  width: 80%;
  margin: 0 auto;
}
.card__datails ul li {
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
}
.card__datails ul li:not(:last-child) {
  border-bottom: 1px solid #eee; 
}
.card__cta {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
}
.card__price-box {
  text-align: center;
  color: #fff;
  margin-bottom: 8rem;
}
.card__price-only {
  font-size: 1.4rem;
  text-transform: uppercase;
}
.card__price-value {
  font-size: 6rem;
  font-weight: 100;
}
.row {
  max-width: 114rem;
  width: 90%;
  margin: 0 auto;
}
.row:not(:last-child) {
  margin-bottom: 8rem;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row [class^="col-"] {
  float: left;
}
.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}

.row .col-1-of-4 {
  width: calc((100% - 6rem * 3) / 4);
}

</style>
