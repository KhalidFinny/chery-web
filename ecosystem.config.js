// File: ecosystem.config.js
module.exports = {
    apps: [{
      name: "chery-web",
      script: "./dist/server/entry.mjs", // Change this to your application's entry point
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "production",
      },
    }]
  }; 