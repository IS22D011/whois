// components/Register.tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-yellow-400">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Register
        </h2>

        <div className="space-y-4">
          <div className="transform transition-transform duration-300 hover:translate-x-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner backdrop-blur-md transition-transform duration-300 transform hover:translate-x-2"
            />
          </div>

          <div className="transform transition-transform duration-300 hover:translate-x-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner transition-transform duration-300 transform hover:translate-x-2"
            />
          </div>

          <div className="transform transition-transform duration-300 hover:translate-x-2">
            <Label htmlFor="confirm" className="text-white">Confirm Password</Label>
            <Input 
              id="confirm" 
              type="password" 
              placeholder="••••••••" 
              className="mt-1 bg-white/20 text-white placeholder:text-white/60 shadow-inner transition-transform duration-300 transform hover:translate-x-2"
            />
          </div>

          <Button 
            className="w-full mt-4 bg-white text-pink-600 font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Create Account
          </Button>
        </div>

        <p className="text-white text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  )
}
