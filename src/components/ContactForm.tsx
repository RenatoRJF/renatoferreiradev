"use client";

import cx from "classnames";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/app/contact/actions";

export default function ContactForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  const inputClasses = cx(
    "w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-xs"
  );

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <div className="mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">Send me an email</h2>

      <div className="flex justify-start">
        <form action={formAction} className="space-y-6 w-full md:w-3/4 lg:w-1/2">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputClasses}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClasses}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={cx(inputClasses, "resize-none")}
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-white hover:bg-blue-50 text-black hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black text-xs shadow-lg hover:shadow-xl cursor-pointer hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
