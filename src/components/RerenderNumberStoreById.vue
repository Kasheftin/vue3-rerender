<template>
  <div>
    <div>RerenderNumberStoreDestructed: {{ item.id }}</div>
    <div>{{ item.name }}</div>
    <div v-test="log2">{{ log() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    itemId: Number
  },
  computed: {
    item () {
      return this.$store.state.items6.find(item => item.id === this.itemId)
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
