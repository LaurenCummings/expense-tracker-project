import { users } from "../dummyData/data.js";
import User from "../models/user.model.js";

const userResolver = {
    Mutation: {
        signUp: async(_, {input}, context) => {
            try {
                const { username, name, password, gender } = input;

                if (!username || !name || !password || !gender) {
                    throw new Error("All fields are required");
                }
                const existingUser = await User.findOne({ username })

            } catch (err) {

            }
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