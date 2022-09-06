
import { navigation , enventScrollHorizontal } from "./srcs/navigaton.mjs";
import {getProductAlls, getProductsOfCart} from '../src/srcs/classOfProducts.mjs'

export let productosAll= [];
//selecion de elementos
export  const cardsContainer = document.querySelector('.cards-container');
export const btnMoreRecommended= document.querySelector('.btnMostrarMas');
export const sectionRecommend= document.querySelector('.main-container');
export const sectionCategories= document.querySelector('.categories');
export const containerCategories= document.querySelector('.categories-container');
export const sectionProdutsAll= document.querySelector('.productosAll');
export const sectionContainerAllProducts= document.querySelector('.container-productsAll');
    const btnRetroArrow= document.querySelector('.bxs-chevron-left');
    const menuEmail= document.querySelector('.navbar-email');
    const desktopMenu= document.querySelector('.desktop-menu');
export const menuCarIcon= document.querySelector('.navbar-shopping-cart');
export const containerOrdersCar= document.querySelector('.cart-orders');
    const btnCloseProductDetail=document.querySelector('.product-detail-close');
    const listaProductsDetail = document.querySelector('.list-product--detail');
    const iconCloseLisproductDetail= document.querySelector('.title-container');
    const iconMobileMenu = document.querySelector('.icon_mobile-menu');
    const btnAceptAlert= document.querySelector('.btnAcceptAlert');
    const alertBtnViewCar= document.querySelector('.alertBtnviewCar');
    const menuMobile= document.querySelector('.mobile-menu');

    const asideProductDetail= document.querySelector('.product-detail');
    const asideAlertAddProdutToCar= document.querySelector('.container-alert-AddToCar');
   
    
    //funtion Create Element
    export const createElement=(etiqueta)=>document.createElement(etiqueta);
    




//function para menu desplegable version mobile
const toggleMenuMobile =()=>{
    menuMobile.classList.toggle('inactive_mobile-menu');
    
    let isOpenListProducDetails= !listaProductsDetail.classList.contains('inactive_listProductDetail');

    if(isOpenListProducDetails){
        listaProductsDetail.classList.add('inactive_listProductDetail');
    } 
}
    const toggleCarAside=()=>{
    listaProductsDetail.classList.toggle('inactive_listProductDetail');
    asideAlertAddProdutToCar.classList.add('inactive');
    let isOpenMenuMobile = !menuMobile.classList.contains('inactive_mobile-menu');

    if(isOpenMenuMobile){
        menuMobile.classList.add('inactive_mobile-menu');
    }
    const productDetailInfoCard= document.querySelector('.product-detail');
    
    if(!productDetailInfoCard.classList.contains('inactive')){
        productDetailInfoCard.classList.add('inactive');
    }
    

}
const toggleDesktopMenu =()=>{
    desktopMenu.classList.toggle('inactive')
}  
enventScrollHorizontal();

menuEmail.addEventListener('click',toggleDesktopMenu);
iconMobileMenu.addEventListener('click',toggleMenuMobile);
menuCarIcon.addEventListener('click',toggleCarAside);
iconCloseLisproductDetail.addEventListener('click',toggleCarAside);
btnMoreRecommended.addEventListener('click',()=>{
    location.hash='recommended';
});
btnRetroArrow.addEventListener('click',()=>{
    location.hash= window.history.back();
    document.querySelector('.header--title').textContent= 'Recommended';

});
btnCloseProductDetail.addEventListener('click',()=>{
    asideProductDetail.classList.add('inactive')
});
btnAceptAlert.addEventListener('click',(e)=>{
    console.log(e);
    e.path[2].classList.add('inactive')
});
alertBtnViewCar.addEventListener('click',toggleCarAside);


/// events Of Navbar 



window.addEventListener('DOMContentLoaded',()=>getProductAlls(productosAll));
window.addEventListener('DOMContentLoaded',(e)=>{
    navigation();
    getProductsOfCart();
},false);
window.addEventListener('hashchange',navigation,false);

