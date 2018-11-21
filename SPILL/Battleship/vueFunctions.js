//==================================================================================
// VUE components
//==================================================================================
Vue.component('cell-element', {
    props: ['x', 'y'],
    template: '<div class="cell" v-bind:xIndex="x" v-bind:yIndex="y"></div>',
});

Vue.component('index-element', {
    props: ['indexValue'],
    template: '<div class="index">{{ indexValue }}</div>'
})


//==================================================================================
// VUE instances
//==================================================================================
new Vue({
    el: '#playfield'
})