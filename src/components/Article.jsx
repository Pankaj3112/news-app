import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { useFavourites } from "../context/FavouriteContext";

const Article = ({ article, gridView, index }) => {
  const { isFavourite, handleFavouriteClick } = useFavourites();
  const articleIsFavorite = isFavourite(article);

  console.log(article);
  return (
    <motion.div
      initial={{ y: -30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${
        gridView ? "max-w-sm" : "w-full"
      } rounded-lg overflow-hidden shadow-lg relative mx-auto bg-white`}
    >
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          className={
            gridView ? "w-full h-36 object-cover " : "w-full h-96 object-cover"
          }
        />
      ) : (
        <img
          src="/image-not-found.jpg"
          alt={article.title}
          className={
            gridView ? "w-full h-36 object-cover " : "w-full h-96 object-cover"
          }
        />
      )}
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2 line-clamp-2">
          {article.title}
        </div>
      </div>
      <div className="px-6 py-2 flex gap-2 items-center flex-wrap">
        <button
          className="text-sm bg-gray-200 text-gray-700 rounded-full px-3 py-1"
          onClick={() => handleFavouriteClick(article)}
        >
          <Favorite color={articleIsFavorite ? "error" : "action"} />
        </button>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
          {article.source.name}
        </span>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
      </div>
      <div className="px-6 py-3">
        <Link
          to={`/article/${index}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default Article;
