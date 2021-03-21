var app = new Vue({
    el: '#root',
    data: {
        circle: ['fas fa-circle', 'far fa-circle'],
        counter: 0,
        images: ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg', 'img/img_4.jpg'],
    },
    methods: {
        prevImg: function() {
            this.counter--;
            clearInterval(this.interval);
            this.startInterval();

            if (this.counter < 0) {
                (this.counter = 3);
            };
        },
        nextImg: function() {
            this.counter++;
            clearInterval(this.interval);
            this.startInterval();
            if (this.counter > 3) {
                (this.counter = 0);
            };
        },

        startInterval: function() {
            this.interval = setInterval(() => {
                this.nextImg();
            }, 2000);
        }
    },
    created: function() {
        this.startInterval();
        document.addEventListener('keyup', (e) => {
            // console.log(e);
            if (e.keyCode == 39) {
                this.nextImg();
            } else if (e.keyCode == 37) {
                this.prevImg();
            }
        })
    },
});