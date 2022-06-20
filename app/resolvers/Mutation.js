const fetch = require('node-fetch')
const { authorizeWithGithub } = require("../auth")

module.exports = {
    async postPhoto(parent, args, { db, currentUser }) {
        // 1. If not authorized
        if (!currentUser) {
            throw new Error('only an authorized user can post a photo')
        }

        // 2. Create photo data
        const newPhoto = {
            ...args.input,
            userID: currentUser.githubLogin,
            created: new Date()
        }

        // 3. Store photo data
        const { insertedIds } = await db.collection('photos').insert(newPhoto)
        newPhoto.id = insertedIds[0]

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
    },
    addFakeUsers: async (root, { count }, { db }) => {
        const randomUserApi = `https://randomuser.me/api/?results=${count}`
        const { results } = await fetch(randomUserApi).then(res => res.json())
        const users = results.map(r => ({
            githubLogin: r.login.username,
            name: `${r.name.first} ${r.name.last}`,
            avatar: r.picture.thumbnail,
            githubToken: r.login.sha1
        }))
        await db.collection('users').insert(users)
        return users
    },
    fakeUserAuth: async (parent, { githubLogin }, { db }) => {
        const user = await db.collection('users').findOne({ githubLogin })
        if (!user) {
            throw new Error(`Cannot find user with githubLogin: ${githubLogin}`)
        }

        return {
            token: user.githubToken,
            user,
        }
    }
}