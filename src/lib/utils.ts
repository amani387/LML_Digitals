import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchYouTubeVideos = async (pageToken = "") => {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Updated for client-side
  const CHANNEL_ID = "UCON9Vw6MI5RFLYiNWqgjCUw"; // Your YouTube channel ID
  const MAX_RESULTS = 10;

  const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=${MAX_RESULTS}&pageToken=${pageToken}`;

  const response = await fetch(apiURL);
  if (!response.ok) {
    throw new Error("Failed to fetch YouTube videos");
  }

  const data = await response.json();
  return {
    videoItems: data.items, // List of videos
    nextPageToken: data.nextPageToken || null, // Token for the next page
    prevPageToken: data.prevPageToken || null, // Token for the previous page
  };
};


