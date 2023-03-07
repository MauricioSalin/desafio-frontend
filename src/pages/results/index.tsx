import { searchVideos } from "@/pages/api";
import { NextPage, GetServerSideProps } from "next";

/**
 * Types
 */
import { Video } from "@/types/videos";

/**
 * Components
 */
import Thumbnails from "@/components/Thumbnails";

interface Props {
  foundVideos: Video[];
  searchQuery: string;
}

const Home: NextPage<Props> = ({ foundVideos, searchQuery }) => {
  return (
    <>
      <main className="container">
        <div className="video-section">
          {foundVideos ? (
            <h3 className="section-title">Results for "{searchQuery}"</h3>
          ) : (
            <h3 className="section-title">No video found</h3>
          )}

          <span className="section-description">Your search results</span>
          <div className="videos-container">
            {foundVideos &&
              foundVideos.map((item: Video) => (
                <Thumbnails videoId={item.id.videoId} snippet={item.snippet} />
              ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          padding: 84px 60px 60px 60px;
          width: 100%;
        }

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
          justify-content: center;
          margin-bottom: 20px;
        }

        .videos-container {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: foundVideos } = await searchVideos(query.searchQuery as string);

  return {
    props: {
      ...(query &&
        query.searchQuery && {
          foundVideos: foundVideos.items,
          searchQuery: query.searchQuery,
        }),
    },
  };
};

export default Home;
