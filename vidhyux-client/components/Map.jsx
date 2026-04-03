"use client";

export default function Map() {
  return (
    <div style={{ width: "100%", height: "300px" }}>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.1619008650086!2d78.11857207598705!3d20.376213459869653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzM0LjQnTiA3OMKwMDcnMDkuMiJF!5e0!3m2!1sen!2sin!4v1775209959344!5m2!1sen!2sin"

        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

