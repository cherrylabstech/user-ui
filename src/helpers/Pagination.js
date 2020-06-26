import queryString from "query-string";
export const Pagination = (location, elementsPerPages) => {
  const query = queryString.parse(location);
  let page = parseInt(query.page);
  let elementsPerPage = elementsPerPages || 10;
  let to = page * elementsPerPage;
  let from = to - elementsPerPage;
  return { from, to };
};
