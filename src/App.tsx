import React, { useState } from "react";
import { Mail, CheckCircle, Download } from "lucide-react";
import "./index.css";

function App() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="page min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="px-6 py-8 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-900 border-2 border-blue-900 rounded-full px-2">
            Uibestread
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book Cover */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative perspective-1000 group-hover:-translate-y-2 transition-all duration-500">
                <div className="book-mockup transform-gpu group-hover:rotate-y-12 transition-transform duration-500">
                  <div className="book-cover relative">
                    <img
                      src="./book-cover.webp"
                      alt="The Digital Revolution E-book Cover"
                      className="w-full h-full object-cover rounded-r-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 rounded-r-lg"></div>
                  </div>
                  <div className="book-spine"></div>
                  <div className="book-shadow"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Best UI E-book
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  About Face
                  <span className="block text-blue-600">
                    The Essentials of Interaction Design
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  About Face: The Essentials of Interaction Design, Fourth
                  Edition is the latest update to the book that shaped and
                  evolved the landscape of interaction design. This
                  comprehensive guide takes the worldwide shift to smartphones
                  and tablets into account. New information includes discussions
                  on mobile apps, touch interfaces, screen size considerations,
                  and more. The new full-color interior and unique layout better
                  illustrate modern design concepts.
                </p>

                <div className="flex items-center space-x-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      AC
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alan Cooper</p>
                      <p className="text-sm">Author</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Published</p>
                    <p className="text-sm">2014</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.open("https://appslocked.com/cl/i/34ore6", "_blank")
                  }
                  className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg group"
                >
                  Download E-book Now
                  <Download className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-sm text-gray-500 text-center lg:text-left">
                  PDF format • 722 pages
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">25k+</p>
                  <p className="text-sm text-gray-600">Downloads</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">4.5★</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">476+</p>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">722</p>
                  <p className="text-sm text-gray-600">Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="bg-gradient-to-r from-blue-900 to-purple-900 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed max-w-2xl mx-auto">
              Join thousands of professionals who receive our weekly newsletter
              with cutting-edge research, industry trends, and exclusive
              content.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 text-white-900 placeholder-gray-500 focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 outline-none text-lg"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 text-lg whitespace-nowrap"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                No spam ever. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-500 bg-opacity-20 border border-green-400 rounded-xl p-6">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Welcome aboard!
              </h3>
              <p className="text-green-200">
                Thank you for subscribing. Check your inbox for our welcome
                email.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xl font-bold text-white mb-4">Uibestread</div>
          <p className="text-gray-400 mb-8">
            Empowering minds through digital knowledge
          </p>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Uibestread. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating CTA for mobile */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
        <button
          onClick={() => window.open("/download", "_blank")}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Download Now
        </button>
      </div>
    </div>
  );
}

export default App;
