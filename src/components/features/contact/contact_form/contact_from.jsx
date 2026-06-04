"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact_from() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const loadingToast = toast.loading("Sending Message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Contect-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Email sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.log(error);

      toast.dismiss(loadingToast);

      toast.error("An error occurred");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-row justify-stretch items-stretch gap-4 w-full">  
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="border border-n-400 border-dashed p-3 w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="border border-n-400 border-dashed p-3 w-[60%]"
      />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
        className="border border-n-400 border-dashed p-3 h-40"
      />
        
      <button type="submit" disabled={loading} className="border p-3">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
