import { BaseEntity, PaginatedResult } from "../types";

/**
 * Generic in-memory repository.
 * Demonstrates generic types: T extends BaseEntity.
 */
export class Repository<T extends BaseEntity> {
  private store: T[];

  constructor(initialData: T[]) {
    this.store = [...initialData];
  }

  findAll(): T[] {
    return this.store;
  }

  findById(id: string): T | undefined {
    return this.store.find((item) => item.id === id);
  }

  paginate(page: number, pageSize: number): PaginatedResult<T> {
    const total = this.store.length;
    const totalPages = Math.ceil(total / pageSize);
    const items = this.store.slice((page - 1) * pageSize, page * pageSize);
    return { items, total, page, pageSize, totalPages };
  }

  search(predicate: (item: T) => boolean): T[] {
    return this.store.filter(predicate);
  }

  create(item: T): T {
    this.store.push(item);
    return item;
  }

  update(id: string, partial: Partial<T>): T | null {
    const index = this.store.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.store[index] = { ...this.store[index], ...partial, updatedAt: new Date() };
    return this.store[index];
  }

  delete(id: string): boolean {
    const index = this.store.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this.store.splice(index, 1);
    return true;
  }
}
