import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'


const Query: Required<QueryResolvers<ResolverContext>> = {
    contact(_parent, _args, _context, _info) {
      return { firstName: "hello", lastName: "world", email: "helloworld@gmail.com", listId: "aaa"}
    }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
    addContact(_parent, _args, _context, _info) {
      return 2;
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Query, Mutation }