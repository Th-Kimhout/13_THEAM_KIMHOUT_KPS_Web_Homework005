import {
  getAllCartoonsService,
  getCartoonByTitleService,
  getCartoonsByGenreIdService,
} from "@/services/cartoon.service";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OldSchoolCartoonsPage = async ({ searchParams }) => {
  const path = await searchParams;
  const fetchData = async () => {
    let payload;
    let data;
    if (path.query) {
      const queryId = path.query;
      data = await getCartoonsByGenreIdService(queryId);
    } else if (path.search) {
      const searchValue = path.search;
      data = await getCartoonByTitleService(searchValue);
    } else {
      data = await getAllCartoonsService();
    }

    payload = data?.payload;
    return payload;
  };
  const cartoons = await fetchData();

  return (
    <div className="flex flex-wrap gap-16 justify-center overflow-y-auto h-[70dvh] no-scrollbar">
      {cartoons?.map((cartoon) => (
        <Link
          href={`read-full-article/${
            cartoon.id
          }?type=cartoon&name=old school cartoons&title=${encodeURIComponent(
            cartoon.ct_title
          )}`}
          key={cartoon.id}
          className="flex flex-col mb-2 w-[250px] h-[400px] mt-14"
        >
          <div className="relative w-full h-full">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="cartoon thumbnail"
              src={cartoon.image}
              className="rounded-lg object-cover shadow-[0px_12px_6px_-8px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
          <div className="flex flex-col pt-6">
            <p className="font-semibold text-card-color line-clamp-1">
              {cartoon.ct_title || "Unknown"}
            </p>
            <div>
              <span className="flex items-center text-small-detail-color gap-2">
                <Eye size={16} />
                {cartoon.view_count} times |{" "}
                {cartoon.published_year.substring(
                  0,
                  cartoon.published_year.indexOf("-")
                ) || "0"}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OldSchoolCartoonsPage;
