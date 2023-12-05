import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import KanbasNavigation from "./KanbasNavigation";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
  });

  const URL = "https://kanbas-node-server-ap-ks3f.onrender.com/api/courses";

  useEffect(() => {
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    const newCourse = response.data;
    setCourses([newCourse, ...courses]);
    setCourse({ name: "", number: "", startDate: "", endDate: "" });
  };

  const updateCourse = async () => {
    await axios.put(`${URL}/${course._id}`, course);
    setCourses(courses.map(c => c._id === course._id ? course : c));
    setCourse({ name: "", number: "", startDate: "", endDate: "" });
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`${URL}/${courseId}`);
      setCourses(courses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
