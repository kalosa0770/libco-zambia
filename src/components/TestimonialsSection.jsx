import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Government Organization",
      feedback:
        "LIBCO provided seamless consultancy and procurement solutions, ensuring efficiency and compliance with international standards.",
    },
    {
      name: "International Partner",
      feedback:
        "Their global partnerships and professionalism made cross-border collaboration effortless and reliable.",
    },
    {
      name: "Corporate Client",
      feedback:
        "From supply chain management to training, LIBCO delivered excellence at every step of our business journey.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900">
          Trusted by Organizations Worldwide
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          LIBCO Zambia Limited has delivered solutions to government bodies,
          reputable companies, and international partners — building trust
          through professionalism and quality.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-600 italic">“{t.feedback}”</p>
              <h4 className="mt-4 text-blue-900 font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
