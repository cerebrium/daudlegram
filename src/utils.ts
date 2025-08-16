export class LRU {
  capacity: number;
  userMap: Map<string, LNode>;
  currentUserCount: number;
  head: LNode | null;
  tail: LNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.userMap = new Map();
    this.currentUserCount = 0;
    this.head = null;
    this.tail = null;
  }

  public hasUser(userId: string) {
    return this.userMap.has(userId);
  }

  public addUser(userId: string) {
    const hasNode = this.userMap.get(userId);
    if (hasNode) {
      return this.moveToFront(hasNode);
    }

    const newUserNode = new LNode(userId);

    this.userMap.set(userId, newUserNode);

    if (!this.head) {
      this.head = newUserNode;
      this.tail = newUserNode;
      return;
    }

    newUserNode.next = this.head;
    this.head.prev = newUserNode;
    this.head = newUserNode;

    this.evictIfNeeded();
  }

  private moveToFront(userNode: LNode) {
    // head
    if (this.head === userNode) {
      return;
    }

    // tail
    if (this.tail === userNode) {
      if (!this.head || !userNode.prev) {
        throw new Error("no head or prev in tail");
      }

      userNode.prev.next = null;
      this.tail = userNode;

      userNode.next = this.head;
      userNode.prev = null;
      this.head.prev = userNode;

      this.head = userNode;
      return;
    }

    // middle
    if (!this.head || !this.tail || !userNode.prev || !userNode.next) {
      throw new Error("error in mid");
    }

    userNode.prev.next = userNode.next;
    userNode.next.prev = userNode.prev;

    userNode.prev = null;
    userNode.next = this.head;
    this.head.prev = userNode;

    this.head = userNode;
  }

  private evictIfNeeded() {
    if (this.currentUserCount <= this.capacity) {
      return;
    }

    if (!this.head || !this.tail || !this.tail.prev) {
      throw new Error("error in nodes on eviction");
    }

    this.userMap.delete(this.tail.userId);

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }
}

class LNode {
  userId: string;
  next: LNode | null;
  prev: LNode | null;

  constructor(
    userId: string,
    next: LNode | null = null,
    prev: LNode | null = null,
  ) {
    this.userId = userId;
    this.next = next;
    this.prev = prev;
  }
}
