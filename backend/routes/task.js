const router = require("express").Router();
const Task = require("../models/task");
const User = require("../models/users");
const { authenticateToken } = require("./auth");

router.post("/create-task", authenticateToken, async (req, res) => {
    try {
        const { title, desc } = req.body;
        const { id } = req.headers;
        const newTask = new Task({ title: title, desc: desc });
        const saveTask = await newTask.save();
        const TaskID = saveTask._id;
        await User.findByIdAndUpdate(id, { $push: { task: TaskID._id } })
        res.status(200).json({ message: "Task Created" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})

module.exports = router;