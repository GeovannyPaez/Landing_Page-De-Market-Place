import { createElement} from "../main.mjs";
import { getOnlyProduct,getProductsOfCart } from "./classOfProducts.mjs";





/*
        <div class="product-card" id="961685">
          <img src="https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&amp;w=1600&amp;h=900&amp;fmt=auto" alt="" class="imgProductCard">
              <div class="product-info">
                <div>
                  <p>$1200</p>
                  <p>Bicycle helmet</p>
                </div>
                <figure>
                  <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
              </div>
        </div> */
   export const renderProducts=(container,productos)=>{

    document.documentElement.scrollTo(0,0);
    container.innerHTML=''
            productos.forEach(product => {
                const cardProduct= createElement('div');
                cardProduct.classList.add('product-card');

                const imgProduct= createElement('img');
                imgProduct.classList.add('imgProductCard');
                imgProduct.setAttribute('src',product.images[0]);
                imgProduct.alt= product.title;

                imgProduct.addEventListener('click',()=>getOnlyProduct(product.id));

                const containerInfo= createElement('div');
                containerInfo.classList.add('product-info');

                const containerPrice= createElement('div');
                const price= createElement('p');
                price.textContent= `$ ${product.price}`;

                const name= createElement('p');
                name.textContent= product.title;

                containerPrice.insertAdjacentElement('beforeend',price);
                containerPrice.insertAdjacentElement('beforeend',name);

        


                const figure= createElement('figure')
                const btnToCar= createElement('img');
                btnToCar.src= './icons/bt_add_to_cart.svg';
        
                figure.appendChild(btnToCar);
                figure.addEventListener('click',()=>{
                        saveProductolocalStorage(product);
                      });

                containerInfo.insertAdjacentElement('beforeend',containerPrice);
                containerInfo.insertAdjacentElement('beforeend',figure);

                cardProduct.insertAdjacentElement('beforeend',imgProduct);
                cardProduct.insertAdjacentElement('beforeend',containerInfo);

                container.insertAdjacentElement('beforeend',cardProduct);
    });
};

/* <article class="categorie-card">
          <h3 class="categorie-card--title">Clothes</h3>
          <div class="categorie-card--img">
            <img src="https://api.lorem.space/image/fashion?w=640&h=480&r=4283" alt="Clothes">
          </div>
          <button class="categorie-card--btn">Ver Productos</button>
</article> */
export const renderCategories=(container, categories)=>{
    container.innerHTML= '';
    categories.forEach(category=>{
      const containerCard= createElement('article');
      containerCard.classList.add('categorie-card');
      
      const containerTitle=createElement('h3');
      containerTitle.textContent= category.name;
      containerTitle.classList.add('categorie-card--title');
      containerCard.insertAdjacentElement('beforeend',containerTitle);
      
      const containerImg= createElement('div');
      containerImg.classList.add('categorie-card--img');
      const imgCategory= createElement('img');
      imgCategory.src= category.image;
      containerImg.appendChild(imgCategory);

      const btn= createElement('button');
      btn.classList.add('categorie-card--btn');
      btn.textContent= 'See Products';
      btn.addEventListener('click',()=>{
        location.hash=`category=${category.id}/${category.name}`;
      });

      containerCard.insertAdjacentElement('beforeend',containerImg);
      containerCard.insertAdjacentElement('beforeend',btn);

      container.insertAdjacentElement('beforeend',containerCard);
    });
}
/* <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img>
    <div class="product-info">
      <p id="product-detail-price"></p>
      <p id="product-detail-name"></p>
      <p id="product-detail-description">With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div> */

    export const renderProductDetail= (product)=>{
      console.log(product)
      const productInfoContainer= document.querySelector('.product-info');
      const img= document.querySelector('.product-detail--igm');
      img.src= product.images[0];
      const price = document.querySelector('#product-detail-price');
      price.textContent= `$ ${product.price}`;
      const name = document.querySelector('#product-detail-name');
      name.textContent=product.title;
      const description= document.querySelector('#product-detail-description');
      description.textContent= product.description;

      
      productInfoContainer.removeChild(productInfoContainer.lastElementChild);
     
      const btnAddToCar = createElement('button');
      btnAddToCar.textContent='Add to Cart'
      btnAddToCar.classList.add('add-to-cart-button');
      btnAddToCar.classList.add('primary-button')

      const iconCar= createElement('img');
      iconCar.src='./icons/bt_add_to_cart.svg';
      iconCar.alt='add to cart'
      btnAddToCar.insertAdjacentElement('beforeend',iconCar);

      productInfoContainer.insertAdjacentElement('beforeend',btnAddToCar);
      // btnAddToCar.addEventListener('click',()=>renderProductToCar(product));
      btnAddToCar.addEventListener('click',(e)=>{
        saveProductolocalStorage(product);
        e.path[2].classList.add('inactive');
      });

    }
    export const  renderCategoriesNavbar=(container, categories)=>{
      container.innerHTML= '';
    
      const titleLi= createElement('li');
      const textTitle= createElement('a');
      textTitle.textContent= 'CATEGORIES';
      titleLi.appendChild(textTitle);

      const all= createElement('li');
      const textAll= createElement('a');
      textAll.textContent= 'All';
      all.appendChild(textAll);
      all.addEventListener('click',(e)=>{
        if (container.classList.value == 'category-navbar--mobile') {
          e.path[3].classList.add('inactive_mobile-menu');
          location.hash='recommended';
        }else{
          location.hash='recommended';
        }
      });

      container.insertAdjacentElement('beforeend',titleLi);
      container.insertAdjacentElement('beforeend',all);
      categories.forEach(category=>{
        

        const li= createElement('li');
        const a= createElement('a');
       
        a.textContent= category.name;
        li.appendChild(a);
        li.addEventListener('click',(e)=>{
          console.log(e)
          if (container.classList.value == 'category-navbar--mobile') {
            e.path[3].classList.add('inactive_mobile-menu');
            location.hash=`category=${category.id}/${category.name}`
          } else {
            location.hash=`category=${category.id}/${category.name}`
          }
        });
        container.insertAdjacentElement('beforeend',li);
      })
        }
    // <div class="shopping-cart">
    //     <figure>
    //       <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    //     </figure>
    //     <p>Bike</p>
    //     <p>$30,00</p>
    //     <img src="./icons/icon_close.png" alt="close">
    //   </div>
    export const renderProductToCar=(container,products)=>{
      // console.log(products)
      container.innerHTML='';
      products.forEach(product=>{
        const shoppingCart= document.createElement('div');
        shoppingCart.classList.add('shopping-cart');
  
        const containerImg= createElement('figure');
        const img= createElement('img');
        img.src=product.images[0];
        img.alt= product.title;
        containerImg.appendChild(img);
        containerImg.addEventListener('click',(e)=>{
          getOnlyProduct(product.id);

        })
  
        const name= createElement('p');
        name.textContent=product.title;
        const price= createElement('p');
        price.textContent= product.price;
        
        const iconDeleteProduct= createElement('img');
        iconDeleteProduct.src='./icons/icon_close.png';
        iconDeleteProduct.addEventListener('click',(e)=>{
          console.log(e);
          const parent= e.path[1];
          deleteProductLocalStorage(product);
          getProductsOfCart();
          parent.remove();
        })
        shoppingCart.insertAdjacentElement('beforeend',containerImg);
        shoppingCart.insertAdjacentElement('beforeend',name);
        shoppingCart.insertAdjacentElement('beforeend',price);
        shoppingCart.insertAdjacentElement('beforeend',iconDeleteProduct);
        
        container.insertAdjacentElement('afterbegin',shoppingCart);
      });
    }

    const getProductslocalStorage=()=>{
      const item= JSON.parse(localStorage.getItem('products'));
      let productss;
      if(item){
        productss = item;
      }else{
        productss= {};
      }
      console.log(productss)
      return productss;
      
    }
    const saveProductolocalStorage=product=>{
      const containerAlert= document.querySelector('.container-alert-AddToCar');
      const containertex= containerAlert.querySelector('.container-alert span p');
      const productsAdd= getProductslocalStorage();
      if(productsAdd[product.id]){
        productsAdd[product.id]= product;
      }else{
        productsAdd[product.id]= product
      }

      localStorage.setItem(`products`,JSON.stringify(productsAdd));
      // console.log(localStorage);
      getProductsOfCart();
      containertex.textContent= product.title;
      containerAlert.classList.remove('inactive');
      
    }
    const deleteProductLocalStorage= product=>{
      const productos= JSON.parse(localStorage.getItem('products'));
      if (productos[product.id]) {
        productos[product.id]= undefined;
        localStorage.setItem('products',JSON.stringify(productos));
      }
    }

    
    