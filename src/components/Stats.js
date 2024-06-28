import React from "react";

export function Stats({ items }) {
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have packed everything"
          : `You have ${items.length} items on your list and you already packed
        ${numPacked} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
