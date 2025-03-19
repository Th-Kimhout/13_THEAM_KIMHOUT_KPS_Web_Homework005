import {
  getAllBooksService,
  getBookByNameService,
  getBooksByCategoryIdService,
} from "@/services/book.service";
import Link from "next/link";
import Image from "next/image";

const BookCategoryPage = async ({ searchParams }) => {
  const path = await searchParams;
  const fetchData = async () => {
    let payload;
    let data;

    if (path.query) {
      const queryId = path.query;
      data = await getBooksByCategoryIdService(queryId);
    } else if (path.search) {
      const searchValue = path.search;
      data = await getBookByNameService(searchValue);
    } else {
      data = await getAllBooksService();
    }
    payload = data?.payload;
    return payload;
  };
  const books = await fetchData();

  return (
    <div className="flex flex-wrap justify-between overflow-y-auto h-[70dvh] no-scrollbar">
      {books?.map((book) => (
        <div
          key={book.id}
          className="flex w-[500px] mt-32 mb-2 self-start items-end p-4 bg-gray-50 rounded-lg shadow-md"
        >
          {/* Image */}
          <div className="relative flex h-[140px] mr-6">
            <div className="absolute w-full h-[200px] top-[-115px]">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="book cover"
                src={book.image}
                className="rounded-lg object-cover shadow-[0px_12px_6px_-5px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
            <Link
              href={`/read-full-article/${book.id}?type=book&name=book categories&title=${book.book_title}`}
              className="mt-4 self-end text-xs px-2 py-3 font-semibold w-full bg-button-color text-card-color rounded-4xl hover:bg-card-color/80 hover:translate-x-1 hover:translate-y-[-1px] hover:text-white  transition-all ease-in-out"
            >
              READ FULL ARTICLE
            </Link>
          </div>

          {/* Text Content */}
          <div className="w-2/3">
            <h2 className="text-xl font-bold text-card-color line-clamp-1">
              {book.book_title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-5">
              {book.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCategoryPage;
