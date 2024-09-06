import {allTrees} from "@/model/card-trees.js";
import {allBirds} from "@/model/card-birds.js";
import {allButterflies} from "@/model/card-butterflies.js";
import {allOtherTopInBaseGame} from "@/model/card-others.js";
import {allPlants} from "@/model/card-plants.js";
import {allMushrooms} from "@/model/card-mushrooms.js";
import {allAmphibians} from "@/model/card-amphibians.js";
import {allInsects} from "@/model/card-insects.js";
import {allPawed} from "@/model/card-pawed-animals.js";
import {allBats} from "@/model/card-bats.js";
import {allDeers} from "@/model/card-deer-cloven.js";
import {allShrubs} from "@/model/card-shrubs.js";

const cards = [
    ...allTrees,
    ...allBirds,
    ...allButterflies,
    ...allOtherTopInBaseGame,
    ...allPlants,
    ...allMushrooms,
    ...allAmphibians,
    ...allInsects,
    ...allPawed,
    ...allBats,
    ...allDeers,
    ...allShrubs
]

export default cards