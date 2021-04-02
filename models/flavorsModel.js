const crudModel = require("./crudModel")

const allFlavors = async () => {
    return await crudModel.findAll("SELECT * FROM flavor")
}

const createFlavor = async (name) => {
    return await crudModel.create("INSERT INTO flavor(flavorName) VALUES (?)", [name])
}

const getFlavorById = async (id) => {
    return await crudModel.findOne("SELECT * FROM flavor WHERE flavorId = ?", [id]) 
}

const uppdateFlavorById = async (name, id) => {
    return await crudModel.update("UPDATE flavor SET flavorName = ? WHERE flavorId = ?", [name, id])
}

const deleteOne = async (id) => {
    return await crudModel.deleteOne("DELETE FROM flavor WHERE flavorId = ?", [id])
}
/*
    findAll,
    findOne,
    create,
    update,
    deleteOne
*/


module.exports = {
    allFlavors,
    createFlavor,
    getFlavorById,
    uppdateFlavorById,
    deleteOne
}

//SQL QUERIES
/*
INSERT INTO flavor 
VALUES ('Strachella', 1)

INSERT INTO flavor
VALUES ('Vanilla', 2)

INSERT INTO flavor
VALUES ('Rocky Road', 3)

INSERT INTO flavor(flavorName) VALUES ('Test')

SELECT * FROM flavor

SELECT * FROM flavor 
WHERE flavorName = 'Vanilla'

UPDATE flavor 
SET flavorName = 'Skurt'
WHERE flavorId = 2

DELETE FROM flavor WHERE flavorId = 2
*/
