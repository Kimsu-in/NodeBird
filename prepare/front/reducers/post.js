export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "수인",
      },
      content: "첫 번째 게시글 #해시태그 # 익스프레스",
      Images: [
        {
          src: "https://loremflickr.com/1280/720",
        },
        {
          src: "https://placekitten.com/640/360",
        },
        {
          src: "https://placebear.com/1280/720",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "배가 고파요!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "집에 가고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "suin",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // dummyPost를 앞에 붙여야 게시물 제일 앞에 올라감.
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
