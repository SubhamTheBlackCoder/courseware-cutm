import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../../../styles/DetailFormss.css";
import AutoResize from "./AutoResize";
const DetailFormAdvanceAppAa = () => {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    courseName: "",
    credit: "",
    courseObjective: "",
    learningOutcomes: "",
    coreSyllabus: "",
    session: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    axios
      .get("http://localhost:9092/courses")
      .then((response) => {
        setProfiles(response.data ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  };

  const createProfile = (course) => {
    axios
      .post("http://localhost:9092/courses", course)
      .then((response) => {
        console.log("Profile Created:", response.data);
        fetchProfiles();
      })
      .catch((error) => {
        console.error("Error creating profile:", error);
      });
  };

  const updateProfile = (course) => {
    axios
      .put(`http://localhost:9092/courses/${course.id}`, course)
      .then((response) => {
        console.log("Profile Updated:", response.data);
        localStorage.setItem("updatedProfile", JSON.stringify(response.data));
        navigate(`/course/core-course/Advanced-algebra/description`, {
          state: { enteredText: response.data.courseName },
        });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const deleteProfile = (id) => {
    axios
      .delete(`http://localhost:9092/courses/${id}`)
      .then(() => {
        console.log("Profile Deleted");
        fetchProfiles();
      })
      .catch((error) => {
        console.error("Error deleting profile:", error);
      });
  };

  const handleCreate = () => {
    createProfile(formData);
    setFormData({
      id: "",
      courseName: "",
      credit: "",
      courseObjective: "",
      learningOutcomes: "",
      coreSyllabus: "",
      session: "",
    });
  };

  const handleUpdate = () => {
    updateProfile(formData);
    setFormData({
      id: "",
      courseName: "",
      credit: "",
      courseObjective: "",
      learningOutcomes: "",
      coreSyllabus: "",
      session: "",
    });
  };

  return (
    <div>
      <form className="form-container">
        <h1>Fill the details </h1>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          placeholder="Course ID"
          className="ok"
        />
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={(e) =>
            setFormData({ ...formData, courseName: e.target.value })
          }
          placeholder="Course Name"
          className="ok"
        />
        <input
          type="text"
          name="credit"
          value={formData.credit}
          onChange={(e) => setFormData({ ...formData, credit: e.target.value })}
          placeholder="Credit"
          className="ok"
        />
        <AutoResize
          name="courseObjective"
          value={formData.courseObjective}
          onChange={(e) =>
            setFormData({ ...formData, courseObjective: e.target.value })
          }
          placeholder="Course Objective"
          className="ok"
        />
        <AutoResize
          name="learningOutcomes"
          value={formData.learningOutcomes}
          onChange={(e) =>
            setFormData({ ...formData, learningOutcomes: e.target.value })
          }
          placeholder="Learning Outcomes"
          className="ok"
        />
        <AutoResize
          name="coreSyllabus"
          value={formData.coreSyllabus}
          onChange={(e) =>
            setFormData({ ...formData, coreSyllabus: e.target.value })
          }
          placeholder="Core Syllabus"
          className="ok"
        />
        <AutoResize
          name="session"
          value={formData.session}
          onChange={(e) =>
            setFormData({ ...formData, session: e.target.value })
          }
          placeholder="Session"
          className="ok"
        />
      </form>

      <div>
        <button onClick={fetchProfiles}>Show Details</button>
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleUpdate}>Update</button>
      </div>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.courseName}
            <div className="form-actions">
              <button onClick={() => setFormData(profile)}>Edit</button>
              <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DetailFormAdvanceAppAa;
