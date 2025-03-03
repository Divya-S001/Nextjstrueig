
// export async function POST(req) {
//   let users = [
//     {
//       name: "Admin User",
//       email: "admin@example.com",
//       password: "admin123",
//       role: "admin",
//     },
//     {
//       name: "User1",
//       email: "user1@example.com",
//       password: "password123",
//       role: "user",
//     },
//   ];

//   try {
//     const { name, email, password } = await req.json();

//     let user = users.find((u) => u.email === email);

//     if (!user) {
//       const newUser = { name, email, password, role: "user" };
//       users.push(newUser);

//       return new Response(
//         JSON.stringify({ message: "Registration successful", user: newUser }),
//         { status: 201 }
//       );
//     }

//     if (user.password !== password) {
//       return new Response(JSON.stringify({ message: "Invalid credentials" }), {
//         status: 401,
//       });
//     }

//     return new Response(JSON.stringify({ message: "Login successful", user }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }



// import NextAuth from 'next-auth'
// // import AppleProvider from 'next-auth/providers/apple'
// // import FacebookProvider from 'next-auth/providers/facebook'
// // import GoogleProvider from 'next-auth/providers/google'
// // import EmailProvider from 'next-auth/providers/email'
// import GithubProvider from "next-auth/providers/github";

// export default NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET
//     }),
   
//   ]
// })