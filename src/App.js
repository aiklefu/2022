import React, {useState, useRef} from 'react';
import DatePicker from "react-datepicker";
import { Tooltip } from "bootstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction'
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let tooltipInstance = null;
  const calendar = useRef();  
  const [entryData, setentryData] = useState({
    title: "",
    description: "",
    datetime: new Date()
  });
  const [search, setSearch] = useState("");

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.datetime}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  function handleEventClick(eventInfo) {
    if (window.confirm(`Are you sure you want to delete the event '${eventInfo.event.title}'`)) {
      disposeTooltip();
      eventInfo.event.remove()
    }
  }

  function handleAddEvent(event) {
    event.preventDefault();
    console.log(entryData);

    let calendarApi = calendar.current.getApi()

    if(entryData.title) {
      calendarApi.addEvent({
        id: new Date(),
        title: entryData.title,
        start: entryData.datetime,      
        allDay:true,
        description: entryData.description      
      })
      
      setentryData({
        title: "",
        description: "",
        datetime: new Date()
      });
      alert("New event has been added");    
    }
    else {
      alert("Please enter a title for this event");
    }
  }
  
  function handleMouseEnter(info) {
    console.log(info);    
    let display = info.event.title;

    if (info.event.extendedProps.description){
      display += ": " + info.event.extendedProps.description;
    }
    
      tooltipInstance = new Tooltip(info.el, {
        title: display,
        html: true,
        placement: "top",
        trigger: "hover",
        container: "body"      
      });

      tooltipInstance.show();    
  };

  function handleMouseLeave (info) {
    tooltipInstance = new Tooltip(info.el, {
        title: "",
        html: true,     
      });
    disposeTooltip();
  };

  function disposeTooltip() {
      if (tooltipInstance) {
        tooltipInstance.dispose();
        tooltipInstance = null;
      }
  }

  function handleSearchClick() {
    let calendarApi = calendar.current.getApi();
    var events = calendarApi.getEvents();
    var filterEvents = events;

    filterEvents.map((event) => {
      if (event.title.includes(search) || event.extendedProps.description.includes(search)) {
        return event.setProp("display", "block");
      }
      else {
         return event.setProp("display", "none");
      }
    });
  }

  return (
    <div>
      <header className="App-header">
       My Calendar
      </header>
      <div className="main-div">
        <form onSubmit={handleAddEvent}>
          <div className="row">
            <div className="col-25">
              <label>Title</label>
            </div>
            <div className="col-75">
              <input name="title" type="text" placeholder="Title here..." 
              value={entryData.title} onChange={(e) => setentryData({...entryData, title: e.target.value})}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Description</label>
            </div>
            <div className="col-75">
              <input name="Ddscription" type="text" placeholder="Description here..."
              value={entryData.description} onChange={(e) => setentryData({...entryData, description: e.target.value})}></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Date</label>
            </div>
            <div className="col-75">
              <DatePicker 
                onChange = {
                  date =>  setentryData({...entryData, datetime: date})                 
                }
                selected={entryData.datetime}
                dateFormat='dd/MM/yyyy'  
                minDate={new Date()}       
              />
            </div>
          </div>
          <div className="row">          
            <input type="submit" value="Add Event"/>
          </div>          
        </form>
      </div>
      
      <div className="search-div">        
        <div className="row">
          <div className="col-25">
              <label>Search</label>
            </div>
            <div className="col-75">
              <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
          </div>  
        </div>
        <div className="row">
          <input type="button" value="Search Event" onClick={handleSearchClick}></input>
        </div>  
        
      </div>
      
      <FullCalendar ref={calendar}
        plugins={[ dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"        
        eventContent={renderEventContent} 
        eventClick={handleEventClick}
        eventMouseEnter={handleMouseEnter}
        eventMouseLeave={handleMouseLeave}        
        />
    </div>    
  );
}

export default App;
