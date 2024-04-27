const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  await admin.connect();
  console.log("Admin Connecting...");

  console.log("\nCreating topic: [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("\nSuccessfully created topic: [rider-updates]");

  await admin.disconnect();
  console.log("\nDisconnecting Admin...");
}

init();
