// Problem.jsx
export default function Problem() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900">
            Writing README Files is Painful
          </h2>

          <ul className="mt-6 space-y-3 text-zinc-600">
            <li>❌ Takes too much time</li>
            <li>❌ Hard to structure properly</li>
            <li>❌ Developers often skip it</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">
            GitWrite fixes this instantly
          </h3>
          <p className="text-zinc-600">
            Generate structured, clean, and professional README files in seconds
            — no effort required.
          </p>
        </div>
      </div>
    </section>
  );
}
