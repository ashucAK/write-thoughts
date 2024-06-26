import Image from 'next/image'
import { useContext } from 'react'
import { MediumContext } from '../context/WriteCon'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import Logo1 from '../static/juju.jpg'
import Logo2 from '../static/uji.jpg'
import Logo3 from '../static/ju.jpg'
import ju from '../static/ju.jpg'
import juju from '../static/juju.jpg'
import uji from '../static/uji.jpg'
import Gojo from '../static/Gojo.jpg'

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full cursor-pointer`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm cursor-pointer`,
  recommendationContainer: ``,
  title: `my-[1rem]`,
  articlesContainer: ``,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
}

const Recommendations = ({ author }) => {
  const { allPosts } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.accentedButton}>Get unlimited access</div>
        <div className={styles.searchBar}>
          <AiOutlineSearch />
          <input
            className={styles.searchInput}
            placeholder='Search'
            type='text'
          />
        </div>

        {author.length > 0 ? (
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={Gojo}
                alt='author'
                width={100}
                height={100}
              />
            </div>
            <div className={styles.authorName}>{author[0].data.name}</div>
            <div className={styles.authorFollowing}>
              {author[0].data.followerCount} followers
            </div>
            <div className={styles.authorActions}>
              <button className={styles.actionButton}>Follow</button>
              <button className={styles.actionButton}>
                <MdMarkEmailUnread />
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className={styles.recommendationContainer}>
          <div className={styles.title}>Read More</div>
          <div className={styles.articlesContainer}>
            {recommendedPosts.map(post => (
              <div key={post.id} className={styles.articleContentWrapper}>
                <div className={styles.articleContent}>
                  <div className={styles.recommendationAuthorContainer}>
                    <div
                      className={
                        styles.recommendationAuthorProfileImageContainer
                      }
                    >
                      <Image
                        src={post.author.image}
                        alt='author'
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={styles.recommendationAuthorName}>
                      {post.author.name}
                    </div>
                  </div>
                  <div className={styles.recommendationTitle}>{post.title}</div>
                </div>
                <div className={styles.recommendationThumbnailContainer}>
                  <Image
                    className={styles.recommendationThumbnail}
                    src={post.image}
                    alt='thumbnail'
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'Is Jujutsu Kaisen going to be a masterpiece shounen anime?',
    image: Logo1,
    author: {
      name: 'Jujutsu Kaisen',
      image: uji,
    },
  },
  {
    title: 'What is the manga "Aku no Hana" really about? What does the ending mean?',
    image: Logo2,
    author: {
      name: 'Jujutsu Kaisen',
      image: ju,
    },
  },
  {
    title: 'What chapter do I start reading Jujutsu Kaisen if I finished season 1 in the anime?',
    image: Logo3,
    author: {
      name: 'Jujutsu Kaisen',
      image: juju,
    },
  },
]
