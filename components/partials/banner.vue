<template>
    <div class="section" style="padding-top: 30vh; min-height: 80vh" :style="styles">
        <div class="h-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h1 class="header">{{data.title}}</h1>
                        <p class="white--text my-4">{{data.description}}</p>
                        <nuxt-link v-if="data.link" :to="data.link" class="my-button">Zobacz więcej</nuxt-link>
                    </div>
                    <div class="col-md-7">
                        <img style="margin-top: -20vh" class="w-100" :src="(data.image)? data.image : '/first.png'">
                    </div>
                </div>
            </div>

            <div style="position: absolute; left: 0px; top: 0px; width: 100%; z-index: -2">
                <svg style="top: 0px; height: 100vh" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 844"><defs><style>.cls-my{fill:url(#Gradient_bez_nazwy_20);}</style><linearGradient id="Gradient_bez_nazwy_20" x1="25.29" y1="678.52" x2="1863.96" y2="93.92" gradientUnits="userSpaceOnUse"><stop offset="0.01" stop-color="#134da0"/><stop offset="0.08" stop-color="#134a96"/><stop offset="0.32" stop-color="#113f78"/><stop offset="0.55" stop-color="#113862"/><stop offset="0.77" stop-color="#103355"/><stop offset="0.98" stop-color="#103251"/></linearGradient></defs><title>Zasób 4</title><g id="Warstwa_2" data-name="Warstwa 2"><g id="Warstwa_1-2" data-name="Warstwa 1"><path class="cls-my" d="M419,678.51c499,43,737,225.72,1196,145.28,132.93-23.3,231.72-43.78,305-61.12V0H0V707.1C96.3,679.47,231.84,662.4,419,678.51Z"/></g></g></svg>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{data: Object},
        computed:{
            styles(){
                if(process.client){
                    var h = window.innerHeight;
                    return {
                        '--window-height': h + 'px'
                    }
                }
            }
        }
    }
</script>