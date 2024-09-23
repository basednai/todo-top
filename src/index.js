import * as css from "./styles.css";
import { renderProjects, appendProject } from "./renderProjects.js";
import { listall } from "./renderContent.js";
import { events } from "./eventListeners.js";
import { testItems } from "./testItems.js";


// establish test items, render content, render projects, set event listeners
const buildPage = () => {
    testItems()
    listall()
    renderProjects();
    events()
}

buildPage()