const URL_API= 'https://api.escuelajs.co/api/v1/';
import { renderProducts, renderCategories,renderProductDetail,renderProductToCar, renderCategoriesNavbar } from "./render.mjs";
import { cardsContainer, containerCategories, btnMoreRecommended, sectionContainerAllProducts, containerOrdersCar,menuCarIcon } from "../main.mjs";

export const getCategoriesAll=async()=>{
    try {
    const containerNavbarDesktop= document.querySelector('.category-navbar--desktop');
    const containerNavbarMobile= document.querySelector('.category-navbar--mobile');    
    const res = await fetch(URL_API+'categories');
    const data = await res.json();
        renderCategories(containerCategories,data);
        renderCategoriesNavbar(containerNavbarDesktop,data);
        renderCategoriesNavbar(containerNavbarMobile,data);

    } catch (error) {
        console.log(error)
    }
}
 export const getProductsLimits=async()=>{
    try {
        const res = await fetch(`${URL_API}products?offset=0&limit=20`);
    const data= await res.json();
    renderProducts(cardsContainer,data);
    } catch (error) {
        console.log(error);
    }

}
export const getProductAll= async()=>{
    try {
        const res = await fetch(`${URL_API}products`);
        const products = await res.json();
        renderProducts(sectionContainerAllProducts,products);
    } catch (error) {
        console.log(error)
    }
}
export const getProductsByCategory=async(id)=>{
    try {
    
        const res = await fetch(`${URL_API}categories/${id}/porducts`);
        const products= await res.json();
        renderProducts(sectionContainerAllProducts,products);
        
    } catch (error) {
        console.log(error)
    }
}
    
export const getProductAlls= async(array)=>{
    
    try {
        const res = await fetch(`${URL_API}products`);
        const products = await res.json();
        products.forEach(element => {
            array.push(element);
        });
        // console.log(array)
    } catch (error) {
        console.log(error)
    }
};
export const getOnlyProduct= async(id)=>{
    try {
        const containerProductDetail= document.querySelector('.product-detail');
        const data = await fetch(`${URL_API}products/${id}`).then(res=>res.json());
        // console.log(data);
        renderProductDetail(data);
        containerProductDetail.classList.remove('inactive');
        
    } catch (error) {
        console.log(error);
    }

}
export const getProductsOfCart= ()=>{
    const countCar= menuCarIcon.lastElementChild;
    const totalContainer= document.querySelector('.totalPriceProductOfTheCar');
    const listOfProducts= JSON.parse(localStorage.getItem('products'));
    const listaProductsArray= Object.values(listOfProducts);
    const listprices= listaProductsArray.map(obj=>obj.price);
    const total= listprices.reduce((a,b)=>{
        return a+b
    },0);
    
    renderProductToCar(containerOrdersCar,listaProductsArray);
    countCar.textContent= listaProductsArray.length;
    totalContainer.textContent=`$ ${total}.00`;
}



    