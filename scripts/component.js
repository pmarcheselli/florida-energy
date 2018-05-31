Vue.component('app-footer',{
  props: ['text'],
  template: '<div><div v-for="logos in universities"><a v-bind:href="logos.url"><img v-bind:src="logos.imgSource" v-bind:alt="logos.name"></a></div></div>'
})


