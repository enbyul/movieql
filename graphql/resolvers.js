const nico = {
    name : "Nico",
    age : 11,
    gander :" f"
}

const resolvers = {
    Query : {
        person : () => nico
    }
}

export default resolvers;