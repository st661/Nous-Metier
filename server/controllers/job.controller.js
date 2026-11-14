import Job from "../models/job.model.js";
import errorHandler from "../helpers/dbErrorHandler.js";

const create = async (req, res) => {
    const job = new Job(req.body);
    job.postedBy = req.auth._id;

    try {
        await job.save();
        return res.status(200).json(job);
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const list = async (req, res) => {
    try {
        let jobs = await Job.find().sort({ created: -1 });
        res.json(jobs);
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const jobByID = async (req, res, next, id) => {
    try {
        let job = await Job.findById(id);
        if (!job) 
            return res.status(400).json({
                error: "Job not found",
            });
        req.job = job;
        next();
    }
    catch (err) {
        return res.status(400).json({
            error: "Could not retrieve job",
        });
    }
};

const read = (req, res) => {
    return res.json(req.job);
};

const update = async (req, res) => { 
    try {
        req.job.set(req.body);
        req.job.updated = Date.now();
        await req.job.save();
        res.json(req.body);
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        let job = req.job;
        let deletedJob = await job.deleteOne();
        res.json(deletedJob);
    } 
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const isPoster = (req, res, next) => {
    const poster = req.job && req.auth && req.job.postedBy && req.job.postedBy.toString() === req.auth._id.toString();
    if (!poster) {
        return res.status(403).json({
            error: "User is not authorized"
        });
    }
    next();
};

export default { create, list, jobByID, read, update, remove, isPoster };