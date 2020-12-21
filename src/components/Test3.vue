<template>
  <div class="test">
    <div>
      Component nodes with v-for and object props:
    </div>
    <div>
      <button @click="run">Run</button>
    </div>
    <div>
      <RerenderObject v-for="i in n" :key="i" :test="{ i: { i: { i } } }" />
    </div>
  </div>
</template>

<script>
import RerenderObject from './RerenderObject'

export default {
  components: {
    RerenderObject
  },
  data () {
    return {
      n: 0
    }
  },
  methods: {
    run () {
      this.n++
    }
  }
}
</script>
