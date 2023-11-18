import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Teacher from "../pages/Teacher";
import Course from "../pages/Course";
import Navbar from "./Navbar";
import ProgrammeStructure from "../coursecard/programmeStructure/ProgrammeStructure";
import AssessmentCriterion from "../coursecard/assessmentCriterion/AssessmentCriterion";
import OtherInformation from "../coursecard/OtherInformation/OtherInformation";
import CoreCourses from "../coursecard/CoreCourses/CoreCourses";
import CoreCourseCard from "../coursecard/CoreCourses/CoreCourseCard/CoreCourseCard";
import DomainCourses from "../coursecard/domain/DomainCourses";
import DomainCourseCard from "../coursecard/domain/domainCard/DomainCourseCard";
import SkillCourses from "../coursecard/skillCourse/SkillCourses";
import SkillCourseCard from "../coursecard/skillCourse/skillCard/SkillCourseCard";
import AdvancedApplication from "../coursecard/CoreCourses/AdvanceApp/AdvancedApplication";
import Description from "../coursecard/CoreCourses/AdvanceApp/description/Description";
import AdvanceWebProgramming from "../coursecard/CoreCourses/AdvanceWebProgrammings/AdvanceWebProgramming";
import DescriptionAwp from "../coursecard/CoreCourses/AdvanceWebProgrammings/description/DescriptionAwp";
import AdvancedAlgebra from "../coursecard/CoreCourses/AdvancedAlgebras/AdvancedAlgebra";
import DescriptionAa from "../coursecard/CoreCourses/AdvancedAlgebras/description/DescriptionAa";
import AdvancedAnalysis from "../coursecard/CoreCourses/AdvancedAnalysiss/AdvancedAnalysis";
import DescriptionAnalysis from "../coursecard/CoreCourses/AdvancedAnalysiss/description/DescriptionAnalysis";
import AdvancedAquaculture from "../coursecard/CoreCourses/AdvancedAquacultures/AdvancedAquaculture";
import DescriptionAqua from "../coursecard/CoreCourses/AdvancedAquacultures/description/DescriptionAqua";
import AdvancedHematology from "../coursecard/CoreCourses/AdvancedHematologies/AdvancedHematology";
import DescriptionHema from "../coursecard/CoreCourses/AdvancedHematologies/description/DescriptionHema";
import AdvancedMetrology from "../coursecard/CoreCourses/AdvancedMetrologies/AdvancedMetrology";
import DescriptionMetro from "../coursecard/CoreCourses/AdvancedMetrologies/description/DescriptionMetro";
import AdvancedPropulsionn from "../coursecard/CoreCourses/AdvancedPropulsionn/AdvancedPropulsion";
import DescriptionPro from "../coursecard/CoreCourses/AdvancedPropulsionn/description/DescriptionPro";
import Aerodynamic from "../coursecard/CoreCourses/Aerodynamics/Aerodynamic";
import DescriptionAero from "../coursecard/CoreCourses/Aerodynamics/description/DescriptionAero";
import TeacherFirstPage from "../teachers/teachersUi/TeacherFirstPage";
import Form from "../teachers/teachersUi/Admin/Form";
import DetailForm from "../teachers/teachersUi/Admin/DetailsfillForm/DetailForm";
import TeacherFirstPages from "../teachers/BubunMohanta/TeacherFirstPages";
import Forms from "../teachers/BubunMohanta/Admin/Forms";
import DetailsForm from "../teachers/BubunMohanta/Admin/DetailsfillForm/DetailsForm";
import TeacherSection from "../teachers/TeacherSection";
import Cards from "../coursecard/Cards";
import TeacherFirstPageRashmi from "../teachers/rashmiranjansahoo/TeacherFirstPageRashmi";
import FormForRashmi from "../teachers/rashmiranjansahoo/Admin/FormForRashmi";
import DetailsFormRashmi from "../teachers/rashmiranjansahoo/Admin/DetailsfillForm/DetailsFormRashmi";
import TeacherFirstPageSupriya from "../teachers/supriyapattnaik/TeacherFirstPageSupriya";
import FormForSupriya from "../teachers/supriyapattnaik/Admin/FormForSupriya";
import DetailsFormSupriya from "../teachers/supriyapattnaik/Admin/DetailsfillForm/DetailsFormSupriya";
import TeacherFirstPageSudhansu from "../teachers/sudhansamal/TeacherFirstPageSudhansu";
import FormForSudhansu from "../teachers/sudhansamal/Admin/FormForSudhansu";
import DetailsFormSudhansu from "../teachers/sudhansamal/Admin/DetailsfillForm/DetailsFormSudhansu";
import FormForAdvanceApp from "../coursecard/CoreCourses/AdvanceApp/description/Admin/FormForAdvanceApp";
import DetailsFormAdvanceApp from "../coursecard/CoreCourses/AdvanceApp/description/Admin/DetailsfillForm/DetailsFormAdvanceApp";
import FormForAdvanceWebProgramming from "../coursecard/CoreCourses/AdvanceWebProgrammings/description/Admin/FormForAdvanceWebProgramming";
import DetailFormAdvanceApp from "../coursecard/CoreCourses/AdvanceWebProgrammings/description/Admin/DetailsfillForm/DetailsFormAdvanceApp";
import FormForAdvancedAlgebraApp from "../coursecard/CoreCourses/AdvancedAlgebras/description/Admin/FormForAdvancedAlgebraApp";
import DetailFormAdvanceAppAa from "../coursecard/CoreCourses/AdvancedAlgebras/description/Admin/DetailsfillForm/DetailsFormAdvanceAppAa";
import FormForAdvancedAnalysisApp from "../coursecard/CoreCourses/AdvancedAnalysiss/description/Admin/FormForAdvancedAnalysisApp";
import DetailsFormAdvancedAnalysisAppAa from "../coursecard/CoreCourses/AdvancedAnalysiss/description/Admin/DetailsfillForm/DetailsFormAdvancedAnalysisAppAa";
import FormForAdvancedAquacultures from "../coursecard/CoreCourses/AdvancedAquacultures/description/Admin/FormForAdvancedAquacultures";
import DetailsFormAdvancedAquacultureAppAa from "../coursecard/CoreCourses/AdvancedAquacultures/description/Admin/DetailsfillForm/DetailsFormAdvancedAquacultureAppAa";
import FormForHema from "../coursecard/CoreCourses/AdvancedHematologies/description/Admin/FormForHema";
import DetailsFormHema from "../coursecard/CoreCourses/AdvancedHematologies/description/Admin/DetailsfillForm/DetailsFormHema";
import FormForMetro from "../coursecard/CoreCourses/AdvancedMetrologies/description/Admin/FormForMetro";
import DetailsFormMetro from "../coursecard/CoreCourses/AdvancedMetrologies/description/Admin/DetailsfillForm/DetailsFormMetro";
import FormForPro from "../coursecard/CoreCourses/AdvancedPropulsionn/description/Admin/FormForPro";
import DetailsFormPro from "../coursecard/CoreCourses/AdvancedPropulsionn/description/Admin/DetailsfillForm/DetailsFormPro";

const AppRouter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--primary-bg", "#fff");
      root.style.setProperty("--primary-text", "#333");
      root.style.setProperty("--secondary-bg", "#007bff");
      root.style.setProperty("--secondary-text", "#fff");
      root.style.setProperty("--border-color", "#ccc");
    } else {
      root.style.setProperty("--primary-bg", "#333");
      root.style.setProperty("--primary-text", "#fff");
      root.style.setProperty("--secondary-bg", "#555");
      root.style.setProperty("--secondary-text", "#007bff");
      root.style.setProperty("--border-color", "#555");
    }
  };

  return (
    <Router>
      <Navbar onDarkModeToggle={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/teacher">
          <Route index element={<TeacherSection />} />
          <Route path="raka" element={<TeacherFirstPage />} />
          <Route path="/teacher/raka/users" element={<Form />} />
          <Route
            path="/teacher/raka/users/detail-form"
            element={<DetailForm />}
          />
          {/*bubun sir */}
          <Route path="smarty" element={<TeacherFirstPages />} />
          <Route path="/teacher/smarty/users" element={<Forms />} />
          <Route
            path="/teacher/smarty/users/detail-form"
            element={<DetailsForm />}
          />
          {/*rashmi sir */}
          <Route path="killersmile" element={<TeacherFirstPageRashmi />} />
          <Route
            path="/teacher/Killersmile/users"
            element={<FormForRashmi />}
          />
          <Route
            path="/teacher/killersmile/users/detail-form"
            element={<DetailsFormRashmi />}
          />

          {/*Supriya maa'm*/}
          <Route path="intelli" element={<TeacherFirstPageSupriya />} />
          <Route path="/teacher/intelli/users" element={<FormForSupriya />} />
          <Route
            path="/teacher/intelli/users/detail-form"
            element={<DetailsFormSupriya />}
          />
          {/*Sudhansu sir*/}

          <Route path="db" element={<TeacherFirstPageSudhansu />} />
          <Route path="/teacher/db/users" element={<FormForSudhansu />} />
          <Route
            path="/teacher/db/users/detail-form"
            element={<DetailsFormSudhansu />}
          />
        </Route>

        <Route path="/course">
          <Route index element={<Cards />} />
          {/*Programm structure */}

          <Route
            path="/course/ProgrammeStructure"
            element={<ProgrammeStructure />}
          />

          {/*AssessmentCriterion */}

          <Route
            path="/course/AssessmentCriterion"
            element={<AssessmentCriterion />}
          />

          {/*OtherInformation */}

          <Route
            path="/course/OtherInformation"
            element={<OtherInformation />}
          />

          {/*core-course */}

          <Route path="/course/core-course" element={<CoreCourses />} />

          {/*<AdvancedApplication*/}
          <Route
            path="/course/core-course/Advanced-Application"
            element={<AdvancedApplication />}
          >
            <Route
              path="/course/core-course/Advanced-Application/description"
              element={<Description />}
            ></Route>
          </Route>
          <Route
            path="/course/core-course/Advanced-Application/description/users"
            element={<FormForAdvanceApp />}
          />
          <Route
            path="/course/core-course/Advanced-Application/description/users/detail-form"
            element={<DetailsFormAdvanceApp />}
          />

          {/*<AdvanceWebProgramming*/}

          <Route
            path="/course/core-course/Advance-web-Programming"
            element={<AdvanceWebProgramming />}
          >
            <Route
              path="/course/core-course/Advance-web-Programming/description"
              element={<DescriptionAwp />}
            ></Route>
          </Route>
          <Route
            path="/course/core-course/Advance-web-Programming/description/users"
            element={<FormForAdvanceWebProgramming />}
          />

          <Route
            path="/course/core-course/Advance-web-Programming/description/users/detail-form"
            element={<DetailFormAdvanceApp />}
          />

          {/*AdvancedAlgebra */}

          <Route
            path="/course/core-course/Advanced-algebra"
            element={<AdvancedAlgebra />}
          >
            <Route
              path="/course/core-course/Advanced-algebra/description"
              element={<DescriptionAa />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-algebra/description/users"
            element={<FormForAdvancedAlgebraApp />}
          />

          <Route
            path="/course/core-course/Advanced-algebra/description/users/detail-form"
            element={<DetailFormAdvanceAppAa />}
          />

          {/*AdvancedAnalysis */}

          <Route
            path="/course/core-course/Advanced-Analysis"
            element={<AdvancedAnalysis />}
          >
            <Route
              path="/course/core-course/Advanced-Analysis/description"
              element={<DescriptionAnalysis />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-Analysis/description/users"
            element={<FormForAdvancedAnalysisApp />}
          />

          <Route
            path="/course/core-course/Advanced-Analysis/description/users/detail-form"
            element={<DetailsFormAdvancedAnalysisAppAa />}
          />

          {/*AdvancedAquaculture */}

          <Route
            path="/course/core-course/Advanced-Aquaculture"
            element={<AdvancedAquaculture />}
          >
            <Route
              path="/course/core-course/Advanced-Aquaculture/description"
              element={<DescriptionAqua />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-Aquaculture/description/users"
            element={<FormForAdvancedAquacultures />}
          />
          <Route
            path="/course/core-course/Advanced-Aquaculture/description/users/detail-form"
            element={<DetailsFormAdvancedAquacultureAppAa />}
          />

          {/*AdvancedHematology*/}

          <Route
            path="/course/core-course/Advanced-Hematology/description"
            element={<AdvancedHematology />}
          >
            <Route
              path="/course/core-course/Advanced-Hematology/description"
              element={<DescriptionHema />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-Hematology/description/users"
            element={<FormForHema />}
          />
          <Route
            path="/course/core-course/Advanced-Hematology/description/users/detail-form"
            element={<DetailsFormHema />}
          />

          {/*AdvancedMetrology*/}

          <Route
            path="/course/core-course/Advanced-Metrology"
            element={<AdvancedMetrology />}
          >
            <Route
              path="/course/core-course/Advanced-Metrology/description"
              element={<DescriptionMetro />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-Metrology/description/users"
            element={<FormForMetro />}
          />

          <Route
            path="/course/core-course/Advanced-Metrology/description/users/detail-form"
            element={<DetailsFormMetro />}
          />

          {/*AdvancedPropulsionn*/}

          <Route
            path="/course/core-course/Advanced-Propulsionn"
            element={<AdvancedPropulsionn />}
          >
            <Route
              path="/course/core-course/Advanced-Propulsionn/description"
              element={<DescriptionPro />}
            />
          </Route>
          <Route
            path="/course/core-course/Advanced-Propulsionn/description/users"
            element={<FormForPro />}
          />
          <Route
            path="/course/core-course/Advanced-Propulsionn/description/users/detail-form"
            element={<DetailsFormPro />}
          />

          {/*Aerodynamic*/}

          <Route
            path="/course/core-course/Aerodynamic/description"
            element={<Aerodynamic />}
          >
            <Route
              path="/course/core-course/Aerodynamic/description"
              element={<DescriptionAero />}
            />
          </Route>

          {/*domain-course */}

          <Route path="/course/domain-course" element={<DomainCourses />} />
          <Route
            path="/course/domain-course/domain-card"
            element={<DomainCourseCard />}
          />
          {/*skill-course */}

          <Route path="/course/skill-course" element={<SkillCourses />} />
          <Route
            path="/course/skill-course/skill-card"
            element={<SkillCourseCard />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
