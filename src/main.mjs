
    import { listaProducts } from "./srcs/classOfProducts.mjs";
    import { product } from "./srcs/classOfProducts.mjs";
//selecion de elementos
    const menuEmail= document.querySelector('.navbar-email');
    const desktopMenu= document.querySelector('.desktop-menu');
    const menuCarIcon= document.querySelector('.navbar-shopping-cart');
    const butnAddProductToCart= document.querySelector('.add-to-cart-button');

    const listaProductsDetail = document.querySelector('.list-product--detail');
    const iconCloseLisproductDetail= document.querySelector('.title-container');
    const iconMobileMenu = document.querySelector('.icon_mobile-menu');
    const btnAceptAlert= document.querySelector('.btnAcceptAlert');
    const alertBtnViewCar= document.querySelector('.alertBtnviewCar');
    const menuMobile= document.querySelector('.mobile-menu');
    const cardsContainer = document.querySelector('.cards-container');
    const productDetailImage = document.querySelector('.product-detail > img');
    const productDetailPrice = document.querySelector('#product-detail-price');
    const productDetailName = document.querySelector('#product-detail-name');
    const productDetailDescription= document.querySelector('#product-detail-description');
    const iconCloseProductDetail= document.querySelector('.product-detail-close');
    const asideProductDetail= document.querySelector('.product-detail');
    const asideAlertAddProdutToCar= document.querySelector('.container-alert-AddToCar');
    

    
  

  //funcion de menu informacion personal
    const toggleDesktopMenu =()=>{
        desktopMenu.classList.toggle('inactive')
    }  
    //funcion para menu desplegable version mobile
    const toggleMenuMobile =()=>{
        menuMobile.classList.toggle('inactive_mobile-menu');
        
        let isOpenListProducDetails= !listaProductsDetail.classList.contains('inactive_listProductDetail');

        if(isOpenListProducDetails){
            listaProductsDetail.classList.add('inactive_listProductDetail');
        } 
    }
    
    // funcion para mostrar list de productos del carrito
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
    const closeListofCar=()=>{
        listaProductsDetail.classList.toggle('inactive');
    }

    function mostrar (item){
        item.addEventListener('click',()=>{
            const idProduct= item.parentNode.getAttribute('id');
            // console.log(idProduct);
            const infoProdct=  listaProducts.find(obj=>obj.id == idProduct);
            productDetailImage.setAttribute('src' , `${infoProdct.img}`);
            productDetailPrice.innerHTML=`${infoProdct.price}`;
            productDetailName.innerHTML=`${infoProdct.name}`;
            productDetailDescription.innerHTML=`${infoProdct.description}`;
            asideProductDetail.setAttribute('id',`${idProduct}`);
            asideProductDetail.classList.toggle('inactive');
            
        });
        
    }

    const addEventImgViewProducDetail=()=>{
        
        const imgListProduc= document.querySelectorAll('.card-product--img');
        for (const img of imgListProduc) {
            mostrar(img);
        }
    }

    const closeProductDetail= ()=>{
        asideProductDetail.classList.toggle('inactive');
        asideProductDetail.removeAttribute('id');
    }

    /// recorremos el array de productos importados del archivo classProducts, y aplicamos el metodo deploy de  la instancia de (product);
    
    const runArrayPruduct =arrPruduct=>{
        for (const product of arrPruduct) {
            const productCard= document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('id',`${product.id}`);
            const imgProductCard= document.createElement('img')
            imgProductCard.setAttribute('src', `${product.img}`)
            imgProductCard.classList.add('card-product--img');
            const productInfo= document.createElement('div')
            productInfo.classList.add('product-info');
            const div = document.createElement('div');
            const pPrice= document.createElement('p')
            pPrice.innerText= `$ ${product.price}`;
            div.appendChild(pPrice);
            const pName= document.createElement('p');
            pName.innerText= `${product.name}`;
            div.appendChild(pName);
            const figure = document.createElement('figure');
            figure.classList.add('button-AddToCarOfProducts');
            const iconCar= document.createElement('img')
            iconCar.setAttribute('src','./icons/bt_add_to_cart.svg');
            figure.appendChild(iconCar);

            productInfo.appendChild(div);
            productInfo.appendChild(figure);

            productCard.appendChild(imgProductCard);
            productCard.appendChild(productInfo);
            
            cardsContainer.appendChild(productCard);
        }
    }
    // hacemos delpoy a los productos con la funcion runArrayProduct()
    runArrayPruduct(listaProducts);

    // funcion que le añade un evento a cada card product y una vez le de click esta misma muestra su info del producto
    const addProductToCarAside= ()=>{
        const idProduct = asideProductDetail.getAttribute('id');
        const obj= listaProducts.find(p=> p.id == idProduct);
        añadirPorductoCarrito(obj.name,obj.price,obj.img);
        closeProductDetail();
    }
    const countProdusctInTheCar= ()=>{

        const itemnumber= menuCarIcon.querySelector('div');
        const parentOrderCount= document.querySelector('.my-order-content');
        let chils= parentOrderCount.childElementCount;

        
        // console.log(itemnumber);
        itemnumber.innerText= chils -2;
    }
    const añadirPorductoCarrito=(name,price,img)=>{
        const targetForCart= `
        <figure>
            <img src="${img}" alt="${name}">
        </figure>
        <p>${name}</p>
        <div><p>$<p class='priceOfProductCar'>${price}</p></p></div>
        
        <img src="./icons/icon_close.png" alt="close" class="btnDelteProdut">
        `;
        const lisOrdersProduct= document.querySelector('.my-order-content');
        const divShoppingCart = document.createElement('div');
        const textNameProduct= asideAlertAddProdutToCar.querySelector('.container-alert span p');
        divShoppingCart.classList.add('shopping-cart');
        divShoppingCart.innerHTML= targetForCart;
        lisOrdersProduct.insertAdjacentElement('afterbegin',divShoppingCart);
        textNameProduct.innerText=name;

        countProdusctInTheCar();
        priceTotalOfProductsInTheCar();
        deleteProducOfCar();
    }

    //funcion para agregar el evento al button de añadir los productos al carrito de compras 
    let ButtonsProductToCarOfProducts= document.querySelectorAll('.button-AddToCarOfProducts');
    const addProductToCarOfProducts=(buttons)=>{
            for (const button of buttons) {
                const padreofButton= button.parentNode;
                const idProduct= padreofButton.parentNode.getAttribute('id');
                    button.addEventListener('click',()=>{
                        const obj= listaProducts.find(p=>p.id == idProduct);
                        viewAlertAddProductToCar();
                        añadirPorductoCarrito(obj.name,obj.price,obj.img);

                    });
            }
    }
    const viewAlertAddProductToCar=()=>{
        asideAlertAddProdutToCar.classList.toggle('inactive');
    }
    addProductToCarOfProducts(ButtonsProductToCarOfProducts);
    butnAddProductToCart.addEventListener('click',addProductToCarAside);

    const ifHasProductosInCard=()=>{
        const parentOrderCount= document.querySelector('.my-order-content');
        let chils= parentOrderCount.childElementCount;
       return   chils>2
                ?true
                :false;
    }
    
    const deleteProducOfCar= ()=>{
        if(ifHasProductosInCard()){
            const iconstDeleteOfCar= document.querySelectorAll('.btnDelteProdut');
                // console.log(iconstDeleteOfCar);
            iconstDeleteOfCar.forEach(icon=> icon.addEventListener('click',()=>{
                const parent= icon.parentNode;
                const containerOrdes= document.querySelector('.my-order-content');
                containerOrdes.removeChild(parent);
                countProdusctInTheCar();
                priceTotalOfProductsInTheCar();
                }
            ));
        }
    }

    const priceTotalOfProductsInTheCar=()=>{
        const priceTotalOfProducts= document.querySelector('.totalPriceProductOfTheCar');
        if(ifHasProductosInCard()){
            const priceOfProduct=document.querySelectorAll('.priceOfProductCar');
        
        
            let listPrecio = [];
            for (const pricee of priceOfProduct) {
                let precio=parseInt(pricee.textContent);
                listPrecio.push(precio);
            }
            const total = listPrecio.reduce((a,b)=> a+b ,0);
        // console.log(total,priceOfProduct,listPrecio,priceTotalOfProducts);
            priceTotalOfProducts.textContent=`$ ${total}`;
        }else{
            priceTotalOfProducts.textContent= '0';
        }
}


    // añadiendo eventos a nuestros a los elementos
    menuEmail.addEventListener('click',toggleDesktopMenu );
    iconMobileMenu.addEventListener('click',toggleMenuMobile);
    menuCarIcon.addEventListener('click',toggleCarAside);
    iconCloseLisproductDetail.addEventListener('click',toggleCarAside);
    iconCloseProductDetail.addEventListener('click',closeProductDetail);
    btnAceptAlert.addEventListener('click',viewAlertAddProductToCar);
    alertBtnViewCar.addEventListener('click',toggleCarAside);
    
    
    addEventImgViewProducDetail();
    




   