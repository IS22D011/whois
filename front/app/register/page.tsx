"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");

  // handleChange функц нь оролтын утгыг шинэчилнэ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    if (id === "confirm") setConfirmPassword(value);
  };

  // registerSubmit нь бүртгэлийг гүйцэтгэх функц
  const registerSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Формаа submit хийхээс урьдчилан сэргийлэх

    // Нууц үг тохирохгүй бол log хэвлэхгүй
    if (password !== confirm) {
      alert("Нууц үг тохирохгүй байна");
      return; // Нууц үг таарахгүй бол бусад хэсгийг үргэлжлүүлэхгүй
    }

    // Оруулсан мэдээллийг зөвшөөрөгдсөн үед console дээр хэвлэх
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirm);

    // Амжилттай бүртгэл
    alert("Бүртгэл амжилттай!");
  };


 bodybn= {
    "action":"register",
    "email":email,
    "password":password

  }

fetch("url",{
    body:JSON.stringify.bodybn
}).then(res=>res.json())

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-yellow-400">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Register
        </h2>
        <form onSubmit={registerSubmit}>

          <div className="space-y-4">
            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                value={email}
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                required
                onChange={handleChange}
                className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner backdrop-blur-md transition-transform duration-300 transform hover:translate-x-2"
              />
            </div>

            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                value={password}
                id="password" 
                type="password" 
                placeholder="••••••••"
                required
                onChange={handleChange} 
                className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner transition-transform duration-300 transform hover:translate-x-2"
              />
            </div>

            <div className="transform transition-transform duration-300 hover:translate-x-2">
              <Label htmlFor="confirm" className="text-white">Confirm Password</Label>
              <Input 
                value={confirm}
                id="confirm" 
                type="password" 
                placeholder="••••••••"
                required 
                onChange={handleChange}
                className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner transition-transform duration-300 transform hover:translate-x-2"
              />
            </div>

            <Button 
              className="w-full mt-4 bg-white text-pink-600 font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Create Account
            </Button>
          </div>
        </form>

        <p className="text-white text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
}
