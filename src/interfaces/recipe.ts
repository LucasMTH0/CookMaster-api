export interface Recipe {
    _id?: String,
    name: String,
    category: String,
    description: String,
    ingredients: { type: [String] },
    prepare: { type: [String] },
    image: String,
    videoTutorial: String,
    idCreator: String,
    createdAt: Date
}