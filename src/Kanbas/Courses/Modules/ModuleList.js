import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Button, ListGroup, Form, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <ListGroup>
        <ListGroup.Item>
          <InputGroup className="mb-3">
            <Form.Control
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
              placeholder="Module Name"
            />
            <Button
              variant="primary"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </Button>
            <Button
              variant="secondary"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </Button>
          </InputGroup>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </ListGroup.Item>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ListGroup.Item key={index} className="mb-2">
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </Button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default ModuleList;