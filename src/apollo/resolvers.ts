import { QueryResolvers, MutationResolvers } from 'graphql-let/__generated__/__types__'
import { addContact } from '../services/mailchimp'
import { ResolverContext } from './apollo'


const Query: Required<QueryResolvers<ResolverContext>> = {
    contact(_parent, _args, _context, _info) {
        return { firstName: "hello", lastName: "world", email: "helloworld@gmail.com", listId: "aaa"}
    }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
    async addContact(_parent, _args, _context, _info) {
        const id = await addContact({..._args});
        return id;
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Query, Mutation }