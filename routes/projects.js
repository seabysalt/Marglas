const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const Task = require("../models/Task");

// /api/projects
router.get("/", (req, res) => {
  //   get all projects
  // instead of res.render() -> res.json()
  Project.find()
    .populate("tasks")
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Project.findById(id)
    .populate("tasks")
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});
// /api/projects
router.post("/", (req, res) => {
  // const title = req.body.title
  // const description = req.body.description
  const { title, description } = req.body;

  // Project.create({ title: title, description: description })
  Project.create({ title, description, owner: req.user._id })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  Project.findByIdAndUpdate(id, { title, description })
    .then(() => {
      res.json({ message: `Project with id ${id} was successfully updated` });
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Project.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: `Project with id ${id} was successfully deleted` });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
