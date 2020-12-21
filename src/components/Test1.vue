<template>
  <div class="test">
    <div>
      Plain div nodes with v-for:
    </div>
    <div>
      <button @click="run">Run</button>
    </div>
    <div>
      <div v-for="i in n" :key="i">
        <div>{{ i }}</div>
        <div v-test="log2">{{ log(i) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: 0
    }
  },
  methods: {
    run () {
      this.n++
    },
    log (i) {
      console.log('log', i)
    },
    log2 (i) {
      console.log('log2', i)
    }
  }
}
</script>
