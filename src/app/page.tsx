export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 py-16">
      <main className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4 opacity-0 animate-fade-in-up">
          <div className="w-16 h-16 flex items-center justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M8 32L16 20L24 28L32 16L40 24"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-7xl text-black font-bold">hillclimbing</h1>
        </div>

        {/* Tagline */}
        <p className="text-2xl text-gray-600 font-normal leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
          Quality data annotation, at your service.
        </p>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg px-20 py-6 max-w-xl mx-auto border-1 border-gray-200 opacity-0 animate-fade-in-up animate-delay-400">
          <p className="text-gray-700 text-lg leading-relaxed">
            Shoot us an email{" "}
            <a
              href="mailto:inquiry@hillclimb.ing"
              className="text-black font-medium hover:underline"
            >
              inquiry@hillclimb.ing
            </a>
            ,
            <br />
            we'll respond within 10 hours.
          </p>
        </div>
      </main>
    </div>
  );
}
