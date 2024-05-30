import React from "react";
import { useNavigate } from "react-router-dom";

function FilterCard({ data }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("query", data);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div
      onClick={handleClick}
      className="text-white cursor-pointer  px-3 py-1  bg-lightText rounded-lg"
    >
      <h3 className="whitespace-nowrap">{data}</h3>
    </div>
  );
}

export default FilterCard;
