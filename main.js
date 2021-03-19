var app = new Vue({
    el: '#root',
    data: {
        circleFull: 'fas fa-circle',
        circleEmpty: 'far fa-circle',
        counter: 0,
        images: ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg', 'img/img_4.jpg'],
    },
    methods: {
        prevImg: function() {
            this.counter--;
            if (this.counter < 0) {
                (this.counter = 3);
            };
        },
        nextImg: function() {
            this.counter++;
            if (this.counter > 3) {
                (this.counter = 0);
            };
        }
    }
});