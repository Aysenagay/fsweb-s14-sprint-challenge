const db = require("../../data/dbConfig");

function getAll() {
  return db("projects");
}
async function create(project) {
  const [insertedId] = await db("projects").insert(project);
  const inserted = await db("projects").where("project_id", insertedId).first();

  return inserted;
}
module.exports = {
  getAll,
  create,
};
