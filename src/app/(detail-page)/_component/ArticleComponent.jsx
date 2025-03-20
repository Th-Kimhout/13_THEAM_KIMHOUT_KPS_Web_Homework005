import { getBookByNameService } from "@/services/book.service";
import { getCartoonByTitleService } from "@/services/cartoon.service";

import { Eye } from "lucide-react";
import Image from "next/image";

const ArticleComponent = async ({ searchPath }) => {
  const getContent = async () => {
    const type = searchPath.type;
    const title = searchPath.title;
let content ;
    if (type === "cartoon") {
       content = await getCartoonByTitleService(title);
      return content;
    }
     content = await getBookByNameService(title);
    return content;
  };
  const data = await getContent();
  const { payload } = data;

  return (
    <div className="bg-white max-h-full p-20 pb-14 rounded-t-[50px] px-24 ">
      <div className="relative  ">
        <Image
          width={300}
          height={350}
          src={payload[0].image}
          alt="cover"
          className=" rounded-2xl absolute drop-shadow-2xl -top-46 right-0 "
        />
      </div>
      <div className="mt-48 py-5 text-card-color  ">
        <p className="font-semibold text-xl pb-5">
          {payload[0]?.ct_title || payload[0]?.book_title || "Unkown"}
        </p>
        <p>
          By
          <span className="font-bold text-lg text-small-detail-color">
            {" " +
              (payload[0]?.ct_creator || payload[0]?.book_author || "Unknown")}
          </span>
        </p>
        {payload[0].view_count && (
          <div>
            <span className="flex  items-center text-small-detail-color gap-2">
              <Eye size={16} />
              {payload[0].view_count || "Unknown"} times |{" "}
              {payload[0].published_year.substring(
                0,
                payload[0].published_year.indexOf("-")
              ) || "Unknown"}
              year
            </span>
          </div>
        )}
      </div>

      <p className="text-card-color text-justify">
        {payload[0].ct_description || payload[0].description || "Empty"}
      </p>
    </div>
  );
};
export default ArticleComponent;
