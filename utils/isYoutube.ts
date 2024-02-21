export const isYouTubeLink = (url: string | null): boolean => {
  // Regular expression for matching YouTube video URLs
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)/;
  return url ? youtubeRegex.test(url) : false;
};
