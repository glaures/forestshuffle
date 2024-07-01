import {allTreesInBaseGame} from "@/model/card-trees.js";
import {allBirdsInBaseGame} from "@/model/card-birds.js";
import {allButterfliesInBaseGame} from "@/model/card-butterflies.js";
import {allOtherTopInBaseGame} from "@/model/card-other.js";

const cards = [
    ...allTreesInBaseGame,
    ...allBirdsInBaseGame,
    ...allButterfliesInBaseGame,
    ...allOtherTopInBaseGame
]

export default cards