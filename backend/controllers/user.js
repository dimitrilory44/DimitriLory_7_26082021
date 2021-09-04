const db = require('../models');
const { User } = db.sequelize.models;

exports.getAllUser = (req, res) => {
    User.findAll({where: {isAdmin: 0}})
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json(error))
};

exports.getOneUser = (req, res) => {
    User.findOne({where: {id: req.params.id}})
    .then(user => {
        res.status(200).json({
            userId: user.id,
            email: user.email,
            nom: user.nom,
            prenom: user.prenom,
            image: user.image,
            description: user.description,
            isAdmin: user.isAdmin 
        })
    }).catch(error => res.status(400).json(error));
};

exports.deleteUser = (req, res) => {
    User.destroy({where: {id: req.params.id}})
    .then(() => res.status(200).json({message: "Utilisateur supprimé !"}))
    .catch(error => res.status(400).json(error));
}