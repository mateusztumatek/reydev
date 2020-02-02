import vue from 'vue';
const mixins = {
  data:() => {
    return{
      loading: false
    }
  },
  methods:{
    startLoading(){
      this.loading = true;
    },
    stopLoading(){
      this.loading = false;
    }
  }
}
vue.mixin(mixins);

