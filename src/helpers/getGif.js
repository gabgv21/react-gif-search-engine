export const getGifs = async( category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=8k5mmt49hVm04O9wCVI3GE3P8od30Zem`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    //console.log(gifs);
    return gifs;
};