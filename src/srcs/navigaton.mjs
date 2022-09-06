
import { sectionRecommend, sectionCategories,sectionContainerAllProducts,sectionProdutsAll, productosAll} from "../main.mjs";
import {getProductAll, getCategoriesAll, getProductsLimits,getProductAlls} from './classOfProducts.mjs';
import { renderProducts } from "./render.mjs";

   

     export const navigation=()=>{
        if(location.hash.startsWith('#recommended')){
            viewRecommended();
        }else if(location.hash.startsWith('#category=')){
            viewCategory();
        }else{
            homePage();
        }
    }

    const viewRecommended=()=>{
        sectionRecommend.classList.add('inactiveSection');
        sectionCategories.classList.add('inactiveSection');
        sectionProdutsAll.classList.remove('inactiveSection');
        getProductAll();
        // debugger
    }
    const homePage=()=>{
        sectionProdutsAll.classList.add('inactiveSection')
        sectionRecommend.classList.remove('inactiveSection');
        sectionCategories.classList.remove('inactiveSection');

        getProductsLimits();
        getCategoriesAll();
        

    }
    const viewCategory=()=>{
        sectionRecommend.classList.add('inactiveSection');
        sectionCategories.classList.add('inactiveSection');
        sectionProdutsAll.classList.remove('inactiveSection');
        const headerTitle= document.querySelector('.header--title');
        const hash = location.hash
        const id = hash.split('=')[1].split('/')[0];
        const nameCategory= hash.split('=')[1].split('/')[1];
        if(productosAll.length == 0){
            (async()=>{
                let productos=[];
                await getProductAlls(productos);
                const categories=  productos.filter(p=> p.category.id== id);
                headerTitle.textContent= nameCategory;
                console.log(categories);
                renderProducts(sectionContainerAllProducts,categories);

               
            })();
        }else{
                const categories= productosAll.filter(p=> p.category.id== id);
                renderProducts(sectionContainerAllProducts,categories);
                headerTitle.textContent= nameCategory;
        }
        
        
        
        // getProductsByCategory(hash.split('=')[1]);
    }
   
    export const enventScrollHorizontal=()=>{
       const arrowLeft= document.querySelector('.main-arrow--left');
       const arrowRight=document.querySelector('.main-arrow--right');
        const container=  document.querySelector('.cards-container');
        arrowLeft.addEventListener('click',()=>{
            container.scrollLeft-= 240
    });
        arrowRight.addEventListener('click',()=>{
            container.scrollLeft+= 240
        });
    }