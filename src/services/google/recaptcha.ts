import fetch from 'isomorphic-unfetch';

const check = async ({response, ip}: {response: string, ip: string}) => {
    if(!process.env.RECAPTCHA_SECRET) throw new Error(`Recaptcha secret env not set`);
    const data = [`secret=${process.env.RECAPTCHA_SECRET}`, `response=${response}`, ip ? `remoteip=${ip}` : ``].join("&");
    return fetch("https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }
    );
}

export default check;