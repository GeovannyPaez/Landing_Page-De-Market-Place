
export const formatPrice=(price)=>{
    const newPrice= new window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency: 'USD'
    }).format(price);

    return newPrice
}