import PostParagraph from "../post-components/PostParagraph";
import PostImage from "../post-components/PostImage";
import PostQuote from "../post-components/PostQuote";

const PostContent = ({ post }) => {

  const { content } = post;

  return (
    <section className="single-post-wrapper single-col-max-width py-5 px-4 mx-auto">
      {
        content && content.map((item, idx) => {
          switch (item.type) {
            case "paragraph":
              return (
                <div key={idx} className="section-row">
                  <PostParagraph heading={item.heading} text={item.text} />
                </div>
              )
            case "image":
              return (
                <div key={idx} className="section-row">
                  <PostImage src={item.src} alt={item.alt} caption={item.caption} />
                </div>
              )
            case "quote":
              return (
                <div key={idx} className="section-row">
                  <PostQuote quote={item.quote} author={item.author} />
                </div>
              )
            default:
              return (<h3 key={idx}>No content!</h3>)
          }
        })
      }
    </section>
  )
}

export default PostContent;
