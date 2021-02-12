<template>
    <div>
        <div v-show="showCloseGalleryBtn" style="position:fixed; top:0px; right:0px;">
            <v-btn class="ma-2" small fab color="red" @click="closeGallery()">
                <v-icon smallcolor="white" class="ma-2">mdi-close</v-icon>
            </v-btn>
        </div>
    <v-layout>
        <v-row >
            <v-card
                class="d-inline-flex pa-2 my-3 justify-center align-center delay" 
                :class="activeToolbarClass"
                tile
            >
                <!--Navigation Mode-->
                <template>
                    <span>
                    <span
                    class="text-center text-body-1 mx-5 justify-center"
                    style="min-width: 20em;"
                    >
                    GERALDO VALDÉZ FOTOGRAFÍA
                    </span>
                    <br v-show="isSmallScreen">
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
                    Portafolio
                    </v-btn>
                    <v-btn
                    @click="$UIEvents.emit('pageSelected','contact')"
                    small
                    plain
                    depressed
                    class="mx-1"
                    >
                    ¡Contáctame!
                    </v-btn>
                    </span>
                </template>

            </v-card>
        </v-row>
    </v-layout>
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
            this.activeToolbarClass="gallery-mode"
            this.showCloseGalleryBtn = true;
        },
        closeGallery(){
            this.galleryMode=false
            this.activeToolbarClass="navigation-mode"
            this.showCloseGalleryBtn = false;
        }
    },
    computed:{
        isSmallScreen(){
            if(this.$vuetify.breakpoint.name=="xs"){
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
.delay{
    transition-property: opacity;
    transition-duration: 1s;
}

.navigation-mode{
    position: fixed; 
    bottom:0px;
    width: 70em;
    left:50%;
    transform: translate(-50%,0);
    opacity: 100;
}

.gallery-mode{
    position: fixed; 
    bottom:0px;
    width: 70em;
    left:50%;
    transform: translate(-50%,0);
    opacity: 0;
}

</style>