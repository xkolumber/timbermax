"use client";
import { useRouter } from "next/navigation";

const StepBack = () => {
  const router = useRouter();

  return (
    <p
      onClick={() => router.back()}
      className="hover:underline ease-in text-black cursor-pointer"
    >
      Späť
    </p>
  );
};

export default StepBack;
