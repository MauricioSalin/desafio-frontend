/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    youtubeApiUrl: 'https://www.googleapis.com/youtube/v3',
    youtubeApiKey: 'AIzaSyDO-EtKgYEpXrFKhVfR1r0O_eE3XugaI6I',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v='
  }
};

module.exports = nextConfig;
