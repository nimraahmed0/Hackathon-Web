
import BlogPost from '@/Components/BlogPost'
import DiscountSection from '@/Components/DiscountSection'
import FeaturedProducts from '@/Components/FeaturedProducts'

import Moreone from '@/Components/Moreone'
import Navbar from '@/Components/Navbar'
import Trendingproducts from '@/Components/TrendingProducts'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
   <Navbar/>
   <FeaturedProducts/>
   <Moreone/>
   <Trendingproducts/>
   <DiscountSection/>
   <BlogPost/>
   </div>
  )
}
