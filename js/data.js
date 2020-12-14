
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
    title: 'Brand New Arrivals',
    subtitle:'NEW COLLECTION FROM NEW YORK',
    firstButton:'VIEW ALL',
    firstButtonLink: '/shop',
    secondButton:'LOOKBOOK',
    secondButtonLink: '/lookbook',
  },

]

const topSeller=[
{
  category: 'Men',
  img: 'img/topseller1.jpg',

  name: 'Black Leather Jacket',
  tags: 'Jackets, Jeans, Men',
  realPrice:'$235',
  price:'$200',
  onSale: true,
  featured: true,
  topRated:true,
  latestReview:true,
  point: 5,

},
{
  category: 'Men',
  img: 'img/topseller2.jpg',
  name: 'Black Leather Suit',
  tags: 'Jackets, Men',
  realPrice:'',
  price:'$176',
  onSale: false,
  featured: true,
  topRated:false,
  latestReview:false,
  point: 0,
},
{
  category: 'Men',
  img: 'img/topseller3.jpg',
  name: 'Blue Jacket & Stripe Tee',
  tags: 'Jackets,Men,Suits',
  realPrice:'',
  price:'$580',
  onSale: false,
  featured: true,
  topRated:false,
  latestReview:false,
  point: 0,
},
{
  category: 'Men',
  img: 'img/topseller4.jpg',
  name: 'Modern Black Leather Suit',
  tags: 'Jackets, Men',
  realPrice:'',
  price:'$96',
  onSale: false,
  featured: true,
  topRated:false,
  latestReview:false,
  point: 0,
},

]


const post=[

  {
    img:'img/blog1.jpg',
    title:'Aenean lobortis sapien enim viverra',
    date:'September 9th, 2015',
    comment: 0,
    summary:'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
  },
  {
    img:'img/blog2.jpg',
    title:'Duis ac massa semper maximus',
    date:'September 9th, 2015',
    comment: 0,
    summary:'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
  },
  {
    img:'img/blog3.jpg',
    title:'Nunc fermint nulla eu justo sem id',
    date:'September 9th, 2015',
    comment: 0,
    summary:'Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,',
  },

]


const featuredProduct =[
  {
    category: 'Women',
    img: 'img/product_woman_1.jpg',
    name: 'Black Jacket',
    tags: 'Jackets, Women',
    realPrice:'',
    price:'$125',
    onSale: false,
    featured: true,
    topRated:false,
    latestReview:false,
    point: 0,
  },
  {
    category: 'Men',
    img: 'img/topseller1.jpg',
    name: 'Black Leather Jacket',
    tags: 'Jackets, Jeans, Men',
    realPrice:'$235',
    price:'$200',
    onSale: true,
    featured: true,
    topRated:true,
    latestReview:true,
    point: 5,

  },
  {
    category: 'Women',
    img: 'img/product_woman_2.jpg',
    name: 'Hipster Black Top',
    tags: 'Jackets, Women',
    realPrice:'',
    price:'$57',
    onSale: false,
    featured: true,
    topRated:false,
    latestReview:false,
    point: 0,
  },

]

const onSaleProduct =[
  {
    category: 'Men',
    img: 'img/topseller1.jpg',
    name: 'Black Leather Jacket',
    tags: 'Jackets, Jeans, Men',
    realPrice:'$235',
    price:'$200',
    onSale: true,
    featured: true,
    topRated:true,
    latestReview:true,
    point: 5,

  },
  {
    category: 'Men',
    img: 'img/product1.jpg',
    name: 'Blue Lather Jacket',
    tags: 'Jackets,Men,Suits',
    realPrice:'$80',
    price:'$60',
    onSale: true,
    featured: false,
    topRated:false,
    latestReview:false,
    point: 0,
  },
  {
    category: 'Accesories',
    img: 'img/accessories_1.jpg',
    name: 'Modern Leather Boots',
    tags: 'Shoes, Accessories',
    realPrice:'$50',
    price:'$30',
    onSale: true,
    featured: false,
    topRated:false,
    latestReview:false,
    point: 0,
  },

]
const topRatedProduct =[
  {
    category: 'Accesories',
    img: 'img/accessories_2.jpg',
    name: 'Lather Gloves',
    tags: 'Gloves, Accessories',
    realPrice:'',
    price:'$45',
    onSale: false,
    featured: false,
    topRated: true,
    latestReview:true,
    point: 5,
  },
  {
    category: 'Men',
    img: 'img/topseller1.jpg',
    name: 'Black Leather Jacket',
    tags: 'Jackets, Jeans, Men',
    realPrice:'$235',
    price:'$200',
    onSale: true,
    featured: true,
    topRated:true,
    latestReview:true,
    point: 5,

  },
  {
    category: 'Women',
    img: 'img/woman_3.jpg',
    name: 'Spring Printed Dress',
    tags: 'Dress, Women',
    realPrice:'',
    price:'$47',
    onSale: false,
    featured: false,
    topRated:true,
    latestReview:true,
    point: 5,
  },

]

const latestReviewProduct =[

  {
    category: 'Men',
    img: 'img/topseller1.jpg',
    name: 'Black Leather Jacket',
    tags: 'Jackets, Jeans, Men',
    realPrice:'$235',
    price:'$200',
    onSale: true,
    featured: true,
    topRated:true,
    latestReview:true,
    point: 5,
    reviewBy: 'admin',

  },
  {
    category: 'Accesories',
    img: 'img/accessories_2.jpg',
    name: 'Lather Gloves',
    tags: 'Gloves, Accessories',
    realPrice:'',
    price:'$45',
    onSale: false,
    featured: false,
    topRated: true,
    latestReview:true,
    point: 5,
    reviewBy: 'Beardman',
  },
  {
    category: 'Women',
    img: 'img/woman_3.jpg',
    name: 'Spring Printed Dress',
    tags: 'Dress, Women',
    realPrice:'',
    price:'$47',
    onSale: false,
    featured: false,
    topRated:true,
    latestReview:true,
    point: 5,
    reviewBy: 'admin',
  },

]

const brandLogos =[

  {
    nome:'forest',
    logo:'img/logo1.png',
  },
  {
    nome:'Badge',
    logo:'img/logo2.png',
  },
  {
    nome:' Beard Fashion',
    logo:'img/logo3.png',
  },
  {
    nome:'Hype',
    logo:'img/logo4.png',
  },
  {
    nome:' A&Q',
    logo:'img/logo5.png',
  },
]
