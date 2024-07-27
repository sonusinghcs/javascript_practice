async function fetchDataAsync3() {
    try {
        const a = await fetch(url1);
        const data =  await a.json();
        
        console.log(JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
}
let url1 = "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"

fetchDataAsync3(url1);