export const getMediaUrl = (item) => item?.mediaUrl || item?.imageUrl || "";

export const getMediaType = (item) => item?.mediaType || "image";

export const getVideoEmbedUrl = (value = "") => {
  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${url.pathname.split("/").filter(Boolean)[0]}`;
    }
    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v") || url.pathname.match(/\/(?:shorts|embed)\/([^/]+)/)?.[1];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.hostname.includes("vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).find((part) => /^\d+$/.test(part));
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
};
