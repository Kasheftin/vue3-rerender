<template>
  <div class="test">
    <div>
      Component nodes with v-for, numeric id prop and store:
    </div>
    <div>
      <button @click="run">Run</button>
    </div>
    <div>
      <RerenderNumberStoreById v-for="item in items" :key="item.id" :item-id="item.id" />
    </div>
  </div>
</template>

<script>
import RerenderNumberStoreById from './RerenderNumberStoreById'

export default {
  components: {
    RerenderNumberStoreById
  },
  computed: {
    items () {
      return this.$store.state.items6
    }
  },
  methods: {
    run () {
      this.$store.commit('addItem6', { id: this.items.length, name: `Item ${this.items.length}` })
    }
  }
}
</script>
