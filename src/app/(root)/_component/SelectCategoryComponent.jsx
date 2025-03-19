"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const SelectCategoryComponent = ({ pathName, categories }) => {
  const router = useRouter();

  const handleSelectValue = (value) => {
    router.push(`${pathName}/?query=${value}`);
  };

  return (
    <Select onValueChange={handleSelectValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Category</SelectLabel>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.book_cate_name || category.cartoon_genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategoryComponent;
