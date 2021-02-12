<template>
    <v-overlay z-index="0">
        <v-expand-transition>
            <v-card class="d-flex pa-5" color="yellow lighten-4" v-show="show">
                <v-container fill-height fluid>
                    <v-row align="center" justify="center">
                        <v-col align="center" justify="center">
                                <v-card class="pa-5" tile max-width="20em" elevation="10">
                                <h1>¡Contáctame!</h1>
                                <br/>
                                <p>Calle Pablo Iglesias 68<br/>
                                12300 Tricio, La Rioja
                                <br/>
                                <p>
                                    <v-icon class="ma-1">mdi-phone</v-icon><v-icon class="ma-1">mdi-whatsapp</v-icon> (+34) 62215365 
                                </p>
                                <p>Contáctame también por mis redes sociales:<p/>
                                <p>
                                    <!--Facebook-->
                                    <v-btn class="ma-1" small color="blue" fab><v-icon color="white">mdi-facebook</v-icon></v-btn>
                                    <v-btn class="ma-1" small color="blue" fab><v-icon color="white">mdi-twitter</v-icon></v-btn>
                                    <v-btn class="ma-1" small color="blue" fab><v-icon color="white">mdi-linkedin</v-icon></v-btn>
                                </p>
                                </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-expand-transition>
    </v-overlay>
</template>

<script>
export default {
    data(){
        return{
            show: false
        }
    },
    mounted(){
        this.show=true
    },
    methods:{
        closeOverlay(){
            this.$UIEvents.emit("pageSelected","home")
        },
    }

}
</script>