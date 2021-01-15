<template>
  <div><h1>ore is the goat</h1>{{count}}
    {{double}}
  </div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue'
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  setup () {
    const state = reactive({
      count: 500,
      double: computed(() => state.count * 2)
    })
    return toRefs(state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
