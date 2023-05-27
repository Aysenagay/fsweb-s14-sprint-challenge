const db = require("../../data/dbConfig");

function getAll() {
  return db("resources");
}
async function create(project) {
  const [insertedId] = await db("resources").insert(project);
  const inserted = await db("resources")
    .where("resources_id", insertedId)
    .first();

  return inserted;
}
module.exports = {
  getAll,
  create,
};
