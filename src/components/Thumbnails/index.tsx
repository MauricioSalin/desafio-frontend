import React from 'react';
import Link from 'next/link';

/**
 * Components
 */
import Avatar from '../Avatar';

/**
 * Types
 */
import { Snippet } from '@/types/videos';

interface Props {
  snippet: Snippet;
  videoId: string;
}

const Thumbnails: React.FC<Props> = ({ snippet, videoId }) => {
  return (
    <div className="thumbnails">
      <Link href={`${process.env.youtubeWatchUrl}${videoId}`}>
        <img src={snippet.thumbnails.medium.url} />
      </Link>

      <div className="video-wrapper">
        <div className="video-avatar">
          <Avatar size={36} />
        </div>

        <div className="video-infos">
          <div
            className="video-title"
            dangerouslySetInnerHTML={{ __html: snippet.title }}
          />
          <div
            className="video-channel-title"
            dangerouslySetInnerHTML={{ __html: snippet.channelTitle }}
          />
        </div>
      </div>

      <style jsx>{`
        .thumbnails {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        img {
          width: 100%;
          border-radius: 1rem;
        }

        .video-avatar {
          display: flex;
          align-items: flex-start;
          margin: 12px 12px 0 0;
        }

        .video-wrapper {
          display: flex;
          flex-direction: row;
        }

        .video-infos {
          display: flex;
          flex-direction: column;
        }

        .video-title {
          font-size: 16px;
          color: #0f0f0f;
          font-weight: 500;
          margin: 12px 0 4px 0;
        }

        .video-channel-title {
          font-size: 12px;
          color: #606060;
        }

        @media (min-width: 40rem) {
          .thumbnails {
            width: 50%;
          }
        }
        @media (min-width: 56rem) {
          .thumbnails {
            width: 23%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Thumbnails;
