import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowDown, faArrowsLeftRight,
    faArrowUp,
    faBars,
    faCaretLeft,
    faCaretUp, faCheck,
    faCircleMinus,
    faCirclePlus, faCross, faEdit, faListOl, faUserPlus,
    faWindowClose, faXmark
} from '@fortawesome/free-solid-svg-icons'

library.add(faCircleMinus)
library.add(faCirclePlus)
library.add(faWindowClose)
library.add(faCaretUp)
library.add(faCaretLeft)
library.add(faBars)
library.add(faEdit)
library.add(faUserPlus)
library.add(faListOl)
library.add(faCheck)
library.add(faXmark)
library.add(faArrowUp)
library.add(faArrowDown)
library.add(faArrowsLeftRight)

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default FontAwesomeIcon