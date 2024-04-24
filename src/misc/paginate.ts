// misc/paginate.ts

import _ from "lodash";
import { ProductType } from "./type";

export interface PaginationResult {
  items: ProductType[];
  currentPage: number;
  totalPages: number;
}

export function paginate(
  items: ProductType[],
  pageNumber: number,
  pageSize: number
): PaginationResult {
  const startIndex = (pageNumber - 1) * pageSize;
  return {
    items: _.slice(items, startIndex, startIndex + pageSize),
    currentPage: pageNumber,
    totalPages: Math.ceil(items.length / pageSize),
  };
}
