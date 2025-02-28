// 

export async function POST(req) {
    let users = [
      { name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin" },
      { name: "User1", email: "user1@example.com", password: "password123", role: "user" }
    ];
  
    try {
      const { name, email, password } = await req.json();
      
      let user = users.find((u) => u.email === email);
  
      if (!user) {
        const newUser = { name, email, password, role: "user" };
        users.push(newUser);
  
        return new Response(
          JSON.stringify({ message: "Registration successful", user: newUser }),
          { status: 201 }
        );
      }
  
      if (user.password !== password) {
        return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
      }
  
      return new Response(
        JSON.stringify({ message: "Login successful", user }),
        { status: 200 }
      );
  
    } catch (error) {
      return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
  }
  