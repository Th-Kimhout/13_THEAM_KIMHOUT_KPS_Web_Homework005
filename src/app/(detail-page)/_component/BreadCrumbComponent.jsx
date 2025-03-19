import {
  BookOpenText,
  BookText,
  ChevronRight,
  Home,
  Link2,
} from "lucide-react";
import Link from "next/link";

const BreadCrumbComponent = async ({ searchPath }) => {
  const handleBreadcrumb = () => {
    let data = {
      name: "",
      title: "",
    };
    searchPath.type === "cartoon"
      ? (data.name = "Old School Cartoons")
      : (data.name = "Book Categories");
    data.title = searchPath.title;
    return data;
  };
  const data = handleBreadcrumb();

  return (
    <div className="flex gap-5 items-center">
      <Link
        href={"/"}
        className="flex gap-2 group text-card-color items-center"
      >
        <Link2 size={16} className="hidden group-hover:block" />{" "}
        <Home size={16} className="group-hover:hidden" />
        <p>Home</p>
      </Link>
      <ChevronRight size={20} />
      <Link
        href={"/old-school-cartoons"}
        className="flex gap-2 group text-card-color items-center"
      >
        <Link2 size={16} className="hidden group-hover:block" />{" "}
        <BookText size={16} className="group-hover:hidden" />
        <p>{data.name}</p>
      </Link>
      <ChevronRight size={20} />
      <div className="flex gap-2 text-red-400 items-center">
        <BookOpenText size={16} />
        <p>{data.title}</p>
      </div>
    </div>
  );
};
export default BreadCrumbComponent;
