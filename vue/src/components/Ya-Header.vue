<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <MessageOutlined />
      </div>
      <div class="category">
        <a-button size="large" class="category-item" v-for="(item,index) in category" :key="index" type="link" :ghost="true">
         {{ item.name }}
        </a-button>
      </div>
    </div>
   
  </div>
</template>

<script lang="ts">
import { MessageOutlined } from '@ant-design/icons-vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components:{
    MessageOutlined
  },
  props: {
    category: Array,
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string

  current = [0]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
