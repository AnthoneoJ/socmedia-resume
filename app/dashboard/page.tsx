"use client";

import CardCreatePost from "./CardCreatePost";
import CardPost from "./CardPost";
import CardSectionWidget from "./CardSectionWidget";
import CardSideWidget from "./CardSideWidget";

const Dashboard = () => {
  const mockSideList = [
    {
      title: "Programming",
      content: "Python\nJavaScript / TypeScript",
    },
    {
      title: "Technology",
      content: "PySide/PyQt\nOpenCV\nPyTorch, Tensorflow",
    },
    // Add more mock content as needed
  ];

  const languagesList = [
    {
      title: "Language Proficiency",
      content: "English - Native\nMandarin - Full professional\nJapanese - Elementary",
    },
  ];

  const createPostData = {
    image: "/profile_pic/p1.png", // Replace with actual image path
    placeholder: "Full name",
    type_text_1: "City",
    type_text_2: "(60) 123-456789",
    type_text_3: "name@email.com",
  };

  const mockPosts = [
    {
      postId: "1",
      name: "John Doe",
      image: "/profile_pic/p1.png", // Replace with actual image path
      message: "This is a mock post message.",
      location: "Company . Location . Job Title",
      timestamp: "Jan 2024", // Current date and time
    },
    {
      postId: "2",
      name: "Jane Smith",
      image: "/profile_pic/p1.png", // Replace with actual image path
      postImage: "/profile_pic/p1.png", // Replace with actual post image path
      message: "Another mock post message.",
      timestamp: "Jan 2024", // Current date and time
    },
    // Add more mock posts as needed
  ];

  const mockSectionList = [
    {
      title: "Bsc Civil Engineering . Harvard University",
      content: "2020 - 2024",
    },
    {
      title: "Advanced Placement . ABC College",
      content: "2018 - 2020",
    },
  ];

  return (
    <div className="grid grid-cols-[26%_74%] overflow-hidden">
      <div className="flex flex-col gap-4 pb-4 pr-4">
        <CardSideWidget items={mockSideList} />
        <CardSideWidget items={languagesList} />
      </div>
      <div className="grid grid-cols-1 gap-4 pb-4">
        <CardCreatePost
          image={createPostData.image}
          placeholder={createPostData.placeholder}
          type_text_1={createPostData.type_text_1}
          type_text_2={createPostData.type_text_2}
          type_text_3={createPostData.type_text_3}
        />
        {mockPosts.map((post) => (
          <CardPost
            key={post.postId}
            postId={post.postId}
            name={post.name}
            image={post.image}
            postImage={post.postImage}
            message={post.message}
            location={post.location}
            timestamp={post.timestamp}
          />
        ))}
        <CardSectionWidget section_title="Education" items={mockSectionList}/>
        <CardSectionWidget section_title="Education" items={mockSectionList}/>
        <CardSectionWidget section_title="Education" items={mockSectionList}/>
      </div>
    </div>
  );
};

export default Dashboard;
