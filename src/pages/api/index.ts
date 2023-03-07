import axios from 'axios';

const MAX_RESULTS = 12;

const request = axios.create({
  baseURL: process.env.youtubeApiUrl
});

export const searchMostPopularVideos = async () =>
  await request.get(
    `/search?part=snippet&maxResults=${MAX_RESULTS}&chart=mostPopular&type=video&key=${process.env.youtubeApiKey}`
  );

export const searchVideos = async (value: string) =>
  await request.get(
    `/search?part=snippet&maxResults=${MAX_RESULTS}&q=${value}&type=video&key=${process.env.youtubeApiKey}`
  );

export const searchChannel = async (id: string) =>
  await request.get(
    `/channels?id=${id}&part=snippet&key=${process.env.youtubeApiKey}`
  );
