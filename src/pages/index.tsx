import { searchMostPopularVideos, searchVideos } from '@/pages/api';
import { NextPage, GetStaticProps } from 'next';

/**
 * Components
 */
import VideoSection from '@/components/Section';

/**
 * Types
 */
import { Video } from '@/types/videos';

interface Props {
  initialVideos: Video[];
  soccerVideos: Video[];
  policyVideos: Video[];
}

const Home: NextPage<Props> = ({
  initialVideos,
  soccerVideos,
  policyVideos
}) => {
  return (
    <>
      <main className="container">
        {initialVideos.length > 0 && (
          <VideoSection
            title="Most popular"
            description="The most viewed videos today"
            videos={initialVideos}
          />
        )}

        {soccerVideos.length > 0 && (
          <VideoSection
            title="Soccer"
            description=" Most accessed videos about soccer"
            videos={soccerVideos}
          />
        )}

        {policyVideos.length > 0 && (
          <VideoSection
            title="Policy"
            description="What are talking about politics"
            videos={policyVideos}
          />
        )}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [
    {
      data: { items: initialVideos }
    },
    {
      data: { items: soccerVideos }
    },
    {
      data: { items: policyVideos }
    }
  ] = await Promise.all([
    searchMostPopularVideos(),
    searchVideos('soccer'),
    searchVideos('policy')
  ]);

  return {
    props: {
      initialVideos,
      soccerVideos,
      policyVideos
    }
  };
};

export default Home;
