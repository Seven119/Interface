<template>
  <div class="fish">
    <div class="bubble-1"></div>
    <div class="bubble-2"></div>
    <div class="bubble-3"></div>
    <div class="bubble-4"></div>
    <div class="bubble-5"></div>
    <div class="bubble-6"></div>
    <div class="bubble-7"></div>
    <div class="bubble-8"></div>
    <div class="bubble-9"></div>
    <div class="bubble-10"></div>

    <div class="container">
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
        <div class="polygon"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
@keyframes floating {
  to {
    transform: translate(-50%, -50%) translateY(30px);
  }
}

@keyframes bubbles {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-105vh);
  }
}

.fish{
  width: 100%;
  height: 100%;
  background-color: white
}

/* paopao */
.bubble-1 {
  width: 10px;
  height: 10px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 60%;
  animation: bubbles 15s linear infinite;
  z-index: -999;
}
.bubble-2 {
  width: 25px;
  height: 25px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 10%;
  z-index: -999;
  animation: bubbles 25s linear infinite;
}
.bubble-3 {
  width: 10px;
  height: 10px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 30%;
  animation: bubbles 15s linear infinite;
  z-index: -999;
}
.bubble-4 {
  z-index: 2;
  width: 10px;
  height: 10px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 50%;
  animation: bubbles 10s linear infinite;
  z-index: -999;
}
.bubble-5 {
  width: 15px;
  height: 15px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 70%;
  animation: bubbles 15s linear infinite;
  z-index: -999;
}
.bubble-6 {
  width: 20px;
  height: 20px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 20%;
  animation: bubbles 30s linear infinite;
  z-index: -999;
}
.bubble-7 {
  width: 25px;
  height: 25px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 35%;
  animation: bubbles 25s linear infinite;
  z-index: -999;
}
.bubble-8 {
  width: 20px;
  height: 20px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 85%;
  animation: bubbles 15s linear infinite;
  z-index: -999;
}
.bubble-9 {
  width: 20px;
  height: 20px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 40%;
  z-index: -999;
  animation: bubbles 20s linear infinite;
}
.bubble-10 {
  width: 20px;
  height: 20px;
  border: 1px solid #46A1DE;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 90%;
  z-index: -999;
  animation: bubbles 25s linear infinite;
}


/*  fish */
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  animation: floating 2s linear infinite alternate;
}

.polygon:nth-child(1) {
  position: absolute;
  top: 50px;
  left: 250px;
  background-color: #1e90ff;
  width: 120px;
  height: 60px;
  clip-path: polygon(0 0, 100% 60%, 60% 100%, 0 60%);
}
.polygon:nth-child(2) {
  position: absolute;
  top: 86px;
  left: 298px;
  background-color: #4aa3fc;
  width: 120px;
  height: 60px;
  clip-path: polygon(50% 100%, 100% 100%, 60% 0%, 20% 40%);
}
.polygon:nth-child(3) {
  clip-path: polygon(30% 100%, 100% 100%, 72% 40%, 15% 0);
  position: absolute;
  top: 86px;
  left: 230px;
  background-color: white;
  width: 130px;
  height: 60px;
}
.polygon:nth-child(4) {
  clip-path: polygon(20% 100%, 60% 60%, 60% 0, 0 60%);
  position: absolute;
  top: 50px;
  left: 173px;
  background-color: #85c2ff;
  width: 130px;
  height: 60px;
}
.polygon:nth-child(5) {
  clip-path: polygon(50% 0, 65% 100%, 10% 40%);
  position: absolute;
  top: 86px;
  left: 186px;
  background-color: #d2e6fa;
  width: 130px;
  height: 60px;
}
.polygon:nth-child(6) {
  clip-path: polygon(0% 90%, 44% 0%, 64% 50%, 41% 100%);
  position: absolute;
  top: 85px;
  left: 116px;
  background-color: #4aa3fc;
  width: 130px;
  height: 50px;
}
.polygon:nth-child(7) {
  clip-path: polygon(56% 96%, 100% 40%, 55% 0);
  position: absolute;
  top: 54px;
  left: 44px;
  background-color: #1e90ff;
  width: 130px;
  height: 78px;
}
.polygon:nth-child(8) {
  clip-path: polygon(95% 100%, 95% 50%, 30% 30%);
  position: absolute;
  top: -21.5px;
  left: -7px;
  background-color: #85c2ff;
  width: 130px;
  height: 152px;
}
.polygon:nth-child(9) {
  clip-path: polygon(100% 45%, 29% 0, 0 30%);
  position: absolute;
  top: 110px;
  left: 170px;
  background-color: #1e90ff;
  width: 100px;
  height: 80px;
}
.polygon:nth-child(10) {
  clip-path: polygon(50% 0, 0 95%, 80% 100%, 100% 5%);
  position: absolute;
  top: 128px;
  left: 62px;
  background-color: #72b8fd;
  width: 110px;
  height: 110px;
}
.polygon:nth-child(11) {
  clip-path: polygon(20% 0, 82% 7%, 80% 40%, 20% 100%);
  position: absolute;
  top: 230px;
  left: 34.5px;
  background-color: #1e90ff;
  width: 140px;
  height: 110px;
}
.polygon:nth-child(12) {
  clip-path: polygon(15% 60%, 75% 0%, 67% 60%);
  position: absolute;
  top: 274px;
  left: 40px;
  background-color: #5aa9f8;
  width: 142px;
  height: 111px;
}
.polygon:nth-child(13) {
  clip-path: polygon(0 0, 48% 0, 100% 100%, 70% 100%);
  position: absolute;
  top: 340px;
  left: 62px;
  background-color: #2f97ff;
  width: 140px;
  height: 110px;
}
.polygon:nth-child(14) {
  clip-path: polygon(20% 0, 55% 0, 55% 35%, 0% 100%);
  position: absolute;
  top: 448px;
  left: 135px;
  background-color: #1e90ff;
  width: 120px;
  height: 90px;
}
.polygon:nth-child(15) {
  clip-path: polygon(10% 40%, 90% 40%, 20% 85%, 0% 65%);
  position: absolute;
  top: 390px;
  left: 200px;
  background-color: #1e90ff;
  width: 130px;
  height: 90px;
}
.polygon:nth-child(16) {
  clip-path: polygon(35% 0, 65% 78%, 55% 100%, 0% 0);
  position: absolute;
  top: 340px;
  left: 129px;
  background-color: #44a2ff;
  width: 130px;
  height: 110px;
}
.polygon:nth-child(17) {
  clip-path: polygon(40% 0%, 85% 0, 75% 100%, 12% 100%, 35% 35%);
  position: absolute;
  top: 238px;
  left: 120px;
  background-color: white;
  width: 73px;
  height: 103px;
}
.polygon:nth-child(18) {
  clip-path: polygon(25% 0, 81% 12%, 32% 100%, 14% 100%);
  position: absolute;
  top: 133px;
  left: 125px;
  background-color: #1e90ff;
  width: 178px;
  height: 105px;
}
.polygon:nth-child(19) {
  clip-path: polygon(15% 0, 100% 0, 28% 32%);
  position: absolute;
  top: 145px;
  left: 241px;
  background-color: #d5eaff;
  width: 178px;
  height: 105px;
}
.polygon:nth-child(21) {
  clip-path: polygon(5% 51%, 70% 7%, 89% 22%, 0% 100%);
  position: absolute;
  top: 131.5px;
  left: 174px;
  background-color: #bcdcfc;
  width: 135px;
  height: 210px;
}
.polygon:nth-child(22) {
  clip-path: polygon(0% 35%, 35% 0%, 100% 100%, 25% 80%);
  position: absolute;
  top: 207px;
  left: 179px;
  background-color: #1e90ff;
  width: 90px;
  height: 90px;
}
.polygon:nth-child(20) {
  clip-path: polygon(0% 38%, 54% 0%, 86% 100%);
  position: absolute;
  top: 185px;
  left: 230px;
  background-color: #1e90ff;
  width: 90px;
  height: 90px;
}



</style>