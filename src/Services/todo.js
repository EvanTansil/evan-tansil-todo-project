import update from "immutability-helper";
import React from "react";

export function getAll() {
  return [
    {
      id: 1,
      text: "learn JavaScript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Rule The World",
      completed: false,
    },
  ];
}

export function getItemById(itemId) {
  return getAll().find((item) => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
  let index = items.findIndex((item) => item.id === itemId);

  return update(items, {
    [index]: {
      completed: { $set: completed },
    },
  });
}

function getNextId() {
  let todoCounter = 1;

  return getAll().length + todoCounter++;
}

export function addToList(list, data) {
  let item = Object.assign(
    {
      id: getNextId(),
    },
    data
  );

  return list.concat([item]);
}
