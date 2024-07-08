import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faCaretLeft,
    faCaretUp,
    faCircleMinus,
    faCirclePlus, faEdit, faListOl, faUserPlus,
    faWindowClose
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

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default FontAwesomeIcon