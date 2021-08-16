import React from 'react';
import IconMen from '../Icons/IconMen';
import IconWomen from '../Icons/IconWomen';
import IconDevices from '../Icons/IconDevices';
import IconGadget from '../Icons/IconGadget';
import IconGaming from '../Icons/IconGaming';
import {appColors} from './appColors';

export const features = [
  'Always up-to-date React Native scaffolding',
  'Modular and well-documented structure for application code',
  'Redux for state management',
  'React Navigation for simple navigation',
  'Dropdown Alert Helper for showing success/error/info message',
  'Basic custom components like Text input,Label and picker select etc',
];
export const starterIntro = [
  'We love building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.',
  'Getting started on a new app just takes too long. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.',
  'This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.',
];
export const bestSellersList = [
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Wrist watch',
    description: 'Tag Heuer',
    price: '$499',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Nike FIT Sleeve',
    description: 'Nike Dri-FIT longer.',
    price: '$1500',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
];

export const productDetail = {
  name: 'Leather Wrist watch',
  detail:
    'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.',
  price: '$499',
  size: 'XL',
  color: 'blue',
  image: require('../static/images/products/2.png'),
  isFav: false,
};

export const reviews = [
  {
    name: 'Amusoftech',
    detail: 'Wonderful jean, perfect gift for my girl for our anniversary!',
    count: 4,
    image: require('../static/images/rate/1.png'),
  },
  {
    name: 'Aman Deep',
    detail: 'Nike Dri-FIT is a polyester fabric designed to help you ',
    count: 3,
    image: require('../static/images/rate/1.png'),
  },
];

export const categoriesList = [
  {
    label: 'Men',
    Icon: () => <IconMen fill={appColors.primary} />,
  },
  {
    label: 'Women',
    Icon: () => <IconWomen fill={appColors.primary} />,
  },
  {
    label: 'Devices',
    Icon: () => <IconDevices fill={appColors.primary} />,
  },
  {
    label: 'Gaming',
    Icon: () => <IconGaming fill={appColors.primary} />,
  },
  {
    label: 'Gadget',
    Icon: () => <IconGadget fill={appColors.primary} />,
  },
];
export const topBrands = [
  {
    label: 'Apple Inc',
    products: '5693 Products',
    icon: 'logo-apple',
  },
  {
    label: 'Google Llc',
    products: '6613 Products',
    icon: 'logo-google',
  },
];
export const recentSearches = [
  'Amusoftech',
  'Shoes',
  'Caps',
  'Apple',
  'Google',
  'Macbook',
  'Sport weares',
];

export const deliveryTypes = [
  {
    label: 'Standard Delivery',
    subLabel: 'Order will be delivered between 3 - 5 business days',
    selected: true,
  },
  {
    label: 'Next Day Delivery',
    subLabel:
      'Place your order before 6pm and your items will be delivered the next day',
    selected: false,
  },
  {
    label: 'Nominated Delivery',
    subLabel:
      'Pick a particular date from the calendar and order will be delivered on selected date',
    selected: false,
  },
];
export const paymentMethods = ['dollar-sign', 'credit-card', 'layout'];

export const profileKeys=[
  {
    lebel:"Edit Profile",
    icon:"edit-3"
  },
  {
    lebel:"Shipping Address",
    icon:"map-pin",
    route:"Address"
  },
  {
    lebel:"Wishlist",
    icon:"heart",
    isNew:true,
    route :"WishList"
  },
  {
    lebel:"Order History",
    icon:"clock",
    route: "Orders"
  },
  {
    lebel:"Track Order",
    icon:"package",
    route: "Orders"
  },
  {
    lebel:"Cards",
    icon:"credit-card"
  },
  {
    lebel:"Notifications",
    icon:"bell"
  },
  {
    lebel:"Sign Out",
    icon:"log-out",
    route: "Login"
  }
]

export const orderList =[
  {
    label: 'AMU - 9249296 - N',
    amount: '$3503',
    status: 'In transit',
    color: 'yellow',
  },
  {
    label:"OD - 424923192 - N",
    amount:"$3453",
    status:"Delivered",
    color:"primary"
  },
  {
    label:"OD - 424923192 - N",
    amount:"$3503",
    status:"Delivered",
    color:"primary"
  },
  {
    label:"OD - 424923192 - N",
    amount:"$4453",
    status:"Delivered",
    color:"primary"
  }, 
  /* {
    label:"",
    amount:"",
    status:"",
    color:""
  },
  {
    label:"",
    amount:"",
    status:"",
    color:""
  } */
]