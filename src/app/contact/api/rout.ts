export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { name, email, message } = body;
  
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Simulate API processing (replace this with actual email sending logic)
      console.log("Received message:", { name, email, message });
  
      return new Response(JSON.stringify({ success: true, message: "Message sent successfully!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  