"use client";
import { usePathname, useSearchParams } from "next/navigation";
import ContentTitleComponent from "./ContentTitleComponent";
import SelectCategoryComponent from "./SelectCategoryComponent";
import { useEffect, useState } from "react";

const ContentHeaderComponent = ({ categoryList }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const displayData = () => {
      if (pathName === "/") {
        setTitle("Homepage");
      } else if (pathName === "/book-categories") {
        setTitle("All Books");
      } else if (pathName === "/old-school-cartoons") {
        setTitle("Old School Cartoons");
      }

      if (searchParams.get("query")) {
        if (pathName === "/book-categories") {
          const queryId = searchParams.get("query");
          const category = categoryList.categories.filter(
            (category) => category.id == queryId
          );

          const [{ book_cate_name }] = category;
          setTitle(book_cate_name);
        }

        if (pathName === "/old-school-cartoons") {
          const queryId = searchParams.get("query");
          const genre = categoryList.genres.filter(
            (genre) => genre.id == queryId
          );

          const [{ cartoon_genre }] = genre;
          setTitle(cartoon_genre);
        }
      }
    };

    displayData();
  }, [searchParams.get("query"), pathName]);

  return (
    <div className="flex justify-between items-center border-b border-main-color pb-6">
      <ContentTitleComponent title={title} />
      {title !== "Homepage" && (
        <SelectCategoryComponent
          pathName={pathName}
          categories={
            pathName === "/book-categories"
              ? categoryList.categories
              : categoryList.genres
          }
        />
      )}
    </div>
  );
};

export default ContentHeaderComponent;
