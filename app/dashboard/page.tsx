"use client";

import generatePDF, { Margin, Options } from "react-to-pdf";
import CardCreatePost from "./CardCreatePost";
import CardPost from "./CardPost";
import CardSectionWidget from "./CardSectionWidget";
import CardSideWidget from "./CardSideWidget";

const generatePdfOptions: Options = {
  filename: "resume.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  //resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "letter",
    // default is 'portrait'
    orientation: "portrait"//landscape
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  /* overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true
    }
  } */
};

const rootElement = () => document.getElementById("root");
const downloadPdf = () => generatePDF(rootElement, generatePdfOptions);
//const downloadPdf = () => generatePDF(rootElement);

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
    <div className="grid grid-cols-[74%_26%] overflow-hidden">
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
      </div>
      <div className="flex flex-col gap-4 pb-4 pl-4">
        <CardSideWidget items={mockSideList} />
        <CardSideWidget items={languagesList} />
        <button className="bg-cardcol hover:bg-gray-400 font-semibold py-2 px-4 rounded inline-flex items-center shadow-md" onClick={downloadPdf}>
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
