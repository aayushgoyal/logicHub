import { eventsData }  from '../const/eventsData.js';

export const generateEventsList = function(element)  {

  function generateEventItem(eventItem) {
     return `
      <div class="event" id=${eventItem.id}>
        ${eventItem.name}
      </div>
     `
  }

  eventsData.forEach(eventItem => {
    element.innerHTML = element.innerHTML + (generateEventItem(eventItem));
  });

}