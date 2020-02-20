import React, { Component } from 'react'
import { messages } from '../config'

export default class CustomToolbar extends Component {
    render() {

    return (
      <div className="rbc-toolbar">
          <div className="rbc-btn-group">
            <button 
                onClick={() => this.props.onNavigate('TODAY')}>
                {messages.today}
            </button>
            <button 
                onClick={() => this.props.onNavigate('PREV')}>
                {messages.previous}
            </button>
            <button 
                onClick={() => this.props.onNavigate('NEXT')}>
                {messages.next}
            </button>
          </div>

          <div className="rbc-toolbar-label">
            {this.props.label}
          </div>

          <div className="rbc-btn-group">
            <button 
                className={`toolbar-btn ${this.props.view === "month" ? "rbc-active" : ""}`} 
                onClick={() => this.props.onView('month')}>
                {messages.month}
            </button>
            <button 
                className={`toolbar-btn ${this.props.view === "week" ? "rbc-active" : ""}`} 
                onClick={() => this.props.onView('week')}>
                {messages.week}
            </button>
            <button 
                className={`toolbar-btn ${this.props.view === "day" ? "rbc-active" : ""}`}
                onClick={() => this.props.onView('day')}>
                {messages.day}
            </button>
            <button 
                className={`toolbar-btn ${this.props.view === "agenda" ? "rbc-active" : ""}`}
                onClick={() => this.props.onView('agenda')}>
                {messages.agenda}
            </button>
          </div>
      </div>
    )
  }
}
