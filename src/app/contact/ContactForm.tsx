'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams?.get("service") ?? "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    eventLocation: "",
    services: preselectedService ? [preselectedService] : ["Bridal Makeup"],
    preferredLook: "",
    additionalMessage: "",
    botCheckField: ""
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null
  });

  const availableServices = [
    "Bridal Makeup",
    "Bridal Hairstyling",
    "Saree & Lehenga Draping",
    "Guest & Family Makeup"
  ];

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botCheckField) {
      console.warn("Spam bot submission trapped.");
      return;
    }

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please enter your full name and contact number."
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || process.env.VITE_FORM_ENDPOINT;

    try {
      if (formEndpoint && formEndpoint !== "YOUR_FORM_ENDPOINT_HERE") {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: formData.fullName,
            phone: formData.phone,
            eventType: formData.eventType,
            eventDate: formData.eventDate,
            location: formData.eventLocation,
            services: formData.services.join(", "),
            preferredLook: formData.preferredLook,
            message: formData.additionalMessage,
            _subject: `New Bridal Enquiry from ${formData.fullName}`
          })
        });

        if (response.ok) {
          setStatus({ submitting: false, success: true, error: null });
        } else {
          throw new Error("Unable to submit form. Please contact via WhatsApp directly.");
        }
      } else {
        await new Promise((res) => setTimeout(res, 1200));
        setStatus({ submitting: false, success: true, error: null });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong while sending your enquiry. Please use WhatsApp directly.";
      setStatus({
        submitting: false,
        success: false,
        error: message
      });
    }
  };

  const whatsappPreFilledUrl = `https://wa.me/919940472471?text=${encodeURIComponent(
    "Hi Yamini, I'd like to enquire about bridal makeup for my wedding date."
  )}`;

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-1">
          Reservation Form
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy">
          Send Booking Enquiry
        </h2>
        <p className="text-xs text-burgundy/60 mt-1">
          Fill in your event details below and Yamini will personally review your date availability.
        </p>
      </div>

      {status.success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-ivory border-2 border-gold text-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-burgundy">
            Thank You!
          </h3>
          <p className="text-burgundy/80 text-sm leading-relaxed max-w-md mx-auto">
            We have received your bridal enquiry. We&apos;ll get back to you soon with date availability and consultation details.
          </p>
          <div className="pt-2">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-3 px-6"
            >
              Follow up on WhatsApp
            </a>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="botCheckField"
            value={formData.botCheckField}
            onChange={(e) => setFormData({ ...formData, botCheckField: e.target.value })}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {status.error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>{status.error}</span>
            </div>
          )}

          {/* Full Name & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Mahalakshmi S."
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-base focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9940472471"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-base focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          {/* Event Type & Date Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                Event Type
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="Wedding">Wedding / Muhurtham</option>
                <option value="Engagement">Engagement Ceremony</option>
                <option value="Reception">Reception</option>
                <option value="Other">Other Bridal Event</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                Event Date
              </label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          {/* Event Location */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
              Event Location / Venue
            </label>
            <input
              type="text"
              value={formData.eventLocation}
              onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
              placeholder="e.g. Mandapam / Hotel in T. Nagar, Chennai"
              className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Services Required Checkboxes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
              Services Required (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {availableServices.map((service) => {
                const isChecked = formData.services.includes(service);
                return (
                  <label
                    key={service}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs transition-colors ${
                      isChecked
                        ? "bg-ivory border-gold font-medium text-burgundy"
                        : "border-gold/20 text-burgundy/80 hover:bg-ivory/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(service)}
                      className="w-4 h-4 text-gold rounded border-gold/40 focus:ring-gold"
                    />
                    <span>{service}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Preferred Bridal Look */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
              Preferred Bridal Look
            </label>
            <input
              type="text"
              value={formData.preferredLook}
              onChange={(e) => setFormData({ ...formData, preferredLook: e.target.value })}
              placeholder="e.g. Traditional South Indian, Soft Glam, Dewy Neutral"
              className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
              Additional Message / Outfit Details
            </label>
            <textarea
              rows={3}
              value={formData.additionalMessage}
              onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
              placeholder="Tell us about your saree colors, timings, or any specific styling requests..."
              className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-ivory/30 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="btn-gold w-full py-4 text-base shadow-gold-soft hover:shadow-gold-hover flex items-center justify-center gap-2"
            id="submit-booking-enquiry-btn"
          >
            {status.submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending Booking Enquiry...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Booking Enquiry</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-burgundy/60 italic pt-1">
            We look forward to hearing from you!
          </p>
        </form>
      )}
    </div>
  );
}

export { ContactForm };
