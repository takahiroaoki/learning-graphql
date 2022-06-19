const { ApolloServer } = require('apollo-server')
const { GraphQLScalarType } = require('graphql')

const typeDefs = `
    scalar DateTime
    enum PhotoCategory {
        SELFIE
        PORTRAIT
        ACTION
        LANDSCAPE
        GRAPHIC
    }
    type Photo {
        id: ID!
        url: String!
        name: String!
        category: PhotoCategory!
        description: String
        postedBy: User!
        taggedUsers: [User]!
        created: DateTime!
    }
    type User {
        githubLogin: ID!
        name: String
        avatar: String
        postedPhotos: [Photo]!
        inPhotos: [Photo]!
    }

    input PostPhotoInput {
        name: String!
        category: PhotoCategory=PORTRAIT
        description: String
    }

    type Query {
        totalPhotos: Int!
        allPhotos: [Photo]!
    }

    type Mutation {
        postPhoto(
            input: PostPhotoInput!
        ): Photo!
    }
`

var users = [
    { "githubLogin": "mHattrup", "name": "user1" },
    { "githubLogin": "hogehoge", "name": "user2" },
    { "githubLogin": "brobro", "name": "user3" },
]

var photos = [
    {
        "id": "1",
        "name": "Dropping the Heart Chute",
        "description": "test test",
        "category": "ACTION",
        "githubUser": "mHattrup",
        "created": "3-28-1997"
    },
    {
        "id": "2",
        "name": "Enjoy my trip",
        "description": "test test test test",
        "category": "SELFIE",
        "githubUser": "hogehoge",
        "created": "1-1-1997"
    },
    {
        "id": "3",
        "name": "Gunbarrel 24",
        "description": "test test test test",
        "category": "LANDSCAPE",
        "githubUser": "brobro",
        "created": "3-12-2022"
    },
]

var tags = [
    { "photoID": "1", "userID": "mHattrup" },
    { "photoID": "2", "userID": "mHattrup" },
    { "photoID": "2", "userID": "hogehoge" },
    { "photoID": "2", "userID": "brobro" },
]

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
    },
    Mutation: {
        postPhoto(parent, args) {
            var newPhoto = {
                id: photos.length + 1,
                ...args.input,
                created: new Date()
            }
            photos.push(newPhoto)
            return newPhoto
        }
    },
    Photo: {
        url: parent => `https://test.com/img/${parent.id}.png`,
        postedBy: parent => {
            return users.find(u => u.githubLogin === parent.githubUser)
        },
        taggedUsers: parent => tags
            .filter(tag => tag.photoID === parent.id)
            .map(tag => tag.userID)
            .map(userID => users.find(u => u.githubLogin === userID))
    },
    User: {
        postedPhotos: parent => {
            return photos.filter(p => p.githubUser === parent.githubLogin)
        },
        inPhotos: parent => tags
            .filter(tag => tag.userID === parent.id)
            .map(tag => tag.photoID)
            .map(photoID => photos.find(p => p.id === photoID))
    },
    DateTime: new GraphQLScalarType({
        name: "DateTime",
        description: "A valid date time value",
        parseValue: value => new Date(value),
        serialize: value => new Date(value).toISOString(),
        parseLiteral: ast => ast.value
    })
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server
    .listen()
    .then(({ url }) => console.log(`GraphQL Service running on ${url}`))