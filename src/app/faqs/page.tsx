export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
            <p className="text-gray-700">
              We offer a comprehensive range of repair services including electronics, 
              appliances, and general maintenance work.
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">How long does a typical repair take?</h2>
            <p className="text-gray-700">
              Repair times vary depending on the service needed. Simple repairs might take 
              a few hours, while more complex jobs could take several days.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </main>
  );
} 