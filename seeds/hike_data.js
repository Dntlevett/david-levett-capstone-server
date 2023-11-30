/**

 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const fs = require("fs");
const express = require("express");
const app = express();

const hikeData = [
  {
    id: 1,

    imagePath: "/images/mount-fromme.jpeg",
    name: "Grouse Grind",
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
    imagePath: "/images/tupper-lake.jpeg",
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
    imagePath: "../../images/joffre-amin.jpeg",
    name: "Joffre Lakes",
    city: "Pemberton",
    province: "British Columbia",
    distance: "10km",
    elevation: "370m",
    difficulty: "Easy",
  },
  {
    id: 6,
    imagePath: "/images/brunswick-mount2.jpeg",
    name: "Saint Mark's Summit",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "10km",
    elevation: "570m",
    difficulty: "Medium",
  },
  {
    id: 7,
    imagePath: "/images/duffey-lake-amin.jpeg",
    name: "Garibaldi Lake",
    city: "Whistler",
    province: "British Columbia",
    distance: "18.2km",
    elevation: "979m",
    difficulty: "Medium",
  },
  {
    id: 8,
    imagePath: "/images/lions.jpeg",
    name: "The Lions Binkert Trail",
    city: "West Vancouver",
    province: "British Columbia",
    distance: "16km",
    elevation: "1280m",
    difficulty: "Hard",
  },
  {
    id: 9,
    imagePath: "/images/lions.jpeg",
    name: "Al's Habrich Ridge Trail",
    city: "Howe Sound",
    province: "British Columbia",
    distance: "7km",
    elevation: "440m",
    difficulty: "Easy",
  },
  {
    id: 10,
    imagePath: "/images/duffey-lake-amin.jpeg",
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
    imagePath: "/images/widgeon-peak.jpeg",
    name: "Burke North Summit",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "24km",
    elevation: "1273m",
    difficulty: "Hard",
  },
  {
    id: 13,
    imagePath: "/images/clvt.jpeg",
    name: "Coquitlam Lake View Trail",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "610m",
    difficulty: "Medium",
  },
  {
    id: 14,
    imagePath: "/images/crown-mountain.jpeg",
    name: "Crown Mountain",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "9.8km",
    elevation: "385m",
    difficulty: "Hard",
  },
  {
    id: 15,
    imagePath: "/images/cheam-amin.jpeg",
    name: "Mount Cheam",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "9.5km",
    elevation: "700m",
    difficulty: "Medium",
  },
  {
    id: 16,
    imagePath: "/images/crest-mount-amin.jpeg",
    name: "Crest Mountain",
    city: "Strathcona",
    province: "British Columbia",
    distance: "11.6km",
    elevation: "1265m",
    difficulty: "Hard",
  },
  {
    id: 17,
    imagePath: "/images/flat-iron-amin.jpeg",
    name: "Flatiron Mountain",
    city: "Hope",
    province: "British Columbia",
    distance: "10km",
    elevation: "852m",
    difficulty: "Hard",
  },
  {
    id: 18,
    imagePath: "/images/frosty-mount-amin.jpeg",
    name: "Frosty Mountain",
    city: "Manning Park",
    province: "British Columbia",
    distance: "22km",
    elevation: "1160m",
    difficulty: "Hard",
  },
  {
    id: 19,
    imagePath: "/images/mount-mcGuire-amin.jpeg",
    name: "Mount McGuire",
    city: "Manning Park",
    province: "British Columbia",
    distance: "22km",
    elevation: "1160m",
    difficulty: "Hard",
  },
  {
    id: 20,

    imagePath: "/images/3-brothers.jpeg",
    name: "Three Brothers",
    city: "Manning Park",
    province: "British Columbia",
    distance: "21.5km",
    elevation: "480m",
    difficulty: "Medium",
  },
  {
    id: 21,
    imagePath: "/images/alder-flats.jpeg",
    name: "Alder Flats",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "11.4km",
    elevation: "445m",
    difficulty: "Medium",
  },
  {
    id: 22,
    imagePath: "/images/dennet-lake.jpeg",
    name: "Dennet lake",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "10.6km",
    elevation: "941",
    difficulty: "Hard",
  },
  {
    id: 23,
    imagePath: "/images/deeks-lake.jpeg",
    name: "Deeks lake",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "14.6km",
    elevation: "1031m",
    difficulty: "Hard",
  },
  {
    id: 24,
    imagePath: "/images/brunswick-mount.jpeg",
    name: "Brunswick Mountain",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "13.4km",
    elevation: "1555m",
    difficulty: "Hard",
  },
  {
    id: 25,
    imagePath: "/images/cypress-lake.jpeg",
    name: "Cypress Lake Trail",
    city: "Coquitlam",
    province: "British Columbia",
    distance: "8km",
    elevation: "470m",
    difficulty: "Medium",
  },
  {
    id: 26,
    imagePath: "/images/dewdney-grind.jpeg",
    name: "Dewdney Grind",
    city: "Mission",
    province: "British Columbia",
    distance: "9.3km",
    elevation: "1007m",
    difficulty: "Hard",
  },
  {
    id: 27,
    imagePath: "/images/gloria-lookout.jpeg",
    name: "Gloria Lookout Trail",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "1257m",
    difficulty: "Hard",
  },
  {
    id: 28,
    imagePath: "/images/goat-ridge.jpeg",
    name: "Goat Ridge",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "5.6km",
    elevation: "969m",
    difficulty: "Hard",
  },
  {
    id: 29,
    imagePath: "/images/gold-creek.jpeg",
    name: "Gold Creek Falls",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "5.5km",
    elevation: "20m",
    difficulty: "Easy",
  },
  {
    id: 30,
    imagePath: "/images/hanes-valley2.jpeg",
    name: "Hanes Valley Trail",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "16km",
    elevation: "1320m",
    difficulty: "Hard",
  },
  {
    id: 31,
    imagePath: "/images/harrison-grind.jpeg",
    name: "Harrison Grind",
    city: "Harrison Lake",
    province: "British Columbia",
    distance: "7km",
    elevation: "620m",
    difficulty: "Hard",
  },
  {
    id: 33,
    imagePath: "/images/pump-peak.jpeg",
    name: "Pump Peak",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "6.9km",
    elevation: "451m",
    difficulty: "Hard",
  },
  {
    id: 34,
    imagePath: "/images/long-island.jpeg",
    name: "Long Island",
    city: "Harrison Lake",
    province: "British Columbia",
    distance: "27km",
    elevation: "1087m",
    difficulty: "Hard",
  },
  {
    id: 35,
    imagePath: "/images/mount-fromme.jpeg",
    name: "Mount Fromme",
    city: "North Vancouver",
    province: "British Columbia",
    distance: "10km",
    elevation: "880m",
    difficulty: "Medium",
  },
  {
    id: 36,
    imagePath: "/images/mount-macfarlane.jpeg",
    name: "Mount MacFarlane",
    city: "Chilliwack",
    province: "British Columbia",
    distance: "17.1km",
    elevation: "1804m",
    difficulty: "Hard",
  },
  {
    id: 37,
    imagePath: "/images/mount-macfarlane.jpeg",
    name: "South Mount Nutt",
    city: "Maple Ridge",
    province: "British Columbia",
    distance: "10.6km",
    elevation: "1088m",
    difficulty: "Hard",
  },
  {
    id: 38,
    imagePath: "/images/slesse-memorial.jpeg",
    name: "Slesse Memorial",
    city: "Fraser Valley",
    province: "British Columbia",
    distance: "12km",
    elevation: "920m",
    difficulty: "Medium",
  },
  {
    id: 39,
    imagePath: "/images/skyline-trail-amin.jpeg",
    name: "Skyline Trail",
    city: "Manning Park",
    province: "British Columbia",
    distance: "19.8km",
    elevation: "971m",
    difficulty: "Hard",
  },
  {
    id: 40,
    imagePath: "/images/supergrind.jpeg",
    name: "Sumas Super Grind",
    city: "Abbotsford",
    province: "British Columbia",
    distance: "3.9km",
    elevation: "907m",
    difficulty: "Hard",
  },
  {
    id: 41,
    imagePath: "/images/tikwalus.jpeg",
    name: "Tikwalus Heritage Trail",
    city: "Spuzzum",
    province: "British Columbia",
    distance: "10.8km",
    elevation: "878m",
    difficulty: "Hard",
  },
  {
    id: 42,
    imagePath: "/images/tommhoi.jpeg",
    name: "Tomyhoi Peak",
    city: "Mount Baker Wilderness",
    province: "Washington, USA",
    distance: "21.1km",
    elevation: "1448m",
    difficulty: "Hard",
  },
  {
    id: 43,
    imagePath: "/images/wct-half.jpeg",
    name: "West Coast Trail",
    city: "Port Renfrew",
    province: "British Columbia",
    distance: "77.7km",
    elevation: "1707m",
    difficulty: "Hard",
  },
  {
    id: 44,
    imagePath: "/images/zoa-peak.jpeg",
    name: "Zoa Peak",
    city: "Coquihalla Summit",
    province: "British Columbia",
    distance: "8km",
    elevation: "600m",
    difficulty: "Medium",
  },
];
exports.seed = async function (knex) {
  await knex("hikes_list").del();
  await knex("hikes_list").insert(hikeData);
};
