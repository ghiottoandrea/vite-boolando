<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: `App`,

  components: {
    AppHeader,
    AppMain,
    AppFooter

  }
}
</script>

<template>

<!-- Use the component -->
<AppHeader />

<AppMain />

<AppFooter />

</template>

<style></style>
