export default function ContactPage() {
  return (
    <main className="min-h-screen mx-auto w-full max-w-screen-xl">
        <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with us for any inquiries or service requests.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600">Email: info@repairservices.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Address: 123 Repair Street, Fix City, FC 12345</p>
            </div>
            {/* Contact form can be added here */}
          </div>
        </div>
      </div>
    </main>
  );
} 