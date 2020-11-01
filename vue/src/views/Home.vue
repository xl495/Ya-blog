<template>
  <ya-header :category="categoryData" />
  <div class="home">
    <a-row type="flex" v-if="postsData.data">
      <a-col class="gutter-row card" :span="6" :style="{backgroundImage: 'url(https://source.unsplash.com/random/'+ post.cid +')' }" v-for="post in postsData.data.dataSet" :key="post.cid" >
        <div class="gutter-box">
          col-6
        </div>
      </a-col>
    </a-row>
  </div>
  <ya-footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import yaHeader from "@/components/Ya-Header.vue"; // @ is an alias to /src
import yaFooter from "@/components/Ya-Footer.vue";
import api from "../common/http.api";

@Options({
  components: {
    yaHeader,
    yaFooter
  },
})
export default class Home extends Vue {

  postsData:[] = [];
  categoryData:[] = [];

  created(){
    this.fetchCategory()
    this.fetchPost()
  }

  async fetchPost(){
    const postData : any = await api.getPosts({pageSize: 20});
    postData.data.dataSet = [...postData.data.dataSet,...postData.data.dataSet]
    this.postsData = postData;
  }

  async fetchCategory(){
     const categoryData : any = await api.getCategory()
      this.categoryData = categoryData.data;
      console.log(this.categoryData);
    
  }
}
</script>