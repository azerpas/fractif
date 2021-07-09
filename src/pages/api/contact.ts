import type { NextApiRequest, NextApiResponse } from 'next'
import { addContact } from '../../services/mailchimp';
import { Contact } from '../../types/Contact'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        const contact: Contact = req.body;
        const id = await addContact(contact);
        res.status(200).json({ id });
    }else{
        res.status(401).send("METHOD NOT FOUND");
    }
    
    
}