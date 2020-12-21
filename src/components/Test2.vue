<template>
  <div class="test">
    <div>
      Component nodes with v-for and numeric props:
    </div>
    <div>
      <button @click="run">Run</button>
    </div>
    <div>
      <RerenderNumber v-for="i in n" :key="i" :i="i" />
    </div>
  </div>
</template>

<script>
import RerenderNumber from './RerenderNumber'

export default {
  components: {
    RerenderNumber
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
