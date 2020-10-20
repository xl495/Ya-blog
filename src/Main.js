import api from './common/http.api';
import Post from './Post.js';
const Main = {
    component: {
    Post,
  },
  data() {
    return {
      message: '',
      data: {},
    };
  },
  created() {
    this.message = 'Hello Vue!!';
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await api.getPosts({ pageSize: 20 });
      this.data = data;
    },
  },
  template: `
  <ul class="image-wrap" >
  <li class="image-item" :style="{animationDelay: 50 * index + 'ms'}"  v-for="(item,index) in data.dataSet" :key="item.id">
    <img src="https://source.unsplash.com/random/1920x1080"  />
    </li>
  </ul>
  <Post />
  `,
};
export default Main;
