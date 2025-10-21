import Transaction from "../models/transaction.model.js";

const transactionResolver = {
    Query: {
        transactions: async (_, __dirname, context) => {
            try {
                if (!context.getUser()) throw new Error("Unauthorized");
                const userId = await context.getUser()._id;

                const transactions = await Transaction.find({ user: userId });
            } catch (err) {

            }
        }
    },
    Mutation: {},
};

export default transactionResolver;