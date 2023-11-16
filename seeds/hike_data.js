/**

 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const hikeData = [
  {
    id: 1,
    name: "Grouse Grind Proper",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "3.2km",
    elevation: "867m",
  },
  {
    id: 2,
    name: "Golden Ears Summit",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "26km",
    elevation: "1800m",
  },
  {
    id: 3,
    name: "Wedgemount Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "12km",
    elevation: "1160m",
  },
  {
    id: 4,
    name: "Elk Mountain",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "7km",
    elevation: "800m",
  },
  {
    id: 5,
    name: "Joffre Lakes",
    city: "Pemberton",
    province: "British Columbia",
    distance: "10km",
    elevation: "370m",
  },
  {
    id: 6,
    name: "Saint Mark's Summit",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "10km",
    elevation: "570m",
  },
  {
    id: 7,
    name: "Garibaldi Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "18.2km",
    elevation: "979m",
  },
  {
    id: 8,
    name: "The Lions Binkert Trail",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "16km",
    elevation: "1280m",
  },
  {
    id: 9,
    name: "Al's Habrich Ridge Trail",
    city: "Howe Sound",
    province: "British Columbia",
    distance: "7km",
    elevation: "440m",
  },
  {
    id: 10,
    name: "Elfin Lakes",
    city: "Garibaldi Provincial Park",
    province: "British Columbia",
    distance: "22km",
    elevation: "600m",
  },
  {
    id: 11,
    name: "Stawamus Chief",
    city: "Squamish",
    province: "British Columbia",
    distance: "5.8km",
    elevation: "657m",
  },
  {
    id: 12,
    name: "Burke North Summit",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "24km",
    elevation: "1273m",
  },
  {
    id: 13,
    name: "Coquitlam Lake View Trail",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "610m",
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hikes_list").del();
  await knex("hikes_list").insert(hikeData);
  //   { id: 1, colName: "rowValue1" },
  //   { id: 2, colName: "rowValue2" },
  //   { id: 3, colName: "rowValue3" },
  // ]);
};
