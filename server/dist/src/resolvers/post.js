import { prisma } from "../../db.js";
const resolvers = {
    Mutation: {
        createPost: async (_parent, args) => {
            console.log(args);
        },
    },
    Query: {
        getAllPosts: async () => {
            return await prisma.post.findMany(); // Easy way to get a list of posts -> [post1, ....]
        },
    },
};
export default resolvers;
