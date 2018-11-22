//==================================================================================
// VUE components
//==================================================================================
Vue.component('cell-element', {
    props: ['x', 'y', 'board'],
    template: '<div class="cell" v-bind:xIndex="x" v-bind:yIndex="y" v-bind:board="board" onclick="clickCell(this)"></div>',
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
});

new Vue({
    el: '#playfield2'
})