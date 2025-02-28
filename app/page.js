import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Weight Loss Shake | Natural & Healthy</title>
        <meta name="description" content="Discover the best weight loss shake for fast and healthy fat loss. Packed with natural ingredients and high protein, it's perfect for meal replacement and weight management." />
        <meta name="keywords" content="weight loss shake, best meal replacement shake, protein shake for weight loss, natural fat burner, healthy weight loss drink, diet shake, low calorie shake, keto shake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <header className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
          <h1 className="text-3xl font-bold text-green-600">The Best Natural Weight Loss Shake</h1>
          <p className="mt-2 text-gray-700">Lose weight naturally with our scientifically formulated shake, packed with high protein, fiber, and essential nutrients.</p>
        </header>
        
        <section className="mt-6 w-full max-w-3xl bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Our Shake?</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ High in Protein to Keep You Full</li>
            <li>✔ Low in Calories, High in Nutrition</li>
            <li>✔ No Artificial Additives or Sugar</li>
            <li>✔ Supports Metabolism & Fat Burning</li>
          </ul>
        </section>
        
        <section className="mt-6 w-full max-w-3xl bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Start Your Weight Loss Journey Today!</h2>
          <p className="mt-2 text-gray-600">Get your first order with a special discount.</p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded-xl shadow hover:bg-green-700 transition">
            Order Now
          </button>
        </section>
      </main>
    </>
  );
}
