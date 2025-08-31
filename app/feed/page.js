"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function FeedPage() {
  const [designs, setDesigns] = useState([])

  useEffect(() => {
    const fetchDesigns = async () => {
      const { data, error } = await supabase
        .storage
        .from("designs")
        .list("", { limit: 100, offset: 0 })
      if (error) console.log(error)
      else setDesigns(data)
    }
    fetchDesigns()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {designs.map((design) => (
        <img
          key={design.name}
          src={`https://your-supabase-url.supabase.co/storage/v1/object/public/designs/${design.name}`}
          alt={design.name}
        />
      ))}
    </div>
  )
}
