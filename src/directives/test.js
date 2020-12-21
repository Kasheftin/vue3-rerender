export default {
  mounted () {
    console.log('v-test.mounted')
  },
  beforeUnmount () {
    console.log('v-test.beforeUnmount')
  },
  updated () {
    console.log('v-test.updated')
  }
}
