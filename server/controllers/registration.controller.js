import Registration from "../models/registration.model.js"
import extend from "lodash/extend.js"
import errorHandler from "./error.controller.js"

const create = async (req, res) => {
    const registration = new Registration(req.body);
    try {
        await registration.save();
        return res.status(200).json({
            message: "Successfully signed up!",
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const list = async (req, res) => {
    try {
        let registration = await Registration.find().select("firstname lastname email phone registration");
        res.json(registration);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const registrationByID = async (req, res, next, id) => {
    try {
        let registration = await Registration.findById(id);
        if (!registration)
            return res.status(400).json({
                error: "Registration not find",
            });
        req.profile = registration;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve registration",
        });
    }
};

const read = (req, res) => {
    req.profile.salt = undefined;
    return res.json(req.profile);
};

const update = async (req, res) => {
    try {
        let registration = req.profile;
        registration = extend(registration, req.body);
        await registration.save();
        registration.salt = undefined;
        res.json(registration);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        let registration = req.profile;
        let deletedRegistration = await registration.deleteOne();
        deletedRegistration.salt = undefined;
        res.json(deletedRegistration);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const removeAll = async (req, res) => {
    try {
        await Registration.deleteMany({});
        res.status(200).json({
            message: "All registrations are deleted.",
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

export default { create, registrationByID, read, list, remove, removeAll, update };