import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../styles/DetailForm.css";

const DetailForm = () => {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    profession: "",
    about: "",
    skill: "",
    mail: "",
    contact: "",
    location: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    axios
      .get(`http://localhost:9091/profiles/${formData.id}`)
      .then((response) => {
        setProfiles(response.data ? [response.data] : []);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
  };

  const createProfile = () => {
    axios
      .post("http://localhost:9091/profiles", formData)
      .then((response) => {
        console.log("Profile Created:", response.data);
        fetchProfiles();
      })
      .catch((error) => {
        console.error("Error creating profile:", error);
      });
  };

  const updateProfile = () => {
    axios
      .put(`http://localhost:9091/profiles/${formData.id}`, formData)
      .then((response) => {
        console.log("Profile Updated:", response.data);
        navigate(`/teacher/raka`, { state: { updatedProfile: response.data } });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const deleteProfile = (id) => {
    axios
      .delete(`http://localhost:9091/profiles/${id}`)
      .then(() => {
        console.log("Profile Deleted");
        fetchProfiles();
      })
      .catch((error) => {
        console.error("Error deleting profile:", error);
      });
  };

  const handleCreate = () => {
    createProfile();
    setFormData({
      id: "",
      name: "",
      profession: "",
      about: "",
      skill: "",
      mail: "",
      contact: "",
      location: "",
    });
  };

  const handleUpdate = () => {
    updateProfile();
    setFormData({
      id: "",
      name: "",
      profession: "",
      about: "",
      skill: "",
      mail: "",
      contact: "",
      location: "",
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
          placeholder="Enter User ID"
          className="ok"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="ok"
        />
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={(e) =>
            setFormData({ ...formData, profession: e.target.value })
          }
          placeholder="Profession"
          className="ok"
        />
        <input
          type="text"
          name="about"
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
          placeholder="About"
          className="ok"
        />
        <input
          type="text"
          name="skill"
          value={formData.skill}
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
          placeholder="Skill"
          className="ok"
        />
        <input
          type="email"
          name="mail"
          value={formData.mail}
          onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
          placeholder="Mail"
          className="ok"
        />
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          placeholder="Contact"
          className="ok"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          placeholder="Location"
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
            {profile.name}
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

export default DetailForm;
