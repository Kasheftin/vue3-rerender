<template>
  <div>
    <div>RerenderNumber: {{ i }}</div>
    <div v-test="log2">{{ log() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    i: Number
  },
  methods: {
    log (i) {
      console.log('RerenderNumber log', i)
    },
    log2 (i) {
      console.log('RerenderNumber log2', i)
    }
  }
}
</script>
