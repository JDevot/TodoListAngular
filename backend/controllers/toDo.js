const Thing = require('../models/Things');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
        ...req.body,
    });
    if (!req.body.label)
    {
        res.status(400).json("mauvaise data");
    }
    else{
        thing
            .save()
            .then(() => res.status(201).json({message: "Objet crée !"}))
            .catch((error) => res.status(400).json({ error }));
    }
};

exports.modifyThings = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet modifié !" }))
        .catch((error) => res.status(400).json({ error }));
}

exports.getOneThings = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then((thing) => res.status(200).json(thing))
        .catch((error) => res.status(404).json({ error }));
}

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
}

exports.getAllThings = (req, res, next) => {
    Thing.find()
        .then((things) => res.status(200).json(things))
        .catch((error) => res.status(400).json({ error }));
} 