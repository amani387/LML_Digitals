'use client';

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { fetchYouTubeVideos } from "@/lib/utils";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [previousPageToken, setPreviousPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (pageToken = "") => {
    try {
      setLoading(true);
      const { videoItems, nextPageToken: newNextToken, prevPageToken: newPrevToken } =
        await fetchYouTubeVideos(pageToken);
      setVideos(videoItems); // Update videos with fetched items
      setNextPageToken(newNextToken || null);
      setPreviousPageToken(newPrevToken || null);
    } catch (err) {
      setError("Unable to load videos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(); // Initial fetch
  }, []);

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Trending Videos On Previous Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id.videoId}
            className="hover:shadow-lg transition border border-gray-200 rounded-lg overflow-hidden"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader>
                <Image
                  width={320}
                  height={180}
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="mt-2 p-4">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {video.snippet.title}
                </p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {previousPageToken && (
          <button
            onClick={() => fetchVideos(previousPageToken)}
            disabled={loading}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
          >
            {loading ? "Loading..." : "Previous"}
          </button>
        )}
        {nextPageToken && (
          <button
            onClick={() => fetchVideos(nextPageToken)}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            {loading ? "Loading..." : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Videos;
