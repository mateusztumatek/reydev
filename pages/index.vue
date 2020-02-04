<template>
  <div>
    <banner :data="banner"></banner>
    <div class="section vertial-align" id="technologies" ref="technologies">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-lg-6" style="overflow: visible">
            <h1>Technologie w których pracuję</h1>
            <div class="row" style="overflow: visible;">
              <div class="col-sm-6 p-3" v-for="(tech, index) in technologies">
                <div class="my-card" :class="{'active-card': index == activeTechIndex}" @click="activeTechIndex = index">
                  <img class="w-100" :src="tech.image">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-6 vertial-align">
            <transition-group name="fade" mode="out-in">
              <div v-if="activeTechIndex == index" v-for="(tech, index) in technologies" :key="index">
                <h2>{{tech.title}}</h2>
                <p class="mt-3">{{tech.description}}</p>
              </div>
            </transition-group>
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
  asyncData(context){

  },
  computed:{

  },
    data:() => {return {
      activeTechIndex: 0,
        technologies:[{image: '/vue.png', title: 'Vue', description: 'To przede wszystkim biblioteka JavaScript, która pozwala tworzyć proste aplikacje webowe oparte o Model-View View Model (MVVM) i składających się z komponentów. Bibliotekę tę wyróżnia wiele intuicyjnych dodatków i funkcji, które są ogromnym wsparciem dla software developerów.'},
          {image: '/vue.png', title: 'Laravel', description: 'To przede wszystkim biblioteka JavaScript, która pozwala tworzyć proste aplikacje webowe oparte o Model-View View Model (MVVM) i składających się z komponentów. Bibliotekę tę wyróżnia wiele intuicyjnych dodatków i funkcji, które są ogromnym wsparciem dla software developerów.'},
          {image: '/vue.png', title: 'MySql', description: 'To przede wszystkim biblioteka JavaScript, która pozwala tworzyć proste aplikacje webowe oparte o Model-View View Model (MVVM) i składających się z komponentów. Bibliotekę tę wyróżnia wiele intuicyjnych dodatków i funkcji, które są ogromnym wsparciem dla software developerów.'},
          {image: '/vue.png', title: 'Javascript', description: 'To przede wszystkim biblioteka JavaScript, która pozwala tworzyć proste aplikacje webowe oparte o Model-View View Model (MVVM) i składających się z komponentów. Bibliotekę tę wyróżnia wiele intuicyjnych dodatków i funkcji, które są ogromnym wsparciem dla software developerów.'},],
        banner: {title: 'Aplikacje internetowe', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,  opis', link: '/technologie'}
    }},

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
