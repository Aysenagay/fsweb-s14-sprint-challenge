const db = require("../../data/dbConfig");

function getAll() {
  return db("task");
}
async function create(project) {
  const [insertedId] = await db("task").insert(project);
  const inserted = await db("task").where("task_id", insertedId).first();

  return inserted;
}
module.exports = {
  getAll,
  create,
};
