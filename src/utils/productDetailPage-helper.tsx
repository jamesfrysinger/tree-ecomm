export const formatProductTitleForURL = (title: string) =>
  encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase());
