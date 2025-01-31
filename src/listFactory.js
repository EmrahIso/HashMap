import { Node } from './nodeFactory.js';

function LinkedList() {
  let headNode = null;

  const append = (value) => {
    let currentNode = headNode;

    if (headNode === null) {
      headNode = Node(value);
    }

    while (currentNode !== null) {
      if (currentNode.nextNode === null) {
        currentNode.nextNode = Node(value);
        break;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  };

  const prepend = (value) => {
    let headCopy = headNode;

    headNode = Node(value);
    headNode.nextNode = headCopy;
  };

  const size = () => {
    let currentNode = headNode;

    if (headNode === null) return 0;

    let counter = 0;

    while (currentNode !== null) {
      counter++;
      currentNode = currentNode.nextNode;
    }

    return counter;
  };

  const head = () => headNode;

  const tail = () => {
    let currentNode = headNode;

    if (headNode === null) return headNode;

    while (currentNode !== null) {
      if (currentNode.nextNode === null) return currentNode;
      currentNode = currentNode.nextNode;
    }
  };

  const atIndex = (index) => {
    let currentNode = headNode;

    if (headNode === null) return 0;

    let counter = 0;

    while (currentNode !== null) {
      if (index === counter) {
        return currentNode;
      } else {
        counter++;
        currentNode = currentNode.nextNode;
      }
    }

    return null;
  };

  const pop = () => {
    let currentNode = headNode;

    if (headNode === null) {
      return;
    } else if (headNode.nextNode === null) {
      headNode = null;
    }

    while (currentNode.nextNode !== null) {
      if (currentNode.nextNode.nextNode === null) {
        currentNode.nextNode = null;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  };

  const contains = (value) => {
    let currentNode = headNode;

    if (headNode === null) {
      return false;
    }

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }

    return false;
  };

  const find = (value) => {
    let currentNode = headNode;

    if (headNode === null) return null;

    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }

    return null;
  };

  const toString = () => {
    let currentNode = headNode;

    if (headNode === null) {
      return 'null';
    }

    let result = '';

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return result + 'null';
  };

  const insertAt = (value, index) => {
    let currentNode = headNode;

    const newNode = Node(value);

    if (headNode === null) {
      headNode = newNode;
      return;
    }

    for (let counter = 0; counter < index; counter++) {
      if (currentNode.nextNode === null) {
        currentNode.nextNode = newNode;
        break;
      } else if (index - 1 === counter) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        break;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  };

  const removeAt = (index) => {
    let currentNode = headNode;

    if (headNode === null) return;

    for (let counter = 0; counter < index; counter++) {
      if (index - 1 === counter) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        break;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export { LinkedList };
