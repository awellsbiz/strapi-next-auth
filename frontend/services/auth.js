const strapiUrl = process.env.STRAPI_URL || "http://localhost:1337";

export async function signIn({ email, password }) {
    try {

    const res = await fetch(`${strapiUrl}/auth/local`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        bodt: JSON.stringify({
            identifier: email,
            password,
        })
        
    });

    if(!res.ok) {
        throw new Error('Authentication failed');
    }
    const data = await res.json();
    return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}