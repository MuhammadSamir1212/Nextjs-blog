import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../lib/PostsUtil";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <Hero />
        <FeaturedPosts posts={props.posts} />
      </Fragment>
    </div>
  );
}

export function getServerSideProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
