import FetchPost from "@/app/posts/components/FetchPosts"
import FetchPostsUsingSWR from "@/app/posts/components/FetchPostsUsingSWR"

export default function PostPage(){
    return <>
      {/* <FetchPost/> */}
      <FetchPostsUsingSWR/>
    </>
}