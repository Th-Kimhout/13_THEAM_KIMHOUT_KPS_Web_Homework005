"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBarComponent = () => {
  const [userInput, setUserInput] = useState();
  const router = useRouter();
  const pathName = usePathname();
  const handleUserInput = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };
  const getDataTitle = (e) => {
    e.preventDefault();

    if (userInput) {
      router.push(`${pathName}/?search=${userInput}`);
    } else {
      router.push(`${pathName}`);
    }
  };

  return (
    <form onSubmit={getDataTitle}>
      <label
        htmlFor="search"
        className="bg-white rounded-full flex items-center pl-4"
      >
        <button type="submit" className="hover:cursor-pointer">
          <Search color="#B9B9B9" />
        </button>
        <input
          onChange={handleUserInput}
          type="text"
          name="title"
          id="title"
          className="w-full p-2 placeholder:text-[#B9B9B9] outline-none"
          placeholder="Search..."
        />
      </label>
    </form>
  );
};
export default SearchBarComponent;
