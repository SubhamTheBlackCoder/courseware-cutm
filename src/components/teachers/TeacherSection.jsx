import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Left, Right } from "./Arrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Teacher.css";

const TeacherSection = () => {
  return (
    <div>
      <div className="teacher-wrapper">
        <h1>Top Teachers on Headout</h1>
        <hr
          style={{
            backgroundColor: "#ffbb58",
            width: "75px",
            height: "2px",
            border: "none",
            marginTop: "0px",
            marginLeft: "0px",
            marginBottom: "20px",
          }}
        />
        <div className="teacher-carousel-wrap">
          <TeachersSlider />
        </div>
        <hr
          style={{
            height: "1px",
            color: "#e7e7e7",
            borderTop: "none",
            borderLeft: "none",
          }}
        />
      </div>
      <hr className="section-divide-hr" />
    </div>
  );
};

const TeachersSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };

  return (
    <Slider {...settings}>
      {TeachersData &&
        TeachersData.map(({ id, teachers, url, description, route }) => (
          <Link
            to={{ pathname: `/teacher/${route}` }}
            key={id}
            className="link"
          >
            <TeachersCard
              teachers={teachers}
              url={url}
              description={description}
            />
          </Link>
        ))}
    </Slider>
  );
};

const TeachersCard = ({ teachers, url, description }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="teachers-card-wrapper">
      <div className="teachers-card">
        <div className="teachers-card-img" style={backgroundImageStyle} />
        <div className="teachers-details">
          <div id="triangle" />
          <p>{teachers}</p>
          <div id="teachers-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeachersData = [
  {
    id: 1,
    teachers: "Rakesh Kumar ray",
    route: "raka",
    description: "Assistant Professor in Department of Computer Science",
    url: "https://faculty.cutm.ac.in/public/images/1614057756rakesh1.jpg",
  },
  {
    id: 2,
    teachers: "Bubun kumar mohanta",
    route: "smarty",
    description: "An offer you can't refuse",
    url: "../images/teacher/bubun.png",
  },
  {
    id: 3,
    teachers: "Rashmi ranjan swain",
    route: "killersmile",
    description: "Roam the eternal teachers",
    url: "../images/teacher/rashmi.png",
  },
  {
    id: 4,
    teachers: "Dr. Supriya Pattanayak",
    route: "intelli",
    description: "PhD Professor School of Social Sciences",
    url: "https://faculty.cutm.ac.in/public/images/1599715559.jpg",
  },
  {
    id: 5,
    teachers: "Dr Sudhansu Kumar Samal",
    route: "db",
    description: "Associate Professor Centurion University of Technology ",
    url: "https://faculty.cutm.ac.in/public/images/1663352999IMG-20210324-WA0014-removebg-preview.jpg",
  },
  {
    id: 6,
    teachers: "Subham barik",
    route: "sb",
    description: "An Oasis like no other",
    url: "https://faculty.cutm.ac.in/public/images/1589120175.jpg",
  },
  {
    id: 7,
    teachers: "Susmita Chakrabarty",
    route: "puru",
    description: "Hacer Peunte a Catalunya",
    url: "https://faculty.cutm.ac.in/public/images/1611824293WhatsApp%20Image%202021-01-28%20at%202.27.33%20PM.jpeg",
  },
];

export default TeacherSection;
