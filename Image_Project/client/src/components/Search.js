import React from "react";

const searchPosts = ({ page, option, content }) => {
  const queryString = qs.stringify({
    page,
    option,
    content,
  });
  return client.get(`/search?${queryString}`);
};
export default Search;
