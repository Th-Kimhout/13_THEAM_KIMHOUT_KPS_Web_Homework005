"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ReadFullArticlePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <>
      <p>Redirecting to Homepage...</p>
    </>
  );
};
export default ReadFullArticlePage;
