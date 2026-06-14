const commentsData = [
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        user: "Shrutik Bhavsar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            user: "Shrutik Bhavsar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            user: "Shrutik Bhavsar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                user: "Shrutik Bhavsar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    user: "Shrutik Bhavsar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [],
                  },
                ],
              },
              {
                user: "Shrutik Bhavsar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        user: "Shrutik Bhavsar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    user: "Shrutik Bhavsar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { user, text, replies } = data;
  return (
    <div className="flex p-2 my-2 bg-gray-100 rounded-lg shadow-sm">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{user}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as a key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-8/12">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
