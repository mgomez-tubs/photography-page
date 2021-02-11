<template>
    <div>
        <div v-show="showCloseGalleryBtn" style="position:fixed; top:0px; right:0px;">
            <v-btn class="ma-2" small fab color="red" @click="closeGallery()">
                <v-icon smallcolor="white" class="ma-2">mdi-close</v-icon>
            </v-btn>
        </div>
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
                <v-btn fab small color="blue">
                    <v-icon>mdi-skip-backward</v-icon>
                </v-btn>
                <v-btn fab small color="blue">
                    <v-icon >mdi-play</v-icon>
                </v-btn>
                <v-btn fab small color="blue"> 
                    <v-icon >mdi-skip-forward</v-icon>
                </v-btn>
            </template>
        </v-card>
    </v-row>
    </div>

</template>

<script>
export default {
    data(){
        return{
            galleryMode: false,
            activeToolbarClass: "navigation-mode",
            showCloseGalleryBtn: false
        }
    },
    mounted(){
        this.$UIEvents.on("pageSelected",id=>{
            if(id=="gallery"){
                this.openGallery();
            }
        })
    },
    methods:{
        openGallery(){
            this.galleryMode=true
            this.activeToolbarClass="gallery-mode rounded-pill"
            this.showCloseGalleryBtn = true;
        },
        closeGallery(){
            this.galleryMode=false
            this.activeToolbarClass="navigation-mode"
            this.showCloseGalleryBtn = false;
        }
    }
}
</script>

<style scoped>
.delay{
    transition-property: width;
    transition-duration: 1s;
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
    opacity: 0.5;
    bottom:0px;
    left:50%;
    width: 15em;
    transform: translate(-50%,0);
}

.gallery-mode:hover{
    opacity:1
}
</style>