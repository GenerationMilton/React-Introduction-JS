// Performance and multiple async await

//Fetch API with Async/ Await
const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
    try {
        //url_1
        const inicio = performance.now();
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data);

        //url2
        const response2 = await fetch(url2);
        if(!response2.ok){
            throw new Error('Hubo un error...')
        }
        const data2 = await response2.json()
        console.log(data2);

        //url3
        const response3 = await fetch(url);
        if(!response3.ok){
            throw new Error('Hubo un error...')
        }
        const data3 = await response3.json()
        console.log(data3);
        
        const fin = performance.now();

        console.log(`El resultado de la PRIMER funcion es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message)
    }
 
}


consultarAPI()

const consultarAPI2 = async () => {
    try {
        //url_1
        const inicio = performance.now();

        //init fetch in the same time
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);

        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()]);

        //url1
        console.log(data);

       //url2
        console.log(data2);

        //url3
        console.log(data3);
        
        const fin = performance.now();

        console.log(`El resultado de la SEGUNDA funcion es: ${fin - inicio} ms`);
    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI2();