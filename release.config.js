module.exports = {
  branches: [
    { name: "main" },
    { name: "homol", channel: "frontend-homol", prerelease: true },
    { name: "dev", channel: "frontend-dev", prerelease: true },
  ],
  tagFormat: "v${version}",
  ci: true,
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "chore", release: false },
          { type: "docs", release: false },
          { type: "style", release: false },
          { type: "test", release: false },
          { type: "ci", release: false },
          { type: "build", release: false },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "✨ Features" },
            { type: "fix", section: "🐛 Bug Fixes" },
            { type: "refactor", section: "♻️ Refactor" },
            { type: "perf", section: "⚡ Performance" },
          ],
        },
        writerOpts: {
          commitsSort: ["type", "scope", "subject"],
        },
      },
    ],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message: `release: \${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`,
      },
    ],
    "@semantic-release/github",
  ],
};
