class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(4);
numbers.addMultiple(1, 2, 3);
console.log(numbers.getAll());

let random = new List<number | string | boolean>(1, "a", "b", "c", 100, true);
random.add(4);
random.addMultiple(1, false, 3);
console.log(random.getAll());