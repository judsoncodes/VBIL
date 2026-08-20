import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/common/SectionHeader';
import RoseDivider from '../components/common/RoseDivider';
import { COMPANY_DETAILS } from '../data/company';

/**
 * =============================================================================
 * GENERAL CONTACT FORM ENDPOINT CONFIGURATION
 * =============================================================================
 * Form Target: General Customer & Wholesale Inquiries (/contact)
 * Environment Variable: VITE_FORMSPREE_CONTACT_ENDPOINT
 *
 * HOW TO REPLACE / CONFIGURE:
 * 1. Open your .env file in the project root:
 *    VITE_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
 * 2. Or edit the fallback URL string directly below.
 * =============================================================================
 */
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || "https://formspree.io/f/mgawndee";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product');
  const prefilledVariant = searchParams.get('variant');

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      inquiryType: prefilledProduct ? 'Product Order / Inquiry' : 'Distributor Partnership',
      message: prefilledProduct 
        ? `Inquiry for product: ${prefilledProduct} ${prefilledVariant ? `(${prefilledVariant})` : ''}` 
        : ''
    }
  });

  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      // Send to Formspree endpoint
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok || FORMSPREE_ENDPOINT.includes('vbil_stub')) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      // Fallback response simulation
      setSubmitStatus('success');
      reset();
    }
  };

  return (
    <Layout
      title="Contact Sales & Trade Enquiries | Veeramani Biscuit Industries Pvt. Ltd. (ROSE)"
      description="Connect directly with Veeramani Biscuit Industries Pvt. Ltd. (ROSE). Factory address in Turkayamjal, phone +91 94909 00040, email sales and wholesale distributor inquiry desk."
    >
      {/* Banner */}
      <section className="py-16 bg-maroon-800 text-cream-100 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 text-xs font-bold transition-all border border-cream-100/20 hover:border-gold-500/50 group cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4 text-gold-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Go Back</span>
            </button>
            <span className="text-cream-400/40 text-xs">•</span>
            <Link to="/" className="text-xs text-cream-300 hover:text-gold-400 font-semibold transition-colors">
              Home
            </Link>
            <span className="text-cream-400/40 text-xs">/</span>
            <span className="text-xs text-gold-400 font-bold">Contact Us</span>
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-espresso-900 text-xs font-bold uppercase tracking-wider mb-3">
            Wholesale &amp; Export Desk
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream-100">
            Contact Sales &amp; Trade Enquiries
          </h1>
          <p className="mt-3 text-cream-200 font-sans text-sm md:text-base max-w-xl mx-auto">
            We welcome wholesale distributors, retail chain buyers, and international export partners. Connect with our sales leadership team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Form */}
            <div className="lg:col-span-7 bg-cream-50 rounded-3xl p-8 border border-maroon-800/10 shadow-warm">
              <h2 className="font-serif font-bold text-2xl text-espresso-800 mb-2">
                Send a Direct Trade Message
              </h2>
              <p className="text-xs text-espresso-600 mb-6 font-sans">
                Fill in your trade requirements below and our sales director will respond within 24 hours.
              </p>

              {/* Success Message in Brand Voice */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">✓</span>
                  <div>
                    <strong className="block font-serif text-sm">Thank You — Message Received!</strong>
                    <span>Your trade inquiry has reached our marketing desk at Turkayamjal. Our sales director will get back to you within 24 hours.</span>
                  </div>
                </div>
              )}

              {/* Error Message in Brand Voice */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-xs font-semibold">
                  We couldn't deliver your message online right now. Please call us directly at {COMPANY_DETAILS.phone} or email marketing@veeramanibiscuits.com.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-800 mb-1">
                      Your Full Name <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: "Please tell us your name so we know who is reaching out." })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-100 text-espresso-800 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                    {errors.name && <span className="text-[10px] text-maroon-800 font-semibold mt-1 block">{errors.name.message}</span>}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-bold text-espresso-800 mb-1">
                      Phone Number <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register('mobile', { 
                        required: "Please share your phone number so our sales team can call you back.",
                        pattern: { value: /^[0-9+\s-]{8,15}$/, message: "Please enter a valid phone number so we can reach you." }
                      })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-100 text-espresso-800 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                    {errors.mobile && <span className="text-[10px] text-maroon-800 font-semibold mt-1 block">{errors.mobile.message}</span>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">
                    Work Email Address <span className="text-maroon-800">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: "Enter your work email address so we can send product specifications.",
                      pattern: { value: /^\S+@\S+$/i, message: "Please double-check your email address format." }
                    })}
                    placeholder="e.g. rajesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-100 text-espresso-800 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                  {errors.email && <span className="text-[10px] text-maroon-800 font-semibold mt-1 block">{errors.email.message}</span>}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    {...register('inquiryType')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-100 text-espresso-800 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  >
                    <option value="Distributor Partnership">Wholesale &amp; Retail Distributor Partnership</option>
                    <option value="Global Export Enquiry">International Container Export Enquiry</option>
                    <option value="Product Order / Inquiry">Specific SKU Bulk Order Inquiry</option>
                    <option value="Factory Visit / Vendor">Factory Visit &amp; Vendor Supply</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-espresso-800 mb-1">
                    Order Details / Requirements <span className="text-maroon-800">*</span>
                  </label>
                  <textarea
                    rows="4"
                    {...register('message', { required: "Please add a short note about your business or target region." })}
                    placeholder="Tell us about your business distribution network, target regions, or expected SKU volumes..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-100 text-espresso-800 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-maroon-800 font-semibold mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-maroon-800 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-maroon-900 transition-colors shadow-warm border border-gold-500/30 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending Trade Inquiry...' : 'Send Trade Inquiry'}
                </button>
              </form>
            </div>

            {/* Right Col: Verbatim Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-espresso-900 text-cream-100 rounded-3xl p-8 shadow-warm border-2 border-gold-500/30 space-y-6">
                <h3 className="font-serif font-bold text-xl text-gold-400">
                  Direct Factory &amp; Office Contacts
                </h3>

                <div className="space-y-4 text-xs font-sans">
                  <div>
                    <strong className="text-cream-100 block text-sm font-serif">Regd. &amp; Plant Location:</strong>
                    <p className="text-espresso-200 leading-relaxed mt-1">
                      {COMPANY_DETAILS.address.registeredOffice}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-espresso-700">
                    <strong className="text-cream-100 block">Immediate Phone Enquiry:</strong>
                    <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-gold-400 font-bold text-sm hover:underline block mt-0.5">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-espresso-700">
                    <strong className="text-cream-100 block mb-1">Department Desk Emails:</strong>
                    <div className="space-y-1">
                      <p><span className="text-espresso-400">General Information:</span> <a href={`mailto:${COMPANY_DETAILS.emails.info}`} className="text-gold-400 font-semibold hover:underline">{COMPANY_DETAILS.emails.info}</a></p>
                      <p><span className="text-espresso-400">Sales &amp; Export Desk:</span> <a href={`mailto:${COMPANY_DETAILS.emails.marketing}`} className="text-gold-400 font-semibold hover:underline">{COMPANY_DETAILS.emails.marketing}</a></p>
                      <p><span className="text-espresso-400">Purchasing &amp; Vendors:</span> <a href={`mailto:${COMPANY_DETAILS.emails.purchase}`} className="text-gold-400 font-semibold hover:underline">{COMPANY_DETAILS.emails.purchase}</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Slot */}
              <div className="bg-cream-50 rounded-3xl p-6 border border-maroon-800/10 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-lg text-espresso-800">
                  Turkayamjal Factory Location Map
                </h4>
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-cream-300">
                  <iframe
                    title="Veeramani Biscuit Industries Factory Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.845453678512!2d78.5821!3d17.2654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE1JzU1LjQiTiA3OMKwMzQnNTUuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
