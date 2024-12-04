import { prisma } from "../../db.js";

interface createPostInput {
  title: string;
  username: string;
}

const resolvers = {
  Mutation: {
    createPost: async (_parent: any, args: createPostInput) => {
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
