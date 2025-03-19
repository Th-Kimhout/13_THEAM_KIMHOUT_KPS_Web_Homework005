"use server";

export const getAllBooksService = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getBookByIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getBookByNameService = async (name) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?search=${name}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllBookCategoriesService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getBookCategoryByIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getBooksByCategoryIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
