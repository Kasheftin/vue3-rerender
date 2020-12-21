<template>
  <div class="tests">
    <Test1 />
    <Test2 />
    <Test3 />
    <Test4 />
    <Test5 />
    <Test6 />
  </div>
</template>

<script>
import Test1 from './components/Test1.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'
import Test4 from './components/Test4.vue'
import Test5 from './components/Test5.vue'
import Test6 from './components/Test6.vue'

export default {
  name: 'App',
  components: {
    Test1,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6
  }
}
</script>

<style>
.tests {
  margin: 0 auto;
  width: 500px;
}
.test {
  margin: 20px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
