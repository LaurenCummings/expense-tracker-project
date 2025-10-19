import { users } from "../dummyData/data.js";

const userResolver = {
    Mutation: {
        signUp: async(_, {input}, context) => {

        }
    },
    Query: {
        users: (_,_,{ req, res }) => {
            return users
        },
        user: (_, { userId }) => {
            return users.find((user) => user._id === userId);
        }
    },
};

export default userResolver;