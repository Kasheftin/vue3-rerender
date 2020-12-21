<template>
  <div class="test">
    <div>
      Component nodes with v-for, numeric props and store:
    </div>
    <div>
      <button @click="run">Run</button>
    </div>
    <div>
      <RerenderNumberStore v-for="item in items" :key="item.id" :item="{ id: item.id, name: item.name }" />
    </div>
  </div>
</template>

<script>
import RerenderNumberStore from './RerenderNumberStore'

export default {
  components: {
    RerenderNumberStore
  },
  computed: {
    items () {
      return this.$store.state.items5
    }
  },
  methods: {
    run () {
      this.$store.commit('addItem5', { id: this.items.length, name: `Item ${this.items.length}` })
    }
  }
}
</script>
