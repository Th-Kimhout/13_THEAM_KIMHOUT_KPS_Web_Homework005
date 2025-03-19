"use server";
export const getAllCartoonsService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonByTitleService = async (title) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCartoonGenresService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getCartoonGenresByIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${id}`
    );
    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCartoonsByGenreIdService = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
