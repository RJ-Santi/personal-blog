import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React Testing with Ryan', excerpt: 'Learn React not so well lol' },
]

const Home: NextPage = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Ryan's Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard />
          ))}
        </div>
        <div className='lg-col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
