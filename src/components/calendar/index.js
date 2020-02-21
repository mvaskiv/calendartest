import React from 'react';

import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { timeGutter } from './const/timeGutter';

import '../../style/calendar.scss';

const localizer = momentLocalizer(moment)
const DraggableCalendar = withDragAndDrop(Calendar)
const formats = {
    dateFormat: 'D',
}
const components = {
    timeGutterHeader: timeGutter,
    // event: eventSlot,
}
class CalendarView extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DraggableCalendar
            formats={ formats }
            components={ components }
            localizer={ localizer }
            events={demoEvent}
            max={moment().hour(22).minute(0).toDate()}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            selectable
            style={{ height: 'auto', width: '80vw', maxWidth: '1170px' }} />
      </div>
    );
  }
}

const demoEvent = [
    {
        title: 'Event name',
        start: moment().hour(12).minute(0).toDate(),
        end: moment().hour(13).minute(0).toDate(),
        allDay: true
        // resource?: any,
    },
    {
        title: 'Event name',
        start: moment().hour(13).minute(0).toDate(),
        end: moment().hour(13).minute(30).toDate(),
    }
]

export default CalendarView;
