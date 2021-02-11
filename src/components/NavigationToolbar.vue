<template>
    <v-row>
        <v-card
            class="d-inline-flex pa-2 ma-8 justify-center align-center delay" 
            :class="activeToolbarClass"
            tile
        >
        <!--Navigation Mode-->
        <template v-if="!galleryMode">
            <div
            class="text-center text-body-1 mx-5"
            style="min-width: 20em;"
            >
            GERALDO VALDÉZ FOTOGRAFÍA
            </div>
            <v-btn
            @click="$UIEvents.emit('pageSelected','knowme')"
            small
            plain
            depressed
            class="mx-1"
            >
            Acerca de mí
            </v-btn>
            <v-btn
            @click="$UIEvents.emit('pageSelected','gallery')"
            small
            plain
            depressed
            class="mx-1"
            >
            Galería
            </v-btn>
            <v-btn
            @click="$UIEvents.emit('pageSelected','contact')"
            small
            plain
            depressed
            class="mx-1 text-center"
            >
            ¡Contáctame!
            </v-btn>
        </template>

        <!--Toolbar mode-->
        <template v-else>
            Test
        </template>

        </v-card>
    </v-row>


</template>

<script>
export default {
    data(){
        return{
            galleryMode: false,
            activeToolbarClass: "navigation-mode"
        }
    },
    mounted(){
        this.$UIEvents.on("pageSelected",id=>{
            if(id=="gallery"){
                this.galleryMode=true
                this.activeToolbarClass="gallery-mode"
            }
        })
    }
}
</script>

<style scoped>
.delay{
    transition-property: width;
    transition-duration: 2s;
}

.navigation-mode{
    position: fixed; 
    bottom:0px;
    left:50%;
    width: 70em;
    transform: translate(-50%,0);
}

.gallery-mode{
    position: fixed; 
    bottom:0px;
    left:50%;
    width: 10em;
    transform: translate(-50%,0);
}
</style>