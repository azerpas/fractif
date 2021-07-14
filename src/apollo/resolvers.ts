import { QueryResolvers, MutationResolvers } from '../../.cache/__types__'
//import { addContact as AddContact } from '../services/mailchimp'
import { ResolverContext } from './apollo'


const Query: Required<QueryResolvers<ResolverContext>> = {
    contact(_parent, _args, _context, _info) {
        return { firstName: "hello", lastName: "world", email: "helloworld@gmail.com", listId: "aaa"}
    }
}
/*
const Mutation: Required<MutationResolvers<ResolverContext>> = {
    async addContact(_parent, _args, _context, _info) {
        //const id = await AddContact({..._args});
        return {};
    },
}
*/

const Mutation = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Query, Mutation }