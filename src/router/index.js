import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Playlist from "@/views/Playlist";

const routes = [
  { path: "/", name: "home", component: Home, meta: { scrollToTop: true }},
  { path: "/playlist/:id", name: "playlist", component: Playlist, meta: { scrollToTop: true }},
  { path: "/:pathMatch(.*)*", redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      let id = window.location.href.split('#')[1];
      if (id.length) {
        let yOffset = -64;
        let element = document.getElementById(id);
        let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  },
  routes
})

export default router
