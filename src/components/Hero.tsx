"use client";
import { fetchCategory } from "@/features/categories/categoriesSlice";
import { RootState } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [showRandom, setShowRandom] = useState(false);
  const [categoriess, setCategoriess] = useState<any[]>([]); // To store Trivia API categories
  const chooseCategoryAudio = useRef<HTMLAudioElement | null>(null);
  const randomAudio = useRef<HTMLAudioElement | null>(null);
  const { categories, isLoading } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched categories:", categories);
  }, [categories]);
  // Fetch categories from the Trivia API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        setCategoriess(data.trivia_categories); // Set categories from API
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const playChooseCategoryAudio = () => {
    if (chooseCategoryAudio.current) {
      chooseCategoryAudio.current.play();
    }
  };

  const playRandomAudio = () => {
    if (randomAudio.current) {
      randomAudio.current.play();
    }
    setShowRandom(true); // Show the random component
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900 text-white">
      <section className="relative h-full">
        {/* First Section */}
        <div
          className={`absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
            showRandom ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <h1 className="bg-gradient-to-r font-mono from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Test Your Knowledge and Have Fun!
          </h1>

          <p className="font-mono mx-auto mt-4 max-w-xl text-center sm:text-xl/relaxed">
            Join the ultimate quiz challenge and see how you stack up against
            friends!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white duration-300 ease-in-out hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto font-mono"
              href="#"
              onClick={playChooseCategoryAudio}
            >
                
              Choose Category 📚
            </Link>

            <button
              className="duration-300 ease-in-out block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto font-mono"
              onClick={playRandomAudio}
            >
              Randomly 🎲
            </button>
          </div>

          {/* Audio elements */}
          <audio
            ref={chooseCategoryAudio}
            src="/audio/choose-category.mp3"
            preload="auto"
          />
          <audio ref={randomAudio} src="/audio/random.mp3" preload="auto" />
        </div>

        {/* Second Section */}
        <div
          className={`absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
            showRandom ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-3xl font-bold">Choose a Category</h2>
          <p className="mt-4">Pick a category to start your quiz!</p>

          {/* Responsive Grid for Categories */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 w-full max-w-screen-lg">
            {categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category.id}
                  className="flex items-center justify-center h-32 rounded bg-blue-600 text-white font-medium text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() =>
                    console.log(`Selected category: ${category.name}`)
                  }
                >
                  {category.name}
                </button>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </div>

          <Link
            href="#"
            className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white duration-300 ease-in-out hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          >
            Go Back 🔙
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
