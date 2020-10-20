import api from './common/http.api';
const Post = {
  template: `
    <div class="post-mask">
        <div class="post">
            {{ message }}
        </div>
    <div>
  `,
  data() {
    return {
      message: '',
      data: {},
    };
  },
  created() {
    this.message = 'Hello Vue!!';
    // this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await api.getPosts({ pageSize: 20 });
      this.data = data;
    },
  },
};
export default Post;
