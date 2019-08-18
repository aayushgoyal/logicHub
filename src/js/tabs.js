import { eventsData }  from '../const/eventsData.js';

const tabHeaderEl = document.querySelector('.tabs-group-row');
const tabsEl = document.querySelector('.tabs-data');

const tabs = [];

export const generateTab = (event) => {
 
   const selectedEventIndex = eventsData.findIndex((e) => e.id === event.target.id);

   if(selectedEventIndex > -1 && !eventsData[selectedEventIndex].isOpen) {
        eventsData[selectedEventIndex].isOpen = true;
        addTab();
   }

   function generateTabUniqueId() {
       return `${eventsData[selectedEventIndex].id}_tab`;
   }

   function generateCloseBtnUniqueId() {
        return `${eventsData[selectedEventIndex].id}_close`;
    }

   function removeTab(tab) {
        const tabIndex = tabs.findIndex((e) => e['tabId'] === tab['tabId']);

        tabs.splice(tabIndex, 1);
        eventsData[tab['eventIndex']].isOpen = false;
        tabHeaderEl.removeChild(document.getElementById(tab['tabId']));
   }

   function addTab() {
       const tabData = {
        'tabId':  generateTabUniqueId(),
        'closeBtnId': generateCloseBtnUniqueId(),
        'eventIndex': selectedEventIndex
       }
        tabs.push(tabData);
       
        generateTabUI(tabData);
        addEventListenerToClose();
        showData(tabData);
   }

   function generateTabUI(tabData) {
    tabHeaderEl.innerHTML += `<div class="tabHeader" id="${tabData.tabId}">${eventsData[tabData.eventIndex].name} <button id=${tabData.closeBtnId}>X</button></div>`;
   }

   function showData(tabData) {
      const data = eventsData[tabData['eventIndex']]['data'][0]['data'];

      const el = document.querySelectorAll('.tabHeader');

      el.forEach(e => {
          e.classList.remove('active');
      });

      document.getElementById(tabData['tabId']).classList.add('active');
     
      tabsEl.innerHTML = '';

      data.forEach((d) => {
        tabsEl.innerHTML += `<p>${d.content}</p>`
      })
   }

   function addEventListenerToClose() {
    tabs.forEach(tab => {
        const close = document.getElementById(tab.closeBtnId);
        close.addEventListener('click', removeTab.bind(this, tab));


        const opendTab = document.getElementById(tab.tabId);
        opendTab.addEventListener('click', showData.bind(this, tab));
    });
   }

 

}