import {
    beech,
    birch,
    douglasFir,
    horseChestnut,
    linden,
    silverFir,
    oak,
    sycamore,
    treeSaplings
} from "@/model/card-trees.js";
import {allBirdsBase} from "@/model/card-birds.js";

const cards = [
    beech, birch, douglasFir, horseChestnut, linden, oak, silverFir, sycamore, treeSaplings,
    ...allBirdsBase
]

export default cards