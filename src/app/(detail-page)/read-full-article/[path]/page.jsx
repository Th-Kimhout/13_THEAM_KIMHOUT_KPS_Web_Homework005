import ArticleComponent from "../../_component/ArticleComponent";
import BreadCrumbComponent from "../../_component/BreadCrumbComponent";

const ArticlePage = async ({ searchParams }) => {
  const searchPath = await searchParams;

  return (
    <div className="flex flex-col pt-14 flex-1 px-16 mx-auto h-full">
      <section>
        <BreadCrumbComponent searchPath={searchPath} />
      </section>
      <article className="bg-white w-full mt-24 rounded-tl-4xl rounded-tr-4xl">
        <ArticleComponent searchPath={searchPath} />
      </article>
    </div>
  );
};
export default ArticlePage;
