import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({ postData }) => {
  // 첫 번째 게시글 #해시태그 #익스프레스
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        // 정규표현식 https://regexr.com/ 에서 생성 및 테스트 가능
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
