import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [selectedDay, setSelectedDay] = useState(6);
  const [selectedTime, setSelectedTime] = useState("02:00 PM");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: "$50k - $100k",
    timeline: "1-3 Months",
    description: ""
  });

  const calendarDays = [
    { day: 28, currentMonth: false },
    { day: 29, currentMonth: false },
    { day: 30, currentMonth: false },
    { day: 31, currentMonth: false },
    { day: 1, currentMonth: true },
    { day: 2, currentMonth: true },
    { day: 3, currentMonth: true },
    { day: 4, currentMonth: true },
    { day: 5, currentMonth: true },
    { day: 6, currentMonth: true },
    { day: 7, currentMonth: true },
    { day: 8, currentMonth: true },
    { day: 9, currentMonth: true },
    { day: 10, currentMonth: true },
    { day: 11, currentMonth: true },
    { day: 12, currentMonth: true },
    { day: 13, currentMonth: true },
    { day: 14, currentMonth: true },
    { day: 15, currentMonth: true },
    { day: 16, currentMonth: true },
    { day: 17, currentMonth: true },
    { day: 18, currentMonth: true },
    { day: 19, currentMonth: true },
    { day: 20, currentMonth: true },
    { day: 21, currentMonth: true },
    { day: 22, currentMonth: true },
    { day: 23, currentMonth: true },
    { day: 24, currentMonth: true },
    { day: 25, currentMonth: true },
    { day: 26, currentMonth: true },
    { day: 27, currentMonth: true },
    { day: 28, currentMonth: true },
    { day: 29, currentMonth: true },
    { day: 30, currentMonth: true },
    { day: 1, currentMonth: false }
  ];

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Meeting Confirmed!\nDate: November ${selectedDay}, 2024\nTime: ${selectedTime}\nName: ${formData.fullName}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-paper min-h-screen pt-12 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="border-b border-line pb-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 leading-[1.1] text-ink max-w-2xl mb-6">
            Schedule Your Strategic Consultation
          </h1>
          <p className="text-stone text-base md:text-lg max-w-xl">
            Take the first step toward engineering excellence. Select a time that works for you to discuss your project with our lead architects.
          </p>
        </div>
      </section>

      {/* Booking Form Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Calendar Picker (Left) */}
          <div className="bg-white border border-line rounded-lg p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8 border-b border-line pb-4">
              <h3 className="font-display font-700 text-lg text-ink">November 2024</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:text-gold transition-colors" aria-label="Previous Month">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="p-1 hover:text-gold transition-colors" aria-label="Next Month">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Days Headings */}
            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-stone/60 tracking-wider mb-4">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

            {/* Grid of Days */}
            <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center text-xs md:text-sm mb-8">
              {calendarDays.map((d, index) => {
                const isSelected = d.day === selectedDay && d.currentMonth;
                return (
                  <button
                    key={index}
                    disabled={!d.currentMonth}
                    onClick={() => setSelectedDay(d.day)}
                    className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center transition-all duration-300 font-medium ${
                      !d.currentMonth
                        ? "text-stone/20 cursor-default"
                        : isSelected
                        ? "bg-gold text-ink font-bold shadow-md"
                        : "text-ink hover:bg-line/30"
                    }`}
                  >
                    {d.day}
                  </button>
                );
              })}
            </div>

            {/* Available Time Slots */}
            <div>
              <p className="text-[10px] font-bold tracking-widest text-stone uppercase mb-4">AVAILABLE TIME SLOTS (EST)</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 border text-[11px] font-bold tracking-wider rounded transition-all duration-300 ${
                        isSelected
                          ? "bg-ink border-ink text-white font-bold"
                          : "border-line text-ink hover:border-gold hover:text-gold"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Fields (Right) */}
          <div className="bg-white border border-line rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="font-display font-700 text-lg text-ink mb-8 border-b border-line pb-4">Consultation Details</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">FULL NAME</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              {/* Business Email */}
              <div>
                <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">BUSINESS EMAIL</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">COMPANY NAME</label>
                <input
                  required
                  type="text"
                  name="company"
                  placeholder="Corporation Inc."
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              {/* Budget & Timeline dropdowns */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">ESTIMATED BUDGET</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k - $250k">$100k - $250k</option>
                    <option value="$250k+">$250k+</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">TIMELINE</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6+ Months">6+ Months</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="text-[9px] font-bold tracking-widest text-stone uppercase block mb-1">PROJECT DESCRIPTION</label>
                <textarea
                  required
                  name="description"
                  rows="3"
                  placeholder="Briefly describe your objectives..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-line pb-2.5 text-xs md:text-sm text-ink placeholder-stone/40 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#DCAE3D] hover:bg-[#C59B32] text-ink font-display text-xs font-bold tracking-wider py-4 text-center transition-colors duration-300 uppercase rounded"
              >
                CONFIRM MEETING
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-line bg-line/20 py-8 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-display text-2xl md:text-3xl font-700 text-ink">12h</h4>
            <p className="text-[9px] font-bold tracking-widest text-stone uppercase mt-1">AVE RESPONSE TIME</p>
          </div>
          <div>
            <h4 className="font-display text-2xl md:text-3xl font-700 text-ink">100%</h4>
            <p className="text-[9px] font-bold tracking-widest text-stone uppercase mt-1">NDA PROTECTED</p>
          </div>
          <div>
            <h4 className="font-display text-2xl md:text-3xl font-700 text-ink">250+</h4>
            <p className="text-[9px] font-bold tracking-widest text-stone uppercase mt-1">ENTERPRISE CLIENTS</p>
          </div>
          <div>
            <h4 className="font-display text-2xl md:text-3xl font-700 text-ink">98%</h4>
            <p className="text-[9px] font-bold tracking-widest text-stone uppercase mt-1">CSAT SCORE</p>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Image Block */}
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/images/ceo-mark.png"
              alt="CEO Portrait"
              className="w-full h-auto object-cover max-h-[500px] grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-ink text-white p-6 rounded shadow-lg max-w-[240px]">
              <p className="text-[9px] font-bold tracking-widest text-gold uppercase mb-1">FOUNDER & CEO</p>
              <h5 className="font-display font-bold text-lg leading-tight">Mark Thompson</h5>
            </div>
          </div>

          {/* Quote Block */}
          <div className="text-left">
            {/* Quotation SVG/Text */}
            <span className="font-display text-gold text-7xl leading-none font-900 select-none block mb-6">“</span>
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-ink mb-8 italic">
              "Kynyx isn't just a development shop. They are strategic architects who understood our vision before we even fully articulated it. Their consultation was the turning point for our digital transformation."
            </blockquote>
            <div className="h-1.5 w-24 bg-gold" />
          </div>
        </div>
      </section>

      {/* Ready to scale / Back to top CTA */}
      <section className="bg-ink text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-700 mb-6">
            Ready to scale?
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Join the ranks of the world's most innovative companies. Our consultation is free, confidential, and focused on your success.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-[#DCAE3D] hover:bg-[#C59B32] text-ink font-display text-xs font-bold tracking-wider py-4 px-8 transition-colors duration-300 uppercase rounded"
          >
            BACK TO TOP
          </button>
        </div>
      </section>
    </div>
  );
}
