export const formatProductTitleForURL = (title: string) =>
  encodeURIComponent(
    title
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
  );
