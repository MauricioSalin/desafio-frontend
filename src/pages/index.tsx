import { searchMostPopularVideos, searchVideos } from '@/pages/api'
import { NextPage, GetStaticProps } from 'next'

/**
 * Components
 */
import VideoSection from '@/components/VideoSection'

/**
 * Types
 */
import { Video } from '@/types/videos'

interface Props {
  initialVideos: Video[]
  soccerVideos: Video[]
  policyVideos: Video[]
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
  )
}

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
  ])

  return {
    props: {
      initialVideos: [],
      soccerVideos: [],
      policyVideos: []
    }
  }
}

export default Home
