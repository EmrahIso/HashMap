import { Node } from './nodeFactory.js';

function LinkedList() {
  let headNode = null;

  const append = (key, value) => {
    let currentNode = headNode;

    if (headNode === null) {
      headNode = Node(key, value);
    }

    while (currentNode !== null) {
      if (currentNode.nextNode === null) {
        currentNode.nextNode = Node(key, value);
        break;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  };

  const prepend = (key, value) => {
    let headCopy = headNode;

    headNode = Node(key, value);
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

  const containsByKey = (key) => {
    let currentNode = headNode;

    if (headNode === null) {
      return false;
    }

    while (currentNode !== null) {
      if (currentNode.key === key) {
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

  const findByKey = (key) => {
    let currentNode = headNode;

    if (headNode === null) return null;

    let index = 0;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }

    return null;
  };

  const allKeys = () => {
    let currentNode = headNode;

    if (headNode === null) {
      return 'null';
    }

    let result = [];

    while (currentNode !== null) {
      result.push(currentNode.key);
      currentNode = currentNode.nextNode;
    }

    return result;
  };

  const allValues = () => {
    let currentNode = headNode;

    if (headNode === null) {
      return 'null';
    }

    let result = [];

    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return result;
  };

  const allEntries = () => {
    let currentNode = headNode;

    if (headNode === null) {
      return 'null';
    }

    let result = [];

    while (currentNode !== null) {
      result.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.nextNode;
    }

    return result;
  };

  const insertAt = (key, value, index) => {
    let currentNode = headNode;

    const newNode = Node(key, value);

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

    if (index === 0) {
      headNode = headNode.nextNode;
    }

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
    containsByKey,
    find,
    findByKey,
    allKeys,
    allValues,
    allEntries,
    insertAt,
    removeAt,
  };
}

export { LinkedList };
