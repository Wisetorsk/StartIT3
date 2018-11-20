Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({
    el: '.app',
    data: {
        message: 'Hei, dette er en default message',
        count: 0
    },
    methods: {
        welcome: function () {
            console.log(new Date().toLocaleTimeString());
            this.message = 'Welcome! I\'ve altered this string using a method';
            this.count++;
        }
    },
    filters: {
        uppercase: function (text) {
            return text.toUpperCase();
        },
        split: function (text) {
            return text.split("").join().replace(/,/g, ' ');
        },
        lowercase: function (text) {
            return text.toLowerCase();
        }
    },
    computed: {
        square: function () {
            return this.count ** 2;
        },
        double: function () {
            return this.count * 2;
        },
        baseTwo: function () {
            return 2 ** this.count;
        }
    }
});

new Vue({
    el: '.app2'
});


new Vue({
    el: '#app3',
    data: {
        classInfo: 'blue'
    },
    methods: {

    }
})