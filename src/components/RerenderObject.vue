<template>
  <div>
    <div>RerenderObject: {{ i }}</div>
    <div v-test="log2">{{ log() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    test: Object
  },
  computed: {
    i () {
      return this.test.i.i
    }
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
