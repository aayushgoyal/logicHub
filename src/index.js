import { generateEventsList } from  './js/events';
import { generateTab } from './js/tabs';

const eventList = document.querySelector('.events-list');

/**
 * Generate UI for Events List
 */
generateEventsList(eventList);

/**
 * Adding event-listeners to events
 */
Array.from(eventList.children).forEach(child => {
    child.addEventListener('click', generateTab.bind(child))
});



