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
    difficulty: "Hard",
  },
  {
    id: 2,
    imagePath: "/images/golden-ears.jpeg",
    name: "Golden Ears Summit",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "26km",
    elevation: "1800m",
    difficulty: "Hard",
  },
  {
    id: 3,
    imagePath: "/images/mount-macfarlane.jpeg",
    name: "Wedgemount Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "12km",
    elevation: "1160m",
    difficulty: "Hard",
  },
  {
    id: 4,
    imagePath: "/images/elk-mount.jpeg",
    name: "Elk Mountain",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "7km",
    elevation: "800m",
    difficulty: "Medium",
  },
  {
    id: 5,
    imagePath: "/images/golden-ears.jpeg",
    name: "Joffre Lakes",
    city: "Pemberton",
    province: "British Columbia",
    distance: "10km",
    elevation: "370m",
    difficulty: "Easy",
  },
  {
    id: 6,
    imagePath: "/images/deeks-lake.jpeg",
    name: "Saint Mark's Summit",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "10km",
    elevation: "570m",
    difficulty: "Medium",
  },
  {
    id: 7,
    imagePath: "/images/crown-mountain.jpeg",
    name: "Garibaldi Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "18.2km",
    elevation: "979m",
    difficulty: "Medium",
  },
  {
    id: 8,
    imagePath: "/images/spencers-peak.jpeg",
    name: "The Lions Binkert Trail",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "16km",
    elevation: "1280m",
    difficulty: "Hard",
  },
  {
    id: 9,
    imagePath: "/images/three-brothers.jpeg",
    name: "Al's Habrich Ridge Trail",
    city: "Howe Sound",
    province: "British Columbia",
    distance: "7km",
    elevation: "440m",
    difficulty: "Easy",
  },
  {
    id: 10,
    imagePath: "/images/crown-mountain.jpeg",
    name: "Elfin Lakes",
    city: "Garibaldi Provincial Park",
    province: "British Columbia",
    distance: "22km",
    elevation: "600m",
    difficulty: "Medium",
  },
  {
    id: 11,
    imagePath: "/images/sea-to-sky.jpeg",
    name: "Stawamus Chief",
    city: "Squamish",
    province: "British Columbia",
    distance: "5.8km",
    elevation: "657m",
    difficulty: "Medium",
  },
  {
    id: 12,
    imagePath: "/images/tikwalus.jpeg",
    name: "Burke North Summit",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "24km",
    elevation: "1273m",
    difficulty: "Hard",
  },
  {
    id: 13,
    imagePath: "/images/needle-peak.jpeg",
    name: "Coquitlam Lake View Trail",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "610m",
    difficulty: "Medium",
  },
  {
    id: 14,
    imagePath: "/images/tommhoi.jpeg",
    name: "Crown Mountain",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "9.8km",
    elevation: "385m",
    difficulty: "Hard",
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
