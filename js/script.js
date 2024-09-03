const {createApp} = Vue;

createApp ({
    data() {
        return {
            message:'Hello World',
            imageUrl:'https://clipart-library.com/new_gallery/10-108425_earth-png-transparent-background-earth-png.png',
        }
    },
}).mount('#app');

