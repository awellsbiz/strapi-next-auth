export const fetchStrapi = async (path, options ={}) => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const mergedOptions = {
        ...defaultOptions,
        ...options,
    };
    const reqUrl =`$ {process.env.STRAPI_URL || 'http://localhost:1337'}${path}`
    const res = await fetch(reqUrl, mergedOptions);
    
    const data = await res.json();
    return data;
}