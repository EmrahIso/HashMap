import { LinkedList } from './listFactory.js';

function HashMap() {
  const LOAD_FACTOR = 0.75;
  let currentSize = 0;

  let bucketsArray = [];
  let capacity = 16;

  const populateBucketsArray = () => {
    for (let i = 0; i < capacity; i++) {
      bucketsArray[i] = null;
    }
  };

  populateBucketsArray();

  const hashMapGrowth = () => {
    // Copy all existing nodes
    const currentEntries = entries();

    // Reset currentSize value
    currentSize = 0;

    // Double the array capacity
    capacity = capacity * 2;

    // Reset bucketArray

    bucketsArray = [];

    // Populate bucket array
    populateBucketsArray();

    // Add all existing nodes into new array

    currentEntries.forEach((node) => {
      set(node[0], node[1]);
    });
  };

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  const set = (key, value) => {
    const keyCode = hash(key);

    let bucketIndex = keyCode % capacity;

    if (bucketsArray[bucketIndex] === null) {
      bucketsArray[bucketIndex] = LinkedList();
    } else if (bucketsArray[bucketIndex].containsByKey(key)) {
      // If that linked list already have an item with that key just update the items value
      const itemIndex = bucketsArray[bucketIndex].findByKey(key);

      bucketsArray[bucketIndex].atIndex(itemIndex).value = value;

      return;
    }

    bucketsArray[bucketIndex].append(key, value);
    currentSize++;

    // Check if we need to grow hash map array
    if (currentSize / capacity > LOAD_FACTOR) {
      hashMapGrowth();
    }
  };

  const get = (key) => {
    const keyCode = hash(key);

    let bucketIndex = keyCode % capacity;

    if (bucketsArray[bucketIndex] === null) {
      return null;
    } else if (bucketsArray[bucketIndex].containsByKey(key)) {
      const itemIndex = bucketsArray[bucketIndex].findByKey(key);

      return bucketsArray[bucketIndex].atIndex(itemIndex).value;
    }

    return null;
  };

  const has = (key) => {
    const keyCode = hash(key);

    let bucketIndex = keyCode % capacity;

    if (bucketsArray[bucketIndex] === null) {
      return false;
    } else if (bucketsArray[bucketIndex].containsByKey(key)) {
      return true;
    } else {
      return false;
    }
  };

  const remove = (key) => {
    const keyCode = hash(key);

    let bucketIndex = keyCode % capacity;

    if (bucketsArray[bucketIndex] === null) {
      return false;
    } else if (!bucketsArray[bucketIndex].containsByKey(key)) {
      return false;
    } else {
      const itemIndex = bucketsArray[bucketIndex].findByKey(key);
      bucketsArray[bucketIndex].removeAt(itemIndex);

      return true;
    }
  };

  const length = () => {
    let sum = 0;

    for (let i = 0; i < capacity; i++) {
      if (bucketsArray[i] === null) {
        continue;
      } else {
        sum += bucketsArray[i].size();
      }
    }

    return sum;
  };

  const clear = () => {
    for (let i = 0; i < capacity; i++) {
      if (bucketsArray[i] === null) {
        continue;
      } else {
        bucketsArray[i] = null;
      }
    }
  };

  const keys = () => {
    let result = [];

    for (let i = 0; i < capacity; i++) {
      if (bucketsArray[i] === null) {
        continue;
      } else {
        result.push(...bucketsArray[i].allKeys());
      }
    }

    return result;
  };

  const values = () => {
    let result = [];

    for (let i = 0; i < capacity; i++) {
      if (bucketsArray[i] === null) {
        continue;
      } else {
        result.push(...bucketsArray[i].allValues());
      }
    }

    return result;
  };

  const entries = () => {
    let result = [];

    for (let i = 0; i < capacity; i++) {
      if (bucketsArray[i] === null) {
        continue;
      } else {
        result.push(...bucketsArray[i].allEntries());
      }
    }

    return result;
  };

  return { hash, set, get, has, remove, length, clear, keys, values, entries };
}

export { HashMap };
