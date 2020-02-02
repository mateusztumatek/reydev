<template>
  <div>
    <div class="section vertial-align" id="technologies" ref="technologies">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>Technologie w których pracujemy</h1>
          </div>
          <div :style="{'--scale': scroll}" style="overflow: hidden" class="col-md-6 px-0">
            <div class="grow-elem"></div>
            <img src="~/assets/zarowka.png" class="w-100">

          </div>
        </div>
      </div>
    </div>
    <div class="section section-blue">

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Default from "../layouts/default";

export default {
  components: {
      Default,
    Logo
  },
    data:() => {return {
        scroll: 0
    }},
    mounted() {
      window.onscroll = () => {
          var elem_top = $('#technologies').offset().top;
          var window_top = $(window).scrollTop();
          (window_top >= elem_top + 200)? this.scroll = ((elem_top + 200) / window_top) : this.scroll = window_top/(elem_top + 200);
      }
    }
}
</script>

<style lang="scss">
  .grow-elem{
    position: absolute;
    left: 0%;
    bottom: 0%;
    transform-origin: bottom;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    transform: scale(var(--scale));
    background-color: yellow;
    z-index:  -1;
  }
</style>
