import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const res = await axios.post("http://localhost:3000/api/login", {
            email: credentials.email,
            password: credentials.password,
          });
          const user = res.data.user;

          // If no error and we have user data, return it
          if (res.status === 200 && user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (error) {
          console.log("Error during authorization:", error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user information in the token
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Add properties to the session object
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
