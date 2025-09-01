"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Connect to Supabase using environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function HomePage() {
  // State to hold design choices
  const [design, setDesign] = useState({
    room: "Living Room",
    wall_color: "White",
    furniture: "Modern Sofa",
    flooring: "Wood",
  });

  // State to hold user's name
  const [name, setName] = useState("");

  // Save design into Supabase table
  async function saveDesign() {
    await supabase.from("designs").insert([{ user_name: name, ...design }]);
    alert("✅ Your design was saved!");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Interior Design Playground</h1>

      {/* Controls */}
      <div className="grid gap-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
        <input
          className="border p-2 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Choose Room:</label>
        <select
          className="border p-2 rounded"
          value={design.room}
          onChange={(e) => setDesign({ ...design, room: e.target.value })}
        >
          <option>Living Room</option>
          <option>Bedroom</option>
          <option>Kitchen</option>
        </select>

        <label>Wall Color:</label>
        <select
          className="border p-2 rounded"
          value={design.wall_color}
          onChange={(e) => setDesign({ ...design, wall_color: e.target.value })}
        >
          <option>White</option>
          <option>Beige</option>
          <option>Gray</option>
          <option>Blue</option>
        </select>

        <label>Furniture:</label>
        <select
          className="border p-2 rounded"
          value={design.furniture}
          onChange={(e) => setDesign({ ...design, furniture: e.target.value })}
        >
          <option>Modern Sofa</option>
          <option>Classic Armchair</option>
          <option>Minimalist Table</option>
        </select>

        <label>Flooring:</label>
        <select
          className="border p-2 rounded"
          value={design.flooring}
          onChange={(e) => setDesign({ ...design, flooring: e.target.value })}
        >
          <option>Wood</option>
          <option>Marble</option>
          <option>Carpet</option>
        </select>

        <button
          className="bg-black text-white p-2 rounded mt-4"
          onClick={saveDesign}
        >
          Save My Design
        </button>
      </div>

      {/* Preview */}
      <div className="mt-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="p-6 rounded-xl shadow bg-white">
          <p><strong>Room:</strong> {design.room}</p>
          <p><strong>Wall Color:</strong> {design.wall_color}</p>
          <p><strong>Furniture:</strong> {design.furniture}</p>
          <p><strong>Flooring:</strong> {design.flooring}</p>
        </div>
      </div>
    </div>
  );
}
