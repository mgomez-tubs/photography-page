<template>
  <v-app
    style="background:none"
  >
    <v-main>
      <Background/>
      <HelloWorld/>
      <SocialButton/>
      <v-row
        style="position: fixed; bottom:0px; left:50%; transform: translate(-50%,0)">
        <v-card
          class="d-inline-flex pa-2 ma-8 justify-center align-center" 
          tile
        >
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
        </v-card>
      </v-row>
      
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Background from './components/Background';
import SocialButton from './components/SocialButton';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Background,
    SocialButton
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  html { 
    overflow-y: auto !important;
    font-size: 12px;
    }
</style>