import {allTreesInBaseGame} from "@/model/card-trees.js";
import {allBirdsInBaseGame} from "@/model/card-birds.js";
import {allButterfliesInBaseGame} from "@/model/card-butterflies.js";
import {allOtherTopInBaseGame} from "@/model/card-others.js";
import {allPlantsInBaseGame} from "@/model/card-plants.js";
import {allMushroomsInBaseGame} from "@/model/card-mushrooms.js";
import {allAmphibiansInBaseGame} from "@/model/card-amphibians.js";
import {allInsectsInBaseGame} from "@/model/card-insects.js";
import {allPawedInBaseGame} from "@/model/card-pawed-animals.js";
import {allBatsInBaseGame} from "@/model/card-bats.js";

const cards = [
    ...allTreesInBaseGame,
    ...allBirdsInBaseGame,
    ...allButterfliesInBaseGame,
    ...allOtherTopInBaseGame,
    ...allPlantsInBaseGame,
    ...allMushroomsInBaseGame,
    ...allAmphibiansInBaseGame,
    ...allInsectsInBaseGame,
    ...allPawedInBaseGame,
    ...allBatsInBaseGame
]

export default cards