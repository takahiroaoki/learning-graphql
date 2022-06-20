const { authorizeWithGithub } = require("../auth")

module.exports = {
    postPhoto(parent, args) {
        var newPhoto = {
            id: photos.length + 1,
            ...args.input,
            created: new Date()
        }
        photos.push(newPhoto)
        return newPhoto
    },
    async githubAuth(parent, { code }, { db }) {
        // 1. Get data from GitHub
        let {
            message,
            access_token,
            avatar_url,
            login,
            name
        } = await authorizeWithGithub({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code
        })

        // 2. Error
        if (message) {
            throw new Error(message)
        }

        // 3. Bundle data into one object
        let latestUserInfo = {
            name,
            githubLogin: login,
            githubToken: access_token,
            avatar: avatar_url
        }

        // 4. Update info
        await db
            .collection('users')
            .replaceOne({ githubLogin: login }, latestUserInfo, { upsert: true })

        return { user: latestUserInfo, token: access_token }
    }
}