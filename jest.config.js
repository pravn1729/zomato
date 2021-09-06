module.exports = {
    testEnvironment: "node",
    testMatch: ["<rootDir>/src/**/*.test.js"],
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    setupFiles: ["<rootDir>/src/config/dotenv-test.js"],
    testPathIgnorePatterns: ["./node_modules/"],
};