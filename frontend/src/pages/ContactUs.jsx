const ContactUs = () => {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-6">
          Contact Us
        </h1>

        <p className="text-center text-base-content mb-10">
          Have questions or need support? Reach out to us anytime!
        </p>

        <div className="space-y-6 text-center sm:text-left">
          <div>
            <h2 className="text-lg font-semibold text-secondary">📍 Address</h2>
            <p className="text-base-content">
              Tnatann Headquarters
              <br />
              Subh Mangalm Nivas, Dalmiya market
              <br />
              Mauranipur, Jhansi, UP 284204
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">📧 Email</h2>
            <p className="text-base-content">tnatann25@gmail.com</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">📞 Phone</h2>
            <p className="text-base-content">+91 9415949411</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              ⏰ Working Hours
            </h2>
            <p className="text-base-content">Monday – Friday: 10 AM – 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
