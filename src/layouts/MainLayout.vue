<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

         <q-toolbar-title class="text-weight-bold">
           <span class="gt-sm">{{ $route.name }}</span>
           <q-icon 
             class="q-pa-md lt-md header-icon"
             name="fab fa-twitter"
             size="sm"
             color="primary" 
       />
          
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="283" bordered>
      <q-icon 
      class="q-pa-md"
       name="fab fa-twitter"
       size="lg"
       color="primary" 
       />
    <q-list>
      <q-item 
      to="/"
      clickable
      exact
       v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="home" size="md" />
        </q-item-section>

        <q-item-section class="text-h6">Home</q-item-section>
      </q-item>
      <q-item 
      to="/about"
      clickable
      exact
       v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="help" size="md" />
        </q-item-section>

        <q-item-section class="text-h6">About</q-item-section>
      </q-item>

       <q-item 
      to="/notification"
      clickable
      exact
       v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fas fa-bell" size="md" />
        </q-item-section>

        <q-item-section class="text-h6">Notifications</q-item-section>
      </q-item>

       <q-item 
      to="/message"
      clickable
      exact
       v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fas fa-envelope" size="md" />
        </q-item-section>
      

        <q-item-section class="text-h6">Message</q-item-section>
      </q-item>
  

    </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <q-input 
        placeholder="Search..."
        class="q-ma-md"
        rounded
        outlined
        dense
        >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
       <q-list padding separator>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="grey">Sports</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened !</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="grey">Sports</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened !</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="grey">Sports</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened !</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

        <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="grey">Sports</q-item-label>
          <q-item-label class="text-weight-bold">Something amazing happened !</q-item-label>
          <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      
       </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="sass">
.header-icon 
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-500)

</style>