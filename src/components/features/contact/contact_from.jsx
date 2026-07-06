"use client";

import { useState } from "react";
import { toast } from "sonner";
import Button from "../../ui/button/button";
import { sendContact } from "@/services/email.service";

const BORDER_STYLES = "border border-n-400 border-dashed";

export default function Contact_from({ placeholderName, placeholderEmail, placeholderMessage, process, success }) {
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
      const data = await sendContact(form);

      toast.dismiss(loadingToast);

      if (!data.error) {
        toast.success("Email sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email")
      }
    } catch (error) {
      console.log(error);

      toast.dismiss(loadingToast);

      toast.error("An error occurred")
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-n-300 p-3 w-full">
      <div className="flex lg:flex-row flex-col justify-stretch items-stretch gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder={placeholderName}
          value={form.name}
          onChange={handleChange}
          required
          className={`${BORDER_STYLES} p-3 w-full`}
        />

        <input
          type="email"
          name="email"
          placeholder={placeholderEmail}
          value={form.email}
          onChange={handleChange}
          required
          className={`${BORDER_STYLES} p-3 lg:w-[60%] w-full`}
        />
      </div>

      <textarea
        name="message"
        placeholder={placeholderMessage}
        value={form.message}
        onChange={handleChange}
        required
        className={`${BORDER_STYLES} p-3 h-40`}
      />

      <Button
        type="submit"
        disabled={loading}
        variant="secondary"
      >
        {loading ? process : success}
      </Button>
    </form>
  );
}
