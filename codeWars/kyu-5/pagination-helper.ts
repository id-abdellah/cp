// https://www.codewars.com/kata/515bb423de843ea99400000a/typescript

export class PaginationHelper {
  public collection: unknown[];
  public itemsPerPage: number;
  public constructor(collection: unknown[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  public itemCount(): number {
    return this.collection.length;
  }

  public pageCount(): number {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  public pageItemCount(pageIndex: number): number {
    if (pageIndex >= this.pageCount()) return -1;
    let items = this.itemCount();
    const counts: Record<number, number> = {};
    for (let i = 1; i <= this.pageCount(); i++) {
      if (items > this.itemsPerPage) {
        items -= this.itemsPerPage;
        counts[i] = this.itemsPerPage;
      } else {
        counts[i] = items;
      }
    }
    return counts[pageIndex + 1] || -1;
  }

  public pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
