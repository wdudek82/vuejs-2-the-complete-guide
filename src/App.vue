<template>
  <div id="app" class="container">
    <Header />
    <Servers />
    <Footer />
  </div>
</template>

<script>

import Header from './components/ui/Header';
import Servers from './components/servers/Servers';
import Footer from './components/ui/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Servers,
    Footer,
  },
};
</script>

<style>
</style>
