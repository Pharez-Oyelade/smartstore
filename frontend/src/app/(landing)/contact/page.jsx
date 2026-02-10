import React from "react";

const page = () => {
  return (
    <div className="m-20 px-4 md:px-10 flex items-start justify-center gap-5">
      <div>
        <div>
          <h1 className="text-4xl font-black">Contact Us</h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            We're here to help you grow your business. Reach out with any
            questions about inventory, sales tracking, or payments.
          </p>
        </div>

        <div className="flex flex-col gap-5 my-10">
          <div>
            <div className="pb-3">
              <h3 className="text-lg font-bold">Email Support</h3>
              <p className="text-sm text-muted">
                For general inquiries and technical help.
              </p>
            </div>
            <a
              href="mailto:support@vendora.ng"
              className="font-bold text-accent"
            >
              support@vendora.ng
            </a>
          </div>

          <div>
            <div className="pb-3">
              <h3 className="text-lg font-bold">WhatsApp Support</h3>
              <p className="text-sm text-muted">
                Quick support for urgent issues.
              </p>
            </div>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              className="font-bold text-accent"
            >
              +234 800 VENDORA
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold">Business Hours</h3>
            <p className="text-sm text-muted">
              Mon - Fri: 8:00 AM - 6:00 PM (WAT)
            </p>
            <p className="text-sm text-muted">Sat: 9:00 AM - 4:00 PM</p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex-1 bg-white shadow-md border border-border rounded-xl p-10">
        <h3 className="text-xl font-bold pb-10">Send Us a Message</h3>

        <form action="" className="w-full flex flex-col gap-5">
          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="fname" className="font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Chinedu Okafor"
                className="border border-border py-3 px-5 rounded-xl w-full"
              />
            </div>

            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@email.com"
                className="border border-border py-3 px-5 rounded-xl w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="subject" className="font-bold">
              Subject
            </label>
            <input
              name="subject"
              id="subject"
              placeholder="How can we help you?"
              className="border border-border py-3 px-5 rounded-xl w-full"
            ></input>
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us more about your inquiry..."
              className="border border-border py-3 px-5 rounded-xl w-full h-40"
            ></textarea>
          </div>

          <button className="bg-accent text-white px-4 py-3 rounded-xl hover:bg-accent-hover hover:scale-[1.02] active:scale-95 transition-all transform cursor-pointer">
            Send Message
          </button>

          <p className="text-sm text-muted text-center">
            We typically respond within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
