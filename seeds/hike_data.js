/**

 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// import tommhoi from "../data/images/tommhoi.jpeg";
const fs = require("fs");
const express = require("express");
const app = express();

const hikeData = [
  {
    id: 1,

    imagePath: "/images/tommhoi.jpeg",
    name: "Grouse Grind Proper",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "3.2km",
    elevation: "867m",
  },
  {
    id: 2,
    imagePath: "",
    name: "Golden Ears Summit",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "26km",
    elevation: "1800m",
  },
  {
    id: 3,
    imagePath: "",
    name: "Wedgemount Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "12km",
    elevation: "1160m",
  },
  {
    id: 4,
    imagePath: "",
    name: "Elk Mountain",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "7km",
    elevation: "800m",
  },
  {
    id: 5,
    imagePath: "",
    name: "Joffre Lakes",
    city: "Pemberton",
    province: "British Columbia",
    distance: "10km",
    elevation: "370m",
  },
  {
    id: 6,
    imagePath: "",
    name: "Saint Mark's Summit",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "10km",
    elevation: "570m",
  },
  {
    id: 7,
    imagePath: "",
    name: "Garibaldi Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "18.2km",
    elevation: "979m",
  },
  {
    id: 8,
    imagePath: "",
    name: "The Lions Binkert Trail",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "16km",
    elevation: "1280m",
  },
  {
    id: 9,
    imagePath: "",
    name: "Al's Habrich Ridge Trail",
    city: "Howe Sound",
    province: "British Columbia",
    distance: "7km",
    elevation: "440m",
  },
  {
    id: 10,
    imagePath: "",
    name: "Elfin Lakes",
    city: "Garibaldi Provincial Park",
    province: "British Columbia",
    distance: "22km",
    elevation: "600m",
  },
  {
    id: 11,
    imagePath: "",
    name: "Stawamus Chief",
    city: "Squamish",
    province: "British Columbia",
    distance: "5.8km",
    elevation: "657m",
  },
  {
    id: 12,
    imagePath: "",
    name: "Burke North Summit",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "24km",
    elevation: "1273m",
  },
  {
    id: 13,
    imagePath: "",
    name: "Coquitlam Lake View Trail",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "610m",
  },
  {
    id: 14,
    imagePath: "",
    name: "Crown Mountain",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "9.8km",
    elevation: "385m",
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hikes_list").del();
  // for (const hike of hikeData) {
  //   // Read the image file into a buffer
  //   const image = fs.readFileSync(hike.imagePath);
  //   // Create an instance of TextEncoder
  //   const encoder = new TextEncoder();
  //   // Convert the buffer to a base64 string
  //   const imageBase64 = encoder.encode(image.toString("base64"));
  await knex("hikes_list").insert(hikeData);

  //   { id: 1, colName: "rowValue1" },
  //   { id: 2, colName: "rowValue2" },
  //   { id: 3, colName: "rowValue3" },
  // ]);
  //   await knex("hikes_list").insert({
  //     id: hike.id,
  //     imagePath: imageBase64, // Add this line
  //     name: hike.name,
  //     city: hike.city,
  //     province: hike.province,
  //     distance: hike.distance,
  //     elevation: hike.elevation,
  //   });
  // }
};
