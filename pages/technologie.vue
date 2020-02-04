<template>
    <div>
        <banner :data="banner"></banner>

        <div class="container">
            <h1>Siemanko</h1>
        </div>
    </div>
</template>
<script>
    export default {
        data:() => {return {
            banner: {title: 'Siemanko', description: 'Elo', image: '/first.png'}
        }}
    }
</script>