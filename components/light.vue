<template>
    <div id="light" :style="{'--scale': scroll}" style="overflow: hidden" class="col-md-6 px-0">
        <div class="grow-elem"></div>
        <img src="~/assets/zarowka.png" class="w-100">
    </div>
</template>
<script>
    export default {
        data:() => {return{
            scroll: 0,
        }},
        mounted() {
            setTimeout(() => {
                window.onscroll = () => {
                    var elem_top = $('#light').offset().top;
                    var window_top = $(window).scrollTop();
                    (window_top >= elem_top + 200)? this.scroll = ((elem_top + 200) / window_top) : this.scroll = window_top/(elem_top + 200);
                }
            }, 30)
        }
    }
</script>