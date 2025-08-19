module.exports = {
  branches: [
    { name: "main", channel: "latest" },
    { name: "homol", channel: "frontend-homol", prerelease: "frontend-homol" },
    { name: "dev", channel: "frontend-dev", prerelease: "frontend-dev" },
  ],

  // Aqui definimos o formato da tag de acordo com a branch
  tagFormat: ({ branch, version }) =>
    branch.channel && branch.channel !== "latest"
      ? `v${version}-${branch.channel}`
      : `v${version}`,

  ci: true,

  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
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
