import { getAllBookCategoriesService } from "@/services/book.service";
import ContentHeaderComponent from "./ContentHeaderComponent";
import { getAllCartoonGenresService } from "@/services/cartoon.service";

const HeaderWrapperComponent = async () => {
  const categories = await getAllBookCategoriesService();
  const genres = await getAllCartoonGenresService();
  const extractedPayload = () => {
    return {
      categories: categories?.payload,
      genres: genres?.payload,
    };
  };
  const categoryList = extractedPayload();
  return <ContentHeaderComponent categoryList={categoryList} />;
};

export default HeaderWrapperComponent;
