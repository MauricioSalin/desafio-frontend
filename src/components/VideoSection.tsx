import React from "react";

/**
 * Types
 */
import { Video } from "@/types/videos";

/**
 * Components
 */
import Thumbnails from "@/components/Thumbnails";

interface Props {
  title: string;
  description: string;
  videos: Video[];
}

const VideoSection: React.FC<Props> = ({ title, description, videos }) => {
  return (
    <>
      <h3 className="section-title">{title}</h3>
      <span className="section-description">{description}</span>
      <div className="section-videos">
        {videos &&
          videos.map((item: Video) => (
            <Thumbnails videoId={item.id.videoId} snippet={item.snippet} />
          ))}
      </div>

      <div className="section-divider" />

      <style jsx>{`
        .section-title {
          font-size: 20px;
          padding-left: 16px;
          font-weight: 500;
          margin: 0;
        }

        .section-description {
          font-size: 14px;
          color: #606060;
          padding-left: 16px;
        }

        .section-divider {
          border-top: 4px solid #0000001a;
          width: 100%;
          display: flexbox;
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
        }

        .section-videos {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default VideoSection;
