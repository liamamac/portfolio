export const getImageUrl = (path) => {
    console.log("path=", path);
    console.log("Resolved URL:", new URL(`/assets/${path}`, import.meta.url).href);
    return new URL(`/assets/${path}`, import.meta.url).href;
}