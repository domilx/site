import { getAllPostsMeta } from "@/lib/posts";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import Marquee from "@/components/marquee";
import PostsSection from "@/components/posts-section";
import Footer from "@/components/footer";

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <>
      <Hero />
      <AboutSection />
      <Marquee />
      <PostsSection posts={posts} />
      <Footer />
    </>
  );
}
