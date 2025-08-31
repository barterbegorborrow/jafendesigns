"use client"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function GalleryPage() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from("designs")
        .list("public", { limit: 10 }) // fetch files from designs/public/

      if (error) {
        console.error(error)
      } else {
        const urls = data.map(
          (file) =>
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/designs/public/${file.name}`
        )
        setImages(urls)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((url, i) => (
        <div key={i} className="rounded-xl overflow-hidden shadow">
          <img src={url} alt="design" className="w-full h-auto" />
        </div>
      ))}
    </div>
  )
}
