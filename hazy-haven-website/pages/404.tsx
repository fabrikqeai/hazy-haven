import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404 = () => {
  const router = useRouter();
  const [missingPath, setMissingPath] = useState("");

  useEffect(() => {
    setMissingPath(router.asPath);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-gradient-to-br from-yellow-100 via-white to-yellow-50">
      <div className="animate-bounce text-6xl mb-4">🚧</div>
      <h1 className="text-5xl font-extrabold text-yellow-600 mb-4 drop-shadow">
        404 – Whoops!
      </h1>
      <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
        Looks like you hit a page that doesn’t exist...
      </p>
      <p className="text-gray-500 mb-6">
        {missingPath && (
          <>
            We couldn’t find{" "}
            <span className="font-mono text-red-500">{missingPath}</span>.
          </>
        )}{" "}
        This part of the site might be coming soon! 🚀
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
      >
        <FaHome />
        Return to Safety
      </Link>

      <p className="text-sm text-gray-400 mt-8">
        Or you can hang out here with the construction crew 👷‍♀️👷‍♂️
      </p>
    </div>
  );
};

export default Custom404;
