<template>
  <div class="userIndex">
      <normalNav></normalNav>
      <el-button type="primary" class="creatModel" @click="creatModel()">创建模型</el-button>
      <el-select v-model="value" placeholder="请选择" class="selectDynamic">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      
      <!-- <div v-for="(item,index) in list" :key="item.key" class="card">
        <FlipCard :key="item.key" :value="item" ::key="index" class="modelCard" ></FlipCard>
      </div> -->
      
        <rightNav></rightNav>

        <div class="content">
        
          <a class="card" v-for="item in frontMes" :key="item.id">
          <div class="front" :style="{'background-image':'url('+item.loc+')'}">
            <div>
              <p>{{item.detail}}</p>
            </div>
          </div>
           <div class="back">
              <div>
                <p>{{item.value}}</p>
                <p>{{item.word}}</p>
                <button class="button">Click Here</button>
                <div id="modelCardIcon">
                <i class="el-icon-delete" id="delete" @click="goRecycleBin()"></i>
                  <i class="el-icon-share"></i>
              </div>
              </div>
          </div>
          </a>

          <!-- <a class="card" href="#!">
            <div class="front" style="background-image: url(assets/card/559.jpg);">
              <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                <button class="button">Click Here</button>
              </div>
            </div></a> -->
            
        </div>
        <!-- <FlipCard></FlipCard> -->
        
      <!-- <modelCard></modelCard> -->
      <pagination></pagination>
    
      
  </div>
</template>

<script>
import normalNav from '../../components/normalNav';
import rightNav from '../../components/rightNav.vue';
import modelCard from '../../components/modelCard.vue';
import Pagination from '../../components/pagination.vue';
export default {
    name: 'myModels',
    components: {normalNav, rightNav, modelCard, Pagination,},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '训练'
        }, {
          value: '选项2',
          label: '未训练'
        }],
        value: '',
        //卡片正面信息
        frontMes:[
          {
            id:'1',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/559.jpg')
          },
          {
            id:'2',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/560.jpg')
          },
          {
            id:'3',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/562.jpg')
          },
          {
            id:'4',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/563.jpg')
          },
          {
            id:'5',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/564.jpg')
          },
          {
            id:'6',
            detail:'Lorem ipsum dolor sit amet consectetur adipisi.',
            value:'Consectetur adipisicing elit. Possimus, praesentium?',
            word:'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            loc:require('../../assets/card/567.jpg')
          }
        ],
        
      }
    },
    methods: {
      creatModel(){
        this.$router.push({path:'/creatModels'})
      },
      goRecycleBin(){
        this.$router.push({path:'/userIndex/recycleBin'})
      }
    },
    
}
</script>

<style>
.creatModel{
  /* float: left; */
  margin-top: 50px;
  margin-left: 400px;
  font-size: 20px;
  padding: 25px 40px;
}
.selectDynamic{
  margin-left: 150px;
}
.el-input__inner{
  border: 1px solid #409EFF;
}
.modelCard{
  margin-top: 100px;
}


*, *:before, *:after {
  box-sizing: border-box;
}

html {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
  font-family: "Nunito Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #ecf0f9;
  background-attachment: fixed;
}

.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  z-index: 0;
}

.heading {
  width: 100%;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: .1ch;
  line-height: 1;
  padding-bottom: .5em;
  margin-bottom: 1rem;
  position: relative;
}
.heading:after {
  display: block;
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  bottom: 0;
}

.description {
  width: 100%;
  margin-top: 0;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.card {
  color: inherit;
  cursor: pointer;
  width: calc(33% - 2rem);
  min-width: calc(33% - 2rem);
  height: 400px;
  min-height: 400px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}
@media screen and (max-width: 800px) {
  .card {
    width: calc(50% - 2rem);
  }
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  opacity: .25;
  z-index: -1;
}
.card:hover .front {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: .5em 1em;
  border-radius: 100px;
  font: inherit;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:before {
  transition: 300ms ease;
  position: absolute;
  display: block;
  content: '';
  transform: translateZ(-40px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 100px;
  left: 10px;
  top: 16px;
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.button:hover {
  transform: translateZ(55px);
}
.button:hover:before {
  transform: translateZ(-55px);
}
.button:active {
  transform: translateZ(20px);
}
.button:active:before {
  transform: translateZ(-20px);
  top: 12px;

}
#modelCardIcon {
  float: right;
  height: 30px;
  margin-top: 20px;
  width:100%;
}
#modelCardIcon i{
  font-size: 30px;
  padding: 10px;
  float: right;
  color: #409EFF;
}
</style>