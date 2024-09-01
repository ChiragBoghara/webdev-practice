import React from "react";

export default function Category({
  color,
  name,
  marginRight,
  marginBottom,
  isSelected,
  onSelect,
}) {
  return (
    <div
      className="category"
      style={{
        marginRight,
        marginBottom,
        backgroundColor: isSelected ? "#fff9de" : "",
        padding: name? "10px 15px" : "10px 5px"
      }}
      onClick={
        name
          ? () => {
              onSelect(name);
            }
          : null
      }
    >
      <div
        style={{
          backgroundColor: color,
          borderRadius: "100%",
          height: "40px",
          width: "40px",
        }}
      ></div>
      {name ? <div className="category-name">{name}</div> : null}
    </div>
  );
}
