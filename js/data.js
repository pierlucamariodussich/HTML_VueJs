
const socialIcon = [

   {
     name:'facebook',
     class: 'fab fa-facebook-f',
     src: 'https://www.facebook.com/'
   },
   {
     name:'twitter',
     class: 'fab fa-twitter',
     src: 'https://www.facebook.com/'
   },
   {
     name:'instagram',
     class:'fab fa-instagram',
     src: 'https://www.facebook.com/'
   },
   {
     name:'youtube',
     class: 'fab fa-youtube',
     src: 'https://www.facebook.com/'
   },
]

const cartMenu = [

   {
     iconclass:'',
     name: 'Shopping Cart',
     src: '/cart',
     arrowclass: '',
   },
   {
     iconclass: '',
     name: 'My Account',
     src: '/myaccount',
     arrowclass:'fas fa-chevron-down',
   },
   {
     iconclass: 'fas fa-shopping-cart',
     name: 'CART',
     src: '/cart',
     arrowclass: 'fas fa-chevron-down',
   },

];

const navMenu =[
  {
    name: 'Home',
    src: '/homepage',
    arrowclass: 'fas fa-chevron-down',
    active: true,
    clicked: 'active',
  },
  {
    name: 'Shop',
    src: '/shop',
    arrowclass: 'fas fa-chevron-down',
    active: false,
    clicked: '',
  },
  {
    name: 'Products',
    src: '/products',
    arrowclass: 'fas fa-chevron-down',
    active: false,
    clicked: '',
  },
  {
    name: 'Categories',
    src: '/categories',
    arrowclass: 'fas fa-chevron-down',
    active: false,
    clicked: '',
  },
  {
    name: 'News',
    src: '/news',
    arrowclass: '',
    active: false,
    clicked: '',
  },
  {
    name: 'Elements',
    src: '/elements',
    arrowclass: 'fas fa-chevron-down',
    active: false,
    clicked: '',
  },


]

const sliderImg=[
  {
    name: 'background',
    src: 'img/slide1.jpg',
    active: false,
    title: 'Avada Classic Shop',
    subtitle:'SHOW YOUR PRODUCTS WITH STYLE',
    firstButton:'GET AVADA NOW!',
    firstButtonLink: '/shop',
    secondButton:'',
    secondButtonLink: '',
  },
  {
    name: 'men and women',
    src: 'img/slide2.jpg',
    active:true,
    title: 'Lookbook 2015',
    subtitle:'SHOW YOUR PRODUCTS WITH STYLE',
    firstButton:'MEN',
    firstButtonLink: '/men',
    secondButton:'WOMEN',
    secondButtonLink: '/women',
  },
  {
    name: 'new collection',
    src: 'img/slide3.jpg',
    active:true,
    title: 'Brand New Arrivals',
    subtitle:'NEW COLLECTION FROM NEW YORK',
    firstButton:'VIEW ALL',
    firstButtonLink: '/shop',
    secondButton:'LOOKBOOK',
    secondButtonLink: '/lookbook',
  },

]
