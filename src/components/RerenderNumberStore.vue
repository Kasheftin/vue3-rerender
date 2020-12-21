<template>
  <div>
    <div>RerenderNumberStore: {{ item.id }}</div>
    <div>{{ item.name }}</div>
    <div v-test="log2">{{ log() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
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
