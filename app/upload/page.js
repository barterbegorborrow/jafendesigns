"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useUser } from "@supabase/auth-ui-react"

export default function UploadPage() {
  const [file, setFile] = useState(null)
  const user = useUser()

  const handleUpload = async () => {
    if (!file || !user) return
    const { data, error } = await supabase.storage
      .from("designs")
      .upload(`${user.id}/${file.name}`, file)

    if (error) console.log("Upload error:", error)
    else console.log("Uploaded!", data)
  }

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Design</button>
    </div>
  )
}
