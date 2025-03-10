module.exports = {
  apps: [
    {
      name: "Nuxt-test-bambit",
      exec_mode: "cluster",
      port: "3050",
      instances: "max", // Or a number of instances
      script: "./.output/server/index.mjs",
      args: "start",
    },
  ],
};
