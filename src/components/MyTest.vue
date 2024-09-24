<template>
  <div>
    <div v-if="list" class="menu-btn">
      <v-icon @click="toggleMenu" class="arrow">mdi-format-list-bulleted</v-icon>
    </div>
    <transition name="fade">
      <ul v-if="showMenu" class="menu">
        <v-icon @click="toggleMenu" class= "close-btn">mdi-close</v-icon>
        <li>
          <span class="marker"></span>
          Spring Bootの構成!!!!!!
        </li>
        <li>
          <span class="marker"></span>
          DIについて
        </li>
        <li>
          <span class="marker"></span>
          HelloWorld
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      list: true,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.list = !this.list;
    },
  },
};
</script>

<style>
.arrow {
  transition: all .3s;
  margin-right: 5px;
}
a:hover .arrow {
  transform: translateX(-3px);
}
.close-btn{
  color: black;
  left: 150px;
}
.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  /* その他のスタイル */
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
  border-radius: 50%;
}
.menu {
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
}
.menu li {
  padding: 10px 0;
  top: 10px;

}
.marker {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 5px;
}

.menu li:hover .marker {
  background-color: orange;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
