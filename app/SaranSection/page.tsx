"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Saran = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const steps = [1, 2, 3];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (!isClient) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center" aria-label="Formulir Saran Pengguna">
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 text-blue-300 text-9xl opacity-10">📋</div>
        <div className="absolute bottom-20 right-20 text-blue-300 text-9xl opacity-10">📩</div>
      </div>

      <article className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6 relative z-10 min-h-[400px] flex flex-col justify-between">
        <header className="flex items-center justify-between mb-8" aria-label="Langkah-langkah formulir">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${currentStep === step ? "bg-blue-500" : currentStep > step ? "bg-blue-300" : "bg-gray-300"}`}>{step}</div>
              {index < steps.length - 1 && <div className={`h-1 w-20 ${currentStep > step ? "bg-blue-300" : "bg-gray-300"}`}></div>}
            </div>
          ))}
        </header>

        <section aria-live="polite">
          {currentStep === 1 && (
            <div>
              <h1 className="text-xl font-semibold mb-4">Contact Details</h1>
              <p className="text-gray-500 mb-6">Silakan isi informasi kontak Anda di bawah ini.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" placeholder="John Carter" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="text" placeholder="(123) 456-7890" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" placeholder="Company name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Feedback</h2>
              <p className="text-gray-500 mb-6">Masukkan saran atau masukan Anda di sini.</p>
              <textarea rows={5} placeholder="Masukkan saran Anda di sini..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Terima Kasih!</h2>
              <p className="text-gray-500 mb-6">Terima kasih telah memberikan saran Anda. Ini sangat berarti bagi kami!</p>
              <Image src="/images/icondekstop/terimakasih.svg" alt="Ilustrasi ucapan terima kasih" width={150} height={150} priority className="mx-auto" />
            </div>
          )}
        </section>

        <footer className="mt-8 flex justify-center gap-4" aria-label="Navigasi formulir">
          <button onClick={handlePrevious} disabled={currentStep === 1} className={`px-4 py-2 rounded-lg ${currentStep === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentStep === steps.length} className={`px-4 py-2 rounded-lg ${currentStep === steps.length ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
            Next
          </button>
        </footer>
      </article>
    </section>
  );
};

export default Saran;
