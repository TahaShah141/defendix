import { ContactUs } from "../components/Shared/ContactUs";

import { ContactHero } from "../components/Contact-Us/Contact-Hero";
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactUs showPill={false} />
      <div className="w-full h-[600px]  overflow-hidden pt-20 px-20 pb-[120px] bg-white">
        {/* for pinned map
          src={`https://www.google.com/maps/embed/v1/place?q=123+Business+Ave,+Suite+400,+Riyadh,+Saudi+Arabia&key=${process.env.GOOGLE_MAPS_API_KEY}`}
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.902768123456!2d46.675295!3d24.713551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f1234567890%3A0xabcdef1234567890!2s123+Business+Ave%2C+Suite+400%2C+Riyadh%2C+Saudi+Arabia!5e0!3m2!1sen!2s!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
