import React from 'react';

export const eventSlot = evt => (
    <div class={`rbc-event-content${evt.allDay ? ' rbc-allday-cell' : ''}`} title={ evt.title }>{ evt.title }</div>
)