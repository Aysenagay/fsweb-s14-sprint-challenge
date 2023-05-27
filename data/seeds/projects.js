/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();
  await knex("projects_resources").truncate();

  const defaultProjects = [
    {
      project_name: "Twitter Clone",
      project_description: "React kütüphanesi kullanarak form ekranı oluşturma",
    },
    {
      project_name: "Pizza Challenge",
      project_description: "Flutter ile kitaplık uygulaması yapma",
    },
  ];
  const defaultResources = [
    {
      resource_name: "Github",
      resource_description: "Github documentation page",
    },
    { resource_name: "Google", resource_description: "Flutter official page" },
  ];
  const defaultTasks = [
    {
      project_id: 1,
      task_description: "react form componenti oluştur",
      task_notes:
        "react bootstrap kütüphanesini indir, bootstrap form ekranını kullan",
    },
    {
      project_id: 1,
      task_description: "react form validasyonunu yap",
      task_notes: "forma girilen değerleri kontrol et",
    },
    {
      project_id: 1,
      task_description: "flutter arayüzü oluştur.",
      task_notes:
        "flutter componentlerinden grid ve card componentlerini kullan",
    },
  ];

  const defaultProjects_Resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
  ];
  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("projects_resources").insert(defaultProjects_Resources);
};
