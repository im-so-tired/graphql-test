import { ApolloServer } from "apollo-server";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();
const users = [
  { id: 1, email: "mail@mail.ru", phone: "467326742", password: "qwezxc" },
];
const resolvers = {
  Query: {
    getUsers: () => users,
  },
  Mutation: {
    addUser: (parent, args) => {
      const user = {
        email: args.email,
        phone: args.phone,
        password: args.password,
      };
      users.push(user);
      return user;
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
