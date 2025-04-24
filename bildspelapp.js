

new Vue({
    // Monterar applikationen i HTML-elementet med ID "app"

    el: '#app',
    
    // Inledande data för applikationen
    data: {
        // Array med sökvägar till bilder
        images: [
            'img/bildspel1.jpg',
            'img/bildspel2.jpg',
        ],
        // Index för den aktuella bilden som visas
        currentIndex: 0
    },
    
    // Beräknad egenskap för att hämta den aktuella bilden baserat på current index 
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    
    // Metoder för att navigera mellan bilderna
    methods: {
    
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        // Visar nästa bild
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
});
