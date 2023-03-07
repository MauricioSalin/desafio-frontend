import { searchVideos } from '@/pages/api';
import { NextPage, GetServerSideProps } from 'next';

/**
 * Components
 */
import VideoSection from '@/components/Section';

/**
 * Types
 */
import { Video } from '@/types/videos';

interface Props {
  foundVideos: Video[];
  searchQuery: string;
}

const Results: NextPage<Props> = ({ foundVideos, searchQuery }) => {
  return (
    <>
      <main className="container">
        <div className="video-section">
          {foundVideos ? (
            <VideoSection
              title={`Results for "${searchQuery}"`}
              description="Your search results"
              videos={foundVideos}
            />
          ) : (
            <VideoSection
              title="No video found"
              description="Your search results"
            />
          )}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: foundVideos } = await searchVideos(query.searchQuery as string);

  console.log('entrei');

  return {
    props: {
      ...(query &&
        query.searchQuery && {
          foundVideos: foundVideos.items,
          searchQuery: query.searchQuery
        })
    }
  };
};

export default Results;
