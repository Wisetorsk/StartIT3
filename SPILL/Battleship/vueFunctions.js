//==================================================================================
// VUE components
//==================================================================================
Vue.component('cell-element-player', {
    props: ['x', 'y', 'board'],
    watch: {
        x(value) {
            this.x = value;
        },
        y(value) {
            this.y = value;
        },
        cell() {
            this.cell = main.user.board.field[this.x][this.y];
        }
    },
    data: function() {
        return {
            //x: null,
            //y: null
            //cell: main.user.board.field[this.x][this.y]
        }
    },
    template: '<div class="cell" v-bind:xIndex="x" v-bind:yIndex="y" v-bind:board="board" onclick="main.user.placeShip(this)"></div>'
});

Vue.component('cell-element-enemy', {
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