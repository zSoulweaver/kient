# Changelog


## v1.0.1-16

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-15...v1.0.1-16)

### 🩹 Fixes

- Update pusher app key ([#20](https://github.com/zSoulweaver/kient/pull/20))

## v1.0.1-15

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-14...v1.0.1-15)

### 🩹 Fixes

- Type validation error for profile_picture property (getClip) ([#19](https://github.com/zSoulweaver/kient/pull/19))

## v1.0.1-14

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-13...v1.0.1-14)

### 🚀 Enhancements

- Add banUser & unbanUser ([#16](https://github.com/zSoulweaver/kient/pull/16))

### 🩹 Fixes

- Update pusher app key ([#18](https://github.com/zSoulweaver/kient/pull/18))

### 🏡 Chore

- Remove npm publish from release script ([d545fc4](https://github.com/zSoulweaver/kient/commit/d545fc4))

## v1.0.1-13

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-12...v1.0.1-13)

### 🚀 Enhancements

- Include originating resource ID for events ([dae1f25](https://github.com/zSoulweaver/kient/commit/dae1f25))
- Add clip endpoints ([#12](https://github.com/zSoulweaver/kient/pull/12))
- Add reply param to sendMessage ([#14](https://github.com/zSoulweaver/kient/pull/14))

### 🩹 Fixes

- Import paths ([d1c3609](https://github.com/zSoulweaver/kient/commit/d1c3609))

### 💅 Refactors

- Remove redundant type ([05cc913](https://github.com/zSoulweaver/kient/commit/05cc913))
- Fix type issue with instance data ([75796af](https://github.com/zSoulweaver/kient/commit/75796af))
- Remove redundant property ([9e3e087](https://github.com/zSoulweaver/kient/commit/9e3e087))
- Move main class to root ([4464bc8](https://github.com/zSoulweaver/kient/commit/4464bc8))
- Move `GenericApiResponse` to endpoints dir ([8e845bb](https://github.com/zSoulweaver/kient/commit/8e845bb))
- Move `ErrorBase` to error dir ([4f7305c](https://github.com/zSoulweaver/kient/commit/4f7305c))
- Move `BaseInstance` to core dir ([9dff84a](https://github.com/zSoulweaver/kient/commit/9dff84a))
- Add typed api body builder ([cd95375](https://github.com/zSoulweaver/kient/commit/cd95375))

### 🏡 Chore

- Add npm publish action ([2aacd4c](https://github.com/zSoulweaver/kient/commit/2aacd4c))

## v1.0.1-12

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-11...v1.0.1-12)

### 🚀 Enhancements

- Add support for new 'x-kick-auth' header. ([#6](https://github.com/zSoulweaver/kient/pull/6))

## v1.0.1-11

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-10...v1.0.1-11)

### 🩹 Fixes

- Banned event doesn't contain expiry for perm bans ([4d59ec8](https://github.com/zSoulweaver/kient/commit/4d59ec8))
- Cjs build issues as `exit-hook` is esm module ([7eb68f7](https://github.com/zSoulweaver/kient/commit/7eb68f7))

### 🏡 Chore

- Add pre/release scripts ([aaeac3e](https://github.com/zSoulweaver/kient/commit/aaeac3e))

## v1.0.1-10

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-9...v1.0.1-10)

### 🩹 Fixes

- Thumbnail as optional field ([6e8b1fc](https://github.com/zSoulweaver/kient/commit/6e8b1fc))

## v1.0.1-9

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-8...v1.0.1-9)

### 💅 Refactors

- Add instance creation helper ([d672a39](https://github.com/zSoulweaver/kient/commit/d672a39))
- Simplify BaseInstance class ([628b94f](https://github.com/zSoulweaver/kient/commit/628b94f))
- Use new instance creation method ([8c345d5](https://github.com/zSoulweaver/kient/commit/8c345d5))
- Improve error handling ([ba37b92](https://github.com/zSoulweaver/kient/commit/ba37b92))
- Remove unused import ([ddd0906](https://github.com/zSoulweaver/kient/commit/ddd0906))

### 📖 Documentation

- Categorise errors ([e4e776a](https://github.com/zSoulweaver/kient/commit/e4e776a))
- Improve readability ([b5a7801](https://github.com/zSoulweaver/kient/commit/b5a7801))
- Clean + remove sources from properties ([7250afc](https://github.com/zSoulweaver/kient/commit/7250afc))
- Detail socket's info and events ([064ce73](https://github.com/zSoulweaver/kient/commit/064ce73))

### 🏡 Chore

- Remove explicit-member-accessibility rule ([c571a1e](https://github.com/zSoulweaver/kient/commit/c571a1e))

## v1.0.1-8

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-7...v1.0.1-8)

### 💅 Refactors

- Move events to client folder ([cb3a38e](https://github.com/zSoulweaver/kient/commit/cb3a38e))
- Use object as const for enums ([a2868ea](https://github.com/zSoulweaver/kient/commit/a2868ea))
- Add barrel files ([50e7516](https://github.com/zSoulweaver/kient/commit/50e7516))
- Export everything, what could go wrong ([50a34f2](https://github.com/zSoulweaver/kient/commit/50a34f2))

### 📖 Documentation

- Add typedoc back ([a58592e](https://github.com/zSoulweaver/kient/commit/a58592e))
- Fix typedoc sidebar ([ea1c306](https://github.com/zSoulweaver/kient/commit/ea1c306))
- Add frontmatter plugin ([10fff0c](https://github.com/zSoulweaver/kient/commit/10fff0c))
- Make typedocs look better ([2a84964](https://github.com/zSoulweaver/kient/commit/2a84964))
- Fix events example ([a369448](https://github.com/zSoulweaver/kient/commit/a369448))

### 🏡 Chore

- Add generated docs to gitignore ([a4fc663](https://github.com/zSoulweaver/kient/commit/a4fc663))
- Remove typedocs folder ([ec048f5](https://github.com/zSoulweaver/kient/commit/ec048f5))

## v1.0.1-7

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-6...v1.0.1-7)

### 🚀 Enhancements

- Scope events to channel sockets ([67160ec](https://github.com/zSoulweaver/kient/commit/67160ec))
- Improve event handling, scope back to client ([2f4fce8](https://github.com/zSoulweaver/kient/commit/2f4fce8))
- Add channel id to streamer banned event ([f6b4a8b](https://github.com/zSoulweaver/kient/commit/f6b4a8b))

### 🩹 Fixes

- Add chatroomId to chatroom events ([811ae71](https://github.com/zSoulweaver/kient/commit/811ae71))
- Instance data should be public ([b8d288f](https://github.com/zSoulweaver/kient/commit/b8d288f))
- Export correct private livestream events ([668fe98](https://github.com/zSoulweaver/kient/commit/668fe98))

### 📖 Documentation

- Add event guide ([6f7900a](https://github.com/zSoulweaver/kient/commit/6f7900a))
- Add missing sockets ([776bb70](https://github.com/zSoulweaver/kient/commit/776bb70))
- Add events to kient reference ([c147fe2](https://github.com/zSoulweaver/kient/commit/c147fe2))
- Add link to event list in event guide ([1d539d2](https://github.com/zSoulweaver/kient/commit/1d539d2))
- Add sockets to kient reference ([8d0e08f](https://github.com/zSoulweaver/kient/commit/8d0e08f))

### 🏡 Chore

- Add explicit member lint rule ([b007803](https://github.com/zSoulweaver/kient/commit/b007803))

## v1.0.1-6

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-5...v1.0.1-6)

### 🚀 Enhancements

- Add missing PollDeleteEvent ([1c50f33](https://github.com/zSoulweaver/kient/commit/1c50f33))
- Add missing channel events ([fee484e](https://github.com/zSoulweaver/kient/commit/fee484e))
- Pusher private channel auth flow ([2e2cdb6](https://github.com/zSoulweaver/kient/commit/2e2cdb6))
- Add private-livestream socket ([c7bd06f](https://github.com/zSoulweaver/kient/commit/c7bd06f))
- Private-channel and private-chatroom sockets ([dcd6e73](https://github.com/zSoulweaver/kient/commit/dcd6e73))
- Add private-channel events ([4b45364](https://github.com/zSoulweaver/kient/commit/4b45364))
- Add private-chatroom events ([a0dcd3b](https://github.com/zSoulweaver/kient/commit/a0dcd3b))

### 💅 Refactors

- Improve switch statement readability ([eb170c7](https://github.com/zSoulweaver/kient/commit/eb170c7))
- Improve class constructors ([d59e92f](https://github.com/zSoulweaver/kient/commit/d59e92f))

### 🏡 Chore

- Fix eslint and lint files ([b8969f4](https://github.com/zSoulweaver/kient/commit/b8969f4))

## v1.0.1-5

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-4...v1.0.1-5)

### 🚀 Enhancements

- Add more events to channel/chatroom ([78af8f6](https://github.com/zSoulweaver/kient/commit/78af8f6))

### 🩹 Fixes

- ValidationError in ChannelInstance Constructor ([#1](https://github.com/zSoulweaver/kient/pull/1))

### 💅 Refactors

- Use WsHandlers interface ([f7418db](https://github.com/zSoulweaver/kient/commit/f7418db))

### 📖 Documentation

- Add response instances - adds some reference pages for instances ([0d0d5a0](https://github.com/zSoulweaver/kient/commit/0d0d5a0))
- Add missing endpoints/instances ([6a29c50](https://github.com/zSoulweaver/kient/commit/6a29c50))

## v1.0.1-4

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-3...v1.0.1-4)

### 🚀 Enhancements

- Add message pinning ([4e3d38d](https://github.com/zSoulweaver/kient/commit/4e3d38d))
- API response instances ([0ba3601](https://github.com/zSoulweaver/kient/commit/0ba3601))
- Add channel instance ([f26faf5](https://github.com/zSoulweaver/kient/commit/f26faf5))
- Chatroom connect from channel instance ([6bd3402](https://github.com/zSoulweaver/kient/commit/6bd3402))

### 🩹 Fixes

- Impove channel response types ([cd4be2f](https://github.com/zSoulweaver/kient/commit/cd4be2f))
- Export PinMessageInput interface ([dc5a01c](https://github.com/zSoulweaver/kient/commit/dc5a01c))

### 💅 Refactors

- Improve error handling ([05d21e9](https://github.com/zSoulweaver/kient/commit/05d21e9))

### 🏡 Chore

- Add `dist` to tsconfig exclude ([99d5370](https://github.com/zSoulweaver/kient/commit/99d5370))
- Fix changelog commit gen ([e3795cf](https://github.com/zSoulweaver/kient/commit/e3795cf))

## v1.0.1-3

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-2...v1.0.1-3)

### 🚀 Enhancements

- Add chatroom disconnecting ([a688c4a](https://github.com/zSoulweaver/kient/commit/a688c4a))
- Chat message sender status check ([2064274](https://github.com/zSoulweaver/kient/commit/2064274))

### 💅 Refactors

- Fix spelling ([bb85576](https://github.com/zSoulweaver/kient/commit/bb85576))

### 🏡 Chore

- Fix badge colour in readme ([8228649](https://github.com/zSoulweaver/kient/commit/8228649))
- Remove vue dep ([82449a6](https://github.com/zSoulweaver/kient/commit/82449a6))

## v1.0.1-2

[compare changes](https://github.com/zSoulweaver/kient/compare/v1.0.1-1...v1.0.1-2)

### 🚀 Enhancements

- Add chat message sending ([c5b923f](https://github.com/zSoulweaver/kient/commit/c5b923f))
- Add chat message deletion - improve error handling ([2378f4b](https://github.com/zSoulweaver/kient/commit/2378f4b))

### 💅 Refactors

- Add generic api error class ([0169f9b](https://github.com/zSoulweaver/kient/commit/0169f9b))

### 🏡 Chore

- Add github to package.json ([a179ddd](https://github.com/zSoulweaver/kient/commit/a179ddd))

## v1.0.1-1


### 🚀 Enhancements

- Inital commit ([0c1fcd4](https://github.com/zSoulweaver/kient/commit/0c1fcd4))
- Add searching to docs ([5adf497](https://github.com/zSoulweaver/kient/commit/5adf497))
- Add cycletls ([3c115b1](https://github.com/zSoulweaver/kient/commit/3c115b1))
- Add channel livestream endpoint ([c3eef3a](https://github.com/zSoulweaver/kient/commit/c3eef3a))
- Add channel leaderboarrds endpoint ([208e4c2](https://github.com/zSoulweaver/kient/commit/208e4c2))
- Fix typedocs - sidebar plugin has issues - fixes exports for typedoc - upgrade packages - Slight loss in functionality ([56c86c0](https://github.com/zSoulweaver/kient/commit/56c86c0))
- Add new docs ([179c7d8](https://github.com/zSoulweaver/kient/commit/179c7d8))
- Add chatroom settings endpoint ([bc7fa87](https://github.com/zSoulweaver/kient/commit/bc7fa87))
- Add polls endpoint - adds generic API response interface ([d99b500](https://github.com/zSoulweaver/kient/commit/d99b500))
- Add authentication flow ([dd893a4](https://github.com/zSoulweaver/kient/commit/dd893a4))
- Add chat message events ([b87c115](https://github.com/zSoulweaver/kient/commit/b87c115))

### 🩹 Fixes

- Remove generated docs from git ([48cd52f](https://github.com/zSoulweaver/kient/commit/48cd52f))
- Deepkit/type issues - replaced with old lock file ([950a0ec](https://github.com/zSoulweaver/kient/commit/950a0ec))
- Hopefully fix pnpm on CF pages ([eaa2b67](https://github.com/zSoulweaver/kient/commit/eaa2b67))
- Fix v2? ([1bb0291](https://github.com/zSoulweaver/kient/commit/1bb0291))

### 💅 Refactors

- Fix some endpoint types ([3a68c4c](https://github.com/zSoulweaver/kient/commit/3a68c4c))
- Remove authed endpoints - too much work to setup with one time codes ([e49f068](https://github.com/zSoulweaver/kient/commit/e49f068))
- Move base endpoint class ([021da30](https://github.com/zSoulweaver/kient/commit/021da30))
- Clean up file & class names ([f2209c4](https://github.com/zSoulweaver/kient/commit/f2209c4))
- Allow for numbers in chatroom listen ([e656145](https://github.com/zSoulweaver/kient/commit/e656145))

### 📖 Documentation

- Improve documentation ([2990f18](https://github.com/zSoulweaver/kient/commit/2990f18))
- Add information on entry class ([27b0d95](https://github.com/zSoulweaver/kient/commit/27b0d95))
- Fix getting started link ([4e91e3d](https://github.com/zSoulweaver/kient/commit/4e91e3d))

### 🏡 Chore

- Gitignore generated docs ([258078c](https://github.com/zSoulweaver/kient/commit/258078c))
- Replace unbuild with tsup - needed for @deepkit/type compatibility ([ac9cf61](https://github.com/zSoulweaver/kient/commit/ac9cf61))
- Remove playground src from git ([094091a](https://github.com/zSoulweaver/kient/commit/094091a))
- Gitignore vitepress cache/dist ([7ff7142](https://github.com/zSoulweaver/kient/commit/7ff7142))
- Remove old docs - fix package scripts - remove typedoc ([83a845e](https://github.com/zSoulweaver/kient/commit/83a845e))
- Update deps ([0ae1224](https://github.com/zSoulweaver/kient/commit/0ae1224))
- Remove old jsdocs ([b9d8bfc](https://github.com/zSoulweaver/kient/commit/b9d8bfc))
- Update some docs stuff ([eddbd4b](https://github.com/zSoulweaver/kient/commit/eddbd4b))
- Update version for npm ([bac7a9c](https://github.com/zSoulweaver/kient/commit/bac7a9c))
- Update to MIT license ([eab8541](https://github.com/zSoulweaver/kient/commit/eab8541))
- Add readme ([53a152e](https://github.com/zSoulweaver/kient/commit/53a152e))
- Bump version ([859c810](https://github.com/zSoulweaver/kient/commit/859c810))
- Remove italic in readme ([7337da1](https://github.com/zSoulweaver/kient/commit/7337da1))
- Add changelogen ([a19811c](https://github.com/zSoulweaver/kient/commit/a19811c))

