import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Top courses we provide!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="programmedb.png"
              text="Read about all our Programme Structure"
              label=" Programme Structure"
              path="/course/ProgrammeStructure"
            />
            <CardItem
              src="assesment.png"
              text="Read about all our Assessment Criterion"
              label="Assessment Criterion"
              path="/course/AssessmentCriterion"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="other.png"
              text="Read about all our Other Information"
              label=" Other Information"
              path="/course/OtherInformation"
            />
            <CardItem
              src="core.png"
              text="Read about all our core courses"
              label="core courses"
              path="/course/core-course"
            />
            <CardItem
              src="domain.png"
              text="  Read about all our domain courses"
              label=" domain courses"
              path="/course/domain-course"
            />
           <CardItem
              src="SkillCourse.png"
              text="Read about all our domain courses "
              label="skill courses "
              path="/course/skill-course"
            />
            
           
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;