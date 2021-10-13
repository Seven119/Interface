<template>
  <div>
    <normalNav></normalNav>
    <div class="person">

    </div>
  </div>
</template>

<script>
import normalNav from '../components/normalNav.vue'
export default {
  name: 'userIndex',
    components: {normalNav},
}
</script>

<style>
.person{
  width: 70%;
  height: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: auto;
}
</style>