import queryString from "query-string";
export const Pagination = location => {
  const query = queryString.parse(location);
  let page = parseInt(query.page);
  let elementsPerPage = 10;
  let to = page * elementsPerPage;
  let from = to - elementsPerPage;
  return { from, to };
};
