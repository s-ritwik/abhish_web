import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import { calendarEvents } from "../data/siteContent.js";

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function monthLabel(date) {
  return date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

function buildMonthDays(activeDate) {
  const year = activeDate.getFullYear();
  const month = activeDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < firstDay.getDay(); i += 1) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(new Date(year, month, day));
  }

  return days;
}

function dateKey(date) {
  if (!date) return "";
  return date.toISOString().slice(0, 10);
}

export default function CalendarPage() {
  const [activeDate, setActiveDate] = useState(() => new Date());
  const days = useMemo(() => buildMonthDays(activeDate), [activeDate]);
  const eventsByDate = useMemo(() => {
    return calendarEvents.reduce((grouped, event) => {
      if (!event.date) return grouped;
      return { ...grouped, [event.date]: [...(grouped[event.date] || []), event] };
    }, {});
  }, []);
  const datedEvents = calendarEvents.filter((event) => event.date);

  const shiftMonth = (offset) => {
    setActiveDate((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  };

  return (
    <div className="page-stack">
      <section className="page-hero compact">
        <p className="section-eyebrow">Calendar</p>
        <h1>My Calendar</h1>
        <p>Lab schedule and upcoming events.</p>
      </section>

      <Section title="Schedule">
        <div className="calendar-shell">
          <div className="calendar-toolbar">
            <button type="button" onClick={() => shiftMonth(-1)} aria-label="Previous month">
              Prev
            </button>
            <h3>{monthLabel(activeDate)}</h3>
            <button type="button" onClick={() => shiftMonth(1)} aria-label="Next month">
              Next
            </button>
          </div>
          <div className="calendar-grid">
            {weekdayLabels.map((label) => (
              <div className="calendar-weekday" key={label}>
                {label}
              </div>
            ))}
            {days.map((day, index) => {
              const key = dateKey(day);
              const events = eventsByDate[key] || [];
              return (
                <div className="calendar-day" key={day ? key : `blank-${index}`}>
                  {day ? <span>{day.getDate()}</span> : null}
                  {events.map((event) => (
                    <p key={event.id}>{event.title}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Upcoming Events">
        {datedEvents.length ? (
          <div className="event-list">
            {datedEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <p className="project-area">{event.date}</p>
                <h3>{event.title}</h3>
                <p>{[event.time, event.location].filter(Boolean).join(" | ")}</p>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="people-empty-card">
            <p>No dated calendar events have been added yet.</p>
          </div>
        )}
      </Section>
    </div>
  );
}
