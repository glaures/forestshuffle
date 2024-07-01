import {allTreesInBaseGame} from "@/model/card-trees.js";
import {allBirdsInBaseGame} from "@/model/card-birds.js";
import {allButterfliesInBaseGame} from "@/model/card-butterflies.js";
import {allOtherTopInBaseGame} from "@/model/card-other.js";
import {allPlantsInBaseGame} from "@/model/card-plants.js";
import {allMushroomsInBaseGame} from "@/model/card-mushrooms.js";

const cards = [
    ...allTreesInBaseGame,
    ...allBirdsInBaseGame,
    ...allButterfliesInBaseGame,
    ...allOtherTopInBaseGame,
    ...allPlantsInBaseGame,
    ...allMushroomsInBaseGame
]

export default cards