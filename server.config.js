module.exports = {
    apps: [{
        name: "nodejs-api-starter",
        script: "index.js",
        watch: true,
        ignore_watch: ["node_modules", ".git"],
        instances: 2,
        exec_mode: "cluster",
        env: {
            "NODE_ENV": "dev"
        },
        env_production: {
            "NODE_ENV": "prod"
        }
    }]
}
