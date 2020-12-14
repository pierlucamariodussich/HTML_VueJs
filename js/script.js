

const avadaShop = new Vue ({

  el:'#root',
  data:{
    icons: [...socialIcon],
    cartLinks:[...cartMenu],
    navLinks:[...navMenu],
    slider:[...sliderImg],
    topProduct:[...topSeller],
    blogPost:[...post],
    latest:[...latestReviewProduct],
    topReated:[...topRatedProduct],
    onSale:[...onSaleProduct],
    featured:[...featuredProduct],
    brand:[...brandLogos],
    tags:["Black", "boots", "Brown", "Casual", "D&G", "Fabric", "flowers", "Grey", "hat", "Hipster", "lines"," multi-purpose", "New York","Outdoors", "red", "responsive", "summer", "sweater", "Travel", "Warm White", "winter"],
    activeNav: false,
    imageSlider: sliderImg.map( e => e.src),
    title: sliderImg.map( e => e.title),
    subtitle: sliderImg.map( e => e.subtitle),
    firstButton: sliderImg.map( e => e.firstButton),
    secondButton:sliderImg.map( e => e.secondButton),
    imagesIndex: 0,


  },

  methods:{

    prev: function(){
       this.imagesIndex = (this.imagesIndex === 0) ?
                                   this.imagesIndex = this.imageSlider.length - 1 :
                                   this.imagesIndex - 1;
     },
     next: function(){
       this.imagesIndex = (this.imagesIndex === this.imageSlider.length -1) ?
                                   this.imagesIndex = 0 :
                                   this.imagesIndex + 1;
     },





  },
  mounted(){
      window.document.onscroll = () => {
          let navBar = document.getElementById('nav');
          if(window.scrollY > navBar.offsetTop){
            this.activeNav = true;
            } else {
            this.activeNav = false;
          }
        }
      },





});
