type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        if (this.tail===undefined)
        {
            this.length++;
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (this.head===undefined)
        {
            return undefined;
        }
        --this.length;
        const head = this.head;
        this.head = this.head.next;

        // free up mem
        this.head = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
