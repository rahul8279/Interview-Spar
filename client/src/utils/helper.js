 export function getInitials(text) {
  if (!text) return "";

  return text
    .split(" ")
    .map(word => word[0]?.toUpperCase())
    .join("");
}