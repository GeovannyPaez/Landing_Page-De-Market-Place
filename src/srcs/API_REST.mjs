const urlAPI= 'https://api.escuelajs.co/api/v1/products'
const limit= '?offset=10&limit=10';

const urlAPICategories= 'https://api.escuelajs.co/api/v1/categories'
const urlUsersAPI= 'https://api.escuelajs.co/api/v1/users/1';

const fecthProducts=async(url)=>{
    try{
        const res = await fetch(url);
        const data = await res.json();

        return data;

    }catch(err){
        console.log(err);
    }
}

const fecthCategory= async(url,idCategory)=>{
    const res = await fetch(url + '/' + idCategory + '/products');
    const data = await res.json();
    return data;
}
const email = 'alv@gmail.com';


const getUser=async() =>{
    try{
        const res = await fetch('https://api.escuelajs.co/api/v1/users');
        const data = await res.json();
        return data;
    }catch{
        console.log(err);
    }
}
const user={
        'avatar':'https://scontent.fbga3-1.fna.fbcdn.net/v/t1.6435-9/122017175_159752475801070_1589720250030790523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ngwk6ptXlCkAX-nygcw&_nc_ht=scontent.fbga3-1.fna&oh=00_AT_V3i2snRf4Epg64NvgyghwGOHvALBRZ9giQatnCAuQNQ&oe=631BC83D',
        'name': 'Alverto',
        'email':'alv@gmail.com',
        'password': '123'
    }
const newDatosUser= {
    "email": "paez@mail.com",
    "name": "Yunior Paez",
    // 'id': '11'
}
const createUser= async()=>{
    try{
        const res = await fetch('https://api.escuelajs.co/api/v1/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        const data = res.json();
        return data;

    }catch(err){
        console.log(err);
    }
}
const checkEmail=async (email)=>{
    console.log(email)
    try{
        const res = fetch('https://api.escuelajs.co/api/v1/users/is-available',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email
            })
        });
        const data = await (await res).json();
        return data;
    }catch{
        console.log(err);
    }
}

const updateUser= async(newDatos)=>{
    /*+'/'+ id*/
    console.log(urlUsersAPI);
    try{
        const res = await fetch(urlUsersAPI,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDatos)
        });
        const data = await res.json();
        return data;
    } catch (err){
        console.log(err);
    }
}


(async()=>{
    const products= await fecthProducts(urlAPI+limit);
    console.log(products);
    const categories = await fecthCategory(urlAPICategories,'1');
    console.log(categories);
    
    // console.log(await createUser());
    console.log(await getUser());
    // console.log(await updateUser(newDatosUser));
    console.log(await getUser());
    // console.log(await checkEmail(email));
})();
