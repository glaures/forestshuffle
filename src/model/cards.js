import {allTreesInBaseGame} from "@/model/card-trees.js";
import {allBirdsInBaseGame} from "@/model/card-birds.js";
import {allButterfliesInBaseGame} from "@/model/card-butterflies.js";

const cards = [
    ...allTreesInBaseGame,
    ...allBirdsInBaseGame,
    ...allButterfliesInBaseGame
]

export default cards