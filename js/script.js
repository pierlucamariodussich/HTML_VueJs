
const avadaShop = new Vue ({

  el:'#root',
  data:{
    icons: [...socialIcon],
    cartLinks:[...cartMenu],
    navLinks:[...navMenu],
    slider:[...sliderImg],
    imageIndex: 0,
    activeNav: false,
    





  },
  methods:{
    toggleNavClass(){
            if(this.activeNav == false){
              return 'nav'
            } else {
              return 'sticky-nav'
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
      }



});
