import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

import { BACKEND_URL } from "../../../utils/constants";

const Post = () => {

  const router = useRouter();
  const { query } = router;

  const [post, setPost] = useState({});
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		setLoading(true);
    if (query.id) {
      fetch(`${BACKEND_URL}/blog-posts/${query.id}`)
      .then(response => response.json())
      .then(resultData => {
        setPost(resultData);
      }).finally(() => {
        setLoading(false);
      });
    }
	}, [query]);

  return(
    <>
      <PostHeader post={post} loading={loading} />
      <PostContent post={post} />
    </>
  )
}

export default Post;