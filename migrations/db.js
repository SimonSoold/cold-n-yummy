const db = require("../db/sqlite")

db.serialize(( ) => {
    db.run("DROP TABLE IF EXISTS flavor")
    db.run("DROP TABLE IF EXISTS combos ")
    db.run("DROP TABLE IF EXISTS flavorCombos")
    db.run(`CREATE TABLE "combos" ( "comboName" TEXT NOT NULL UNIQUE, "submittedBy" TEXT NOT NULL, "comboId" INTEGER NOT NULL, PRIMARY KEY("comboId" AUTOINCREMENT) )`)
    db.run(`CREATE TABLE "flavor" ( "flavorName" TEXT NOT NULL UNIQUE, "flavorId" INTEGER NOT NULL, PRIMARY KEY("flavorId" AUTOINCREMENT) )`)
    db.run(`CREATE TABLE "flavorCombos" ( "flavorComboId" INTEGER NOT NULL, "flavorId" INTEGER NOT NULL, "comboId" INTEGER NOT NULL, UNIQUE("flavorId","comboId"), PRIMARY KEY("flavorComboId"), FOREIGN KEY("comboId") REFERENCES "combos"("comboId") ON DELETE NO ACTION ON UPDATE NO ACTION, FOREIGN KEY("flavorId") REFERENCES "flavor"("flavorId") ON DELETE NO ACTION ON UPDATE NO ACTION )`)
    db.run(`CREATE TABLE sqlite_sequence(name,seq)`)
    db.run("PRAGMA foreign_keys = ON")
})




//
// 
// 
// 
