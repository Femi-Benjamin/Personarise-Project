export function filterInput(query, items) {
    if (!Array.isArray(items)) {
    return [];
  }
  return items.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  )
}
