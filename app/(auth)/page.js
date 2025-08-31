"use client"
import { Auth } from "@supabase/auth-ui-react"
import { supabase } from "@/lib/supabaseClient"

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Auth supabaseClient={supabase} />
    </div>
  )
}
