
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
    activeNav: false,
    imageIndex:0,

  },

  methods:{


    prev: function(){
            if(this.imageIndex === 0){
               this.imageIndex =  this.slider.length
            } else {
              this.imageIndex --;
            }
           // this.imgActive = (this.imagesIndex === 0) ?
           //                             this.imagesIndex = this.images.length - 1 :
           //                             this.imagesIndex - 1;
         },

     next: function(){
          if ( this.imagesIndex === this.slider.lenght ){
              this.imagesIndex = 0;
          }else{
            this.imagesIndex + 1;
          }
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
