<template>
    <v-carousel style="position:fixed; top: 0px; z-index: 0" height="100%">
        <v-carousel-item v-for="foto in fotos_arr" :key="foto.id">
            <h1 class="text-center indigo--text">{{foto.title}}</h1>
            <v-img :src="foto.src"/>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data(){
        return{
            fotos_arr: [
                {
                    id:1,
                    src: require('../assets/foto1.jpg'),
                    title: 'A beautiful mountain, Spain 2002',
                },
                {   
                    id:2,
                    src: require('../assets/foto2.jpg'),
                    title: 'A beautiful landscape, Germany 2010',
                },
                {
                    id:3,
                    src: require('../assets/foto3.jpg'),
                    title: 'A beautiful nature, Amazonas 1995',
                }
            ]
        }
    }
}
</script>