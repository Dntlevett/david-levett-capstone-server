/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const fs = require("fs");
const express = require("express");
const app = express();
const userSelect = [
  {
    id: 1,
    firstName: "rowValue1",
    lastName: "rowValue1",
    button: "rowValue1",
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_selection").del(userSelect);
  await knex("user_selection").insert(userSelect);
  // await knex("user_selection").insert([
  //   { id: 1, firstName: "rowValue1", lastName: "rowValue1" },
  //   { id: 2, firstName: "rowValue2", lastName: "rowValue2" },
  //   { id: 3, firstName: "rowValue3", lastName: "rowValue3" },
  // ]);
};
