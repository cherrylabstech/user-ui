export function PaginationButton(value) {
  if (value.to >= value.count) {
    return true;
  } else return false;
}

export function PaginationPrevButton(page) {
  if (page <= 1) {
    return true;
  } else return false;
}
