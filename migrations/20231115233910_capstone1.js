/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("hikes_list", function (table) {
    table.increments("id"); // pk, auto increment
    // table.binary("imagePath");
    table.string("imagePath");
    table.string("name");
    table.string("city");
    table.string("province");
    table.string("distance");
    table.string("elevation");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("hikes_list");
};
