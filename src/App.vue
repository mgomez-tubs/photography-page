<template>
  <v-app
    style="background:none"
  >
    <v-main>
      <Background app/>
      <HelloWorld/>
      <SocialButton/>
    </v-main>
      <NavigationToolbar app/>
  </v-app>
</template>

<script>
import HelloWorld         from './components/HelloWorld';
import Background         from './components/Background';
import SocialButton       from './components/SocialButton';
import NavigationToolbar  from './components/NavigationToolbar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Background,
    SocialButton,
    NavigationToolbar
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