import Transaction from "../models/transaction.model.js";

const transactionResolver = {
    Query: {
        transactions: async (_, __dirname, context) => {
            try {
                if (!context.getUser()) throw new Error("Unauthorized");
                const userId = await context.getUser()._id;

                const transactions = await Transaction.find({ userId: userId });
                return transactions;
            } catch (err) {
                console.error("Error getting transactions:", err);
                throw new Error("Error getting transactions");
            }
        },
    },
    Mutation: {},
};

export default transactionResolver;