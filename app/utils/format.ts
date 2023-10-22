export function formatDate(dateString: string): string {
  if (!dateString) return "Present";

  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
