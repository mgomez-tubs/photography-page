<template>
    <v-overlay z-index="0">
        <v-card class="d-flex pa-5">
            <v-container fill-height fluid>
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center">
                            <v-card class="ma-2 pa-5" tile max-width="20em" elevation="10">
                            <h1>¡Contáctame!</h1>
                            <br/>
                            <p>Calle Pablo Iglesias 68<br/>
                            12300 Tricio, La Rioja
                            <br/>
                            <p>
                                <v-icon class="ma-1">mdi-phone</v-icon><v-icon class="ma-1">mdi-whatsapp</v-icon> (+34) 62215365 
                            </p>
                            
                            <p>Contáctame también por mis redes sociales:<br/>
                                <!--Facebook-->
                                <v-btn small color="blue" fab><v-icon color="white">mdi-facebook</v-icon></v-btn>
                                <v-btn small color="blue" fab><v-icon color="white">mdi-twitter</v-icon></v-btn>
                                <v-btn small color="blue" fab><v-icon color="white">mdi-linkedin</v-icon></v-btn>
                            <br/>
                             

                            </p>

                            </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-overlay>
</template>