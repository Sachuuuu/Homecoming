"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  SendHorizonal,
  TriangleAlert
} from "lucide-react";

type AttendanceStatus = "Attending" | "Not Attending";

type FormState = {
  fullName: string;
  contactNumber: string;
  guests: string;
  attendanceStatus: AttendanceStatus;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  contactNumber: "",
  guests: "1",
  attendanceStatus: "Attending",
  message: ""
};

function normalizeSriLankanPhone(value: string) {
  const cleaned = value.replace(/[^\d+]/g, "");

  if (/^\+947\d{8}$/.test(cleaned)) {
    return cleaned;
  }

  if (/^947\d{8}$/.test(cleaned)) {
    return `+${cleaned}`;
  }

  if (/^07\d{8}$/.test(cleaned)) {
    return `+94${cleaned.slice(1)}`;
  }

  return cleaned;
}

function isValidSriLankanPhone(value: string) {
  return /^\+947\d{8}$/.test(value) || /^07\d{8}$/.test(value);
}

export function RSVPForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: ""
  });

  const isValid = useMemo(() => {
    return (
      form.fullName.trim().length > 1 &&
      form.contactNumber.trim().length > 0 &&
      Number(form.guests) >= 0
    );
  }, [form]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    if (!isValid) {
      setFeedback({
        type: "error",
        message: "Please complete all required fields before submitting."
      });
      return;
    }

    if (!isValidSriLankanPhone(form.contactNumber)) {
      setFeedback({
        type: "error",
        message:
          "Contact number must be in the format 0713099406 or +94713099406."
      });
      return;
    }

    const normalizedContactNumber = normalizeSriLankanPhone(form.contactNumber);

    setLoading(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          contactNumber: normalizedContactNumber,
          guests: Number(form.guests),
          attendanceStatus: form.attendanceStatus,
          message: form.message.trim()
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed.");
      }

      setFeedback({
        type: "success",
        message: "Thank you for your RSVP. We’re so excited to celebrate with you."
      });
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your RSVP.";

      setFeedback({
        type: "error",
        message
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-6 rounded-[2rem] border border-[#C6A15B]/30 bg-transparent p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-[#F6EFEA]"
          >
            Full Name <span className="text-[#C6A15B]">*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, fullName: e.target.value }))
            }
            required
            className="w-full rounded-2xl border border-[#C6A15B]/30 bg-[#2A1116] px-4 py-3 text-sm text-[#F6EFEA] outline-none transition placeholder:text-[#8A6D72] focus:border-[#C6A15B]"
            placeholder="Enter your full name"
          />
        </div>

        {/* Contact */}
        <div>
          <label
            htmlFor="contactNumber"
            className="mb-2 block text-sm font-medium text-[#F6EFEA]"
          >
            Contact Number <span className="text-[#C6A15B]">*</span>
          </label>

          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            inputMode="numeric"
            value={form.contactNumber}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d+]/g, "");

              if (value.includes("+")) {
                if (!value.startsWith("+")) {
                  value = value.replace(/\+/g, "");
                } else {
                  value = "+" + value.slice(1).replace(/\+/g, "");
                }
              }

              if (value.startsWith("+")) value = value.slice(0, 12);
              else value = value.slice(0, 10);

              setForm((prev) => ({
                ...prev,
                contactNumber: value
              }));
            }}
            required
            className="w-full rounded-2xl border border-[#C6A15B]/30 bg-[#2A1116] px-4 py-3 text-sm text-[#F6EFEA] outline-none transition placeholder:text-[#8A6D72] focus:border-[#C6A15B]"
            placeholder="0711234567 or +94711234567"
          />

          <p className="mt-1 text-xs text-[#C7A8AB]">
            Accepted: 0711234567 or +94711234567
          </p>
        </div>

        {/* Guests */}
        <div>
          <label
            htmlFor="guests"
            className="mb-2 block text-sm font-medium text-[#F6EFEA]"
          >
            Number of Guests <span className="text-[#C6A15B]">*</span>
          </label>

          <input
            id="guests"
            name="guests"
            type="number"
            min="0"
            value={form.guests}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, guests: e.target.value }))
            }
            required
            className="w-full rounded-2xl border border-[#C6A15B]/30 bg-[#2A1116] px-4 py-3 text-sm text-[#F6EFEA] outline-none transition focus:border-[#C6A15B]"
          />
        </div>

        {/* Attendance */}
        <div className="sm:col-span-2">
          <label
            htmlFor="attendanceStatus"
            className="mb-2 block text-sm font-medium text-[#F6EFEA]"
          >
            Attendance Status <span className="text-[#C6A15B]">*</span>
          </label>

          <select
            id="attendanceStatus"
            name="attendanceStatus"
            value={form.attendanceStatus}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                attendanceStatus: e.target.value as AttendanceStatus
              }))
            }
            className="w-full rounded-2xl border border-[#C6A15B]/30 bg-[#2A1116] px-4 py-3 text-sm text-[#F6EFEA] outline-none transition focus:border-[#C6A15B]"
          >
            <option value="Attending">Attending</option>
            <option value="Not Attending">Not Attending</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-[#F6EFEA]"
          >
            Message or Wishes
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full rounded-2xl border border-[#C6A15B]/30 bg-[#2A1116] px-4 py-3 text-sm text-[#F6EFEA] outline-none transition placeholder:text-[#8A6D72] focus:border-[#C6A15B]"
            placeholder="Share your blessings and wishes..."
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full border border-[#C6A15B] bg-[linear-gradient(135deg,#7A1626,#5B0F1A)] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_40px_rgba(91,15,26,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(91,15,26,0.45)] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={16} />
            Sending RSVP...
          </>
        ) : (
          <>
            <SendHorizonal className="mr-2" size={16} />
            Submit RSVP
          </>
        )}
      </button>
    </form>
  );
}