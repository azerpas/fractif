import type { NextApiRequest, NextApiResponse } from 'next'
import check from '../../services/google/recaptcha';
import { addContact } from '../../services/mailchimp';
import { Contact } from '../../types/Contact'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        const result = await check({response: req.body.response, ip: req.socket.remoteAddress});
        const resultAsJson = await result.json();
        if(resultAsJson.success){
            if(resultAsJson.score > 0.3){
                const contact: Contact = req.body;
                //const id = await addContact(contact);
                const id = 4;
                console.log(contact);
                res.status(200).json({ id });
            }else res.status(403).send("SCORE TOO LOW");
        }else res.status(401).send(`${resultAsJson['error-codes'][0]}`);
    }else{
        res.status(401).send("METHOD NOT FOUND");
    }
}