

export const isValidImageUrl = (url: string) => {
  return url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
}
