<template>
  <div class="section section-blue" :style="styles">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="{'navbar-fixed' : is_fixed, 'navbar-fade' : is_fade}">
      <div class="container">
        <a class="logo" href="#">ReyDev</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="item in header.top_menu" v-if="header && header.top_menu">
              <router-link class="nav-link" :to="item.url">{{item.title}}</router-link>
            </li>
           <!-- <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default {
    computed:{
        header(){
            return this.$store.getters.header
        },
        styles(){
            if(process.client){
                var h = window.innerHeight;
                return {
                    '--window-height': h + 'px'
                }
            }
        }
    },
    data:() => {return{
        is_fixed: false,
        is_fade: false,
    }},
    mounted() {
        this.$store.dispatch('setHeader');
        window.onscroll = () => {
            if($(window).scrollTop() > 250){
                this.is_fixed = true;
                this.is_fade = false;
            }
            if(this.is_fixed && $(window).scrollTop() > 100 && $(window).scrollTop() < 250){
                this.is_fade = true;
                setTimeout(() => {
                    this.is_fixed = false;
                }, 290)
            }
        }
        this.styles;
    }
  }
</script>
