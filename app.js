/**
 * Goa Bus Timetable Data
 * 4 Core Routes with Weekday & Sunday schedules + Major Stops
 */
const BUS_ROUTES = {
  "panjim-margao": {
    name: "Panjim → Margao",
    weekday: [
      { depart: "06:30", arrive: "07:25", type: "KTCL Non-Stop", stops: ["Panjim KTC (06:30)", "Bambolim GMC (06:42)", "Cortalim (06:58)", "Verna IDC (07:08)", "Margao KTC (07:25)"] },
      { depart: "07:15", arrive: "08:15", type: "Express", stops: ["Panjim KTC (07:15)", "Bambolim GMC (07:28)", "Goa Velha (07:38)", "Cortalim (07:45)", "Verna (07:56)", "Nuvem (08:06)", "Margao KTC (08:15)"] },
      { depart: "08:00", arrive: "08:55", type: "KTCL AC Shuttle", stops: ["Panjim KTC (08:00)", "Bambolim GMC (08:12)", "Verna IDC (08:38)", "Margao KTC (08:55)"] },
      { depart: "09:00", arrive: "10:00", type: "Express", stops: ["Panjim KTC (09:00)", "Bambolim GMC (09:14)", "Cortalim (09:30)", "Verna (09:42)", "Nuvem (09:51)", "Margao KTC (10:00)"] },
      { depart: "10:30", arrive: "11:25", type: "KTCL AC Shuttle", stops: ["Panjim KTC (10:30)", "Bambolim GMC (10:42)", "Verna IDC (11:08)", "Margao KTC (11:25)"] },
      { depart: "12:15", arrive: "13:15", type: "Express", stops: ["Panjim KTC (12:15)", "Bambolim GMC (12:28)", "Cortalim (12:44)", "Verna (12:55)", "Nuvem (13:05)", "Margao KTC (13:15)"] },
      { depart: "14:00", arrive: "14:55", type: "KTCL Non-Stop", stops: ["Panjim KTC (14:00)", "Bambolim GMC (14:12)", "Verna IDC (14:38)", "Margao KTC (14:55)"] },
      { depart: "16:00", arrive: "17:05", type: "Express", stops: ["Panjim KTC (16:00)", "Bambolim GMC (16:15)", "Cortalim (16:32)", "Verna (16:45)", "Nuvem (16:55)", "Margao KTC (17:05)"] },
      { depart: "17:30", arrive: "18:30", type: "KTCL AC Shuttle", stops: ["Panjim KTC (17:30)", "Bambolim GMC (17:45)", "Verna IDC (18:12)", "Margao KTC (18:30)"] },
      { depart: "19:00", arrive: "20:00", type: "Express", stops: ["Panjim KTC (19:00)", "Bambolim GMC (19:14)", "Cortalim (19:30)", "Verna (19:42)", "Margao KTC (20:00)"] },
      { depart: "20:30", arrive: "21:25", type: "KTCL Shuttle", stops: ["Panjim KTC (20:30)", "Bambolim GMC (20:42)", "Cortalim (20:58)", "Margao KTC (21:25)"] }
    ],
    sunday: [
      { depart: "07:30", arrive: "08:25", type: "KTCL Shuttle", stops: ["Panjim KTC (07:30)", "Bambolim GMC (07:42)", "Cortalim (07:58)", "Margao KTC (08:25)"] },
      { depart: "09:30", arrive: "10:30", type: "Express", stops: ["Panjim KTC (09:30)", "Bambolim GMC (09:44)", "Cortalim (10:00)", "Verna (10:12)", "Margao KTC (10:30)"] },
      { depart: "12:00", arrive: "12:55", type: "KTCL Shuttle", stops: ["Panjim KTC (12:00)", "Bambolim GMC (12:12)", "Verna IDC (12:38)", "Margao KTC (12:55)"] },
      { depart: "15:00", arrive: "16:00", type: "Express", stops: ["Panjim KTC (15:00)", "Bambolim GMC (15:14)", "Cortalim (15:30)", "Verna (15:42)", "Margao KTC (16:00)"] },
      { depart: "18:00", arrive: "18:55", type: "KTCL Shuttle", stops: ["Panjim KTC (18:00)", "Bambolim GMC (18:12)", "Cortalim (18:28)", "Margao KTC (18:55)"] }
    ]
  },

  "panjim-mapusa": {
    name: "Panjim → Mapusa",
    weekday: [
      { depart: "06:45", arrive: "07:15", type: "KTCL Shuttle", stops: ["Panjim KTC (06:45)", "Betim / Mandovi Bridge (06:52)", "Porvorim O'Coqueiro (07:00)", "Guirim (07:08)", "Mapusa KTC (07:15)"] },
      { depart: "07:30", arrive: "08:05", type: "Express", stops: ["Panjim KTC (07:30)", "Alto Porvorim (07:45)", "Socorro (07:52)", "Guirim (07:58)", "Mapusa KTC (08:05)"] },
      { depart: "08:15", arrive: "08:45", type: "KTCL EV Shuttle", stops: ["Panjim KTC (08:15)", "Porvorim O'Coqueiro (08:28)", "Mapusa KTC (08:45)"] },
      { depart: "09:15", arrive: "09:50", type: "Express", stops: ["Panjim KTC (09:15)", "Alto Porvorim (09:30)", "Bastora Junction (09:42)", "Mapusa KTC (09:50)"] },
      { depart: "11:00", arrive: "11:30", type: "KTCL EV Shuttle", stops: ["Panjim KTC (11:00)", "Porvorim O'Coqueiro (11:14)", "Mapusa KTC (11:30)"] },
      { depart: "13:00", arrive: "13:35", type: "Express", stops: ["Panjim KTC (13:00)", "Alto Porvorim (13:15)", "Guirim (13:26)", "Mapusa KTC (13:35)"] },
      { depart: "15:15", arrive: "15:45", type: "KTCL EV Shuttle", stops: ["Panjim KTC (15:15)", "Porvorim O'Coqueiro (15:28)", "Mapusa KTC (15:45)"] },
      { depart: "17:00", arrive: "17:40", type: "Express", stops: ["Panjim KTC (17:00)", "Alto Porvorim (17:18)", "Guirim (17:30)", "Mapusa KTC (17:40)"] },
      { depart: "18:30", arrive: "19:05", type: "KTCL Shuttle", stops: ["Panjim KTC (18:30)", "Porvorim O'Coqueiro (18:45)", "Mapusa KTC (19:05)"] },
      { depart: "20:15", arrive: "20:45", type: "Express", stops: ["Panjim KTC (20:15)", "Alto Porvorim (20:30)", "Mapusa KTC (20:45)"] }
    ],
    sunday: [
      { depart: "08:00", arrive: "08:30", type: "KTCL Shuttle", stops: ["Panjim KTC (08:00)", "Porvorim O'Coqueiro (08:14)", "Mapusa KTC (08:30)"] },
      { depart: "10:30", arrive: "11:05", type: "Express", stops: ["Panjim KTC (10:30)", "Alto Porvorim (10:45)", "Guirim (10:56)", "Mapusa KTC (11:05)"] },
      { depart: "13:30", arrive: "14:00", type: "KTCL Shuttle", stops: ["Panjim KTC (13:30)", "Porvorim O'Coqueiro (13:44)", "Mapusa KTC (14:00)"] },
      { depart: "16:30", arrive: "17:05", type: "Express", stops: ["Panjim KTC (16:30)", "Alto Porvorim (16:45)", "Guirim (16:56)", "Mapusa KTC (17:05)"] },
      { depart: "19:30", arrive: "20:00", type: "KTCL Shuttle", stops: ["Panjim KTC (19:30)", "Porvorim O'Coqueiro (19:44)", "Mapusa KTC (20:00)"] }
    ]
  },

  "margao-vasco": {
    name: "Margao → Vasco",
    weekday: [
      { depart: "06:40", arrive: "07:35", type: "Express", stops: ["Margao KTC (06:40)", "Nuvem (06:50)", "Verna (07:02)", "Dabolim Airport (07:20)", "Chicalim (07:28)", "Vasco KTC (07:35)"] },
      { depart: "07:45", arrive: "08:35", type: "KTCL Shuttle", stops: ["Margao KTC (07:45)", "Verna IDC (08:02)", "Cortalim (08:12)", "Dabolim (08:24)", "Vasco KTC (08:35)"] },
      { depart: "09:10", arrive: "10:05", type: "Express", stops: ["Margao KTC (09:10)", "Nuvem (09:20)", "Verna (09:32)", "Dabolim Airport (09:50)", "Vasco KTC (10:05)"] },
      { depart: "11:20", arrive: "12:15", type: "Express", stops: ["Margao KTC (11:20)", "Nuvem (11:30)", "Verna (11:42)", "Dabolim Airport (12:00)", "Vasco KTC (12:15)"] },
      { depart: "13:45", arrive: "14:35", type: "KTCL Shuttle", stops: ["Margao KTC (13:45)", "Verna IDC (14:02)", "Dabolim (14:22)", "Vasco KTC (14:35)"] },
      { depart: "16:15", arrive: "17:15", type: "Express", stops: ["Margao KTC (16:15)", "Nuvem (16:26)", "Verna (16:40)", "Dabolim Airport (16:58)", "Chicalim (17:06)", "Vasco KTC (17:15)"] },
      { depart: "18:10", arrive: "19:00", type: "KTCL Shuttle", stops: ["Margao KTC (18:10)", "Verna IDC (18:28)", "Dabolim (18:48)", "Vasco KTC (19:00)"] },
      { depart: "19:45", arrive: "20:35", type: "Express", stops: ["Margao KTC (19:45)", "Verna (20:05)", "Dabolim Airport (20:22)", "Vasco KTC (20:35)"] }
    ],
    sunday: [
      { depart: "08:00", arrive: "08:55", type: "Express", stops: ["Margao KTC (08:00)", "Nuvem (08:10)", "Verna (08:22)", "Dabolim Airport (08:40)", "Vasco KTC (08:55)"] },
      { depart: "11:00", arrive: "11:50", type: "KTCL Shuttle", stops: ["Margao KTC (11:00)", "Verna (11:18)", "Dabolim (11:38)", "Vasco KTC (11:50)"] },
      { depart: "14:30", arrive: "15:25", type: "Express", stops: ["Margao KTC (14:30)", "Nuvem (14:40)", "Verna (14:52)", "Dabolim Airport (15:10)", "Vasco KTC (15:25)"] },
      { depart: "17:30", arrive: "18:20", type: "KTCL Shuttle", stops: ["Margao KTC (17:30)", "Verna (17:48)", "Dabolim (18:08)", "Vasco KTC (18:20)"] }
    ]
  },

  "panjim-vasco": {
    name: "Panjim → Vasco",
    weekday: [
      { depart: "07:00", arrive: "07:50", type: "KTCL Shuttle", stops: ["Panjim KTC (07:00)", "Bambolim GMC (07:12)", "Cortalim (07:26)", "Dabolim Airport (07:38)", "Chicalim (07:44)", "Vasco KTC (07:50)"] },
      { depart: "08:10", arrive: "09:05", type: "Express", stops: ["Panjim KTC (08:10)", "Bambolim GMC (08:22)", "Agassaim (08:32)", "Cortalim (08:38)", "Dabolim (08:52)", "Vasco KTC (09:05)"] },
      { depart: "09:30", arrive: "10:20", type: "KTCL AC Shuttle", stops: ["Panjim KTC (09:30)", "Bambolim GMC (09:42)", "Cortalim (09:56)", "Dabolim Airport (10:08)", "Vasco KTC (10:20)"] },
      { depart: "11:45", arrive: "12:35", type: "Express", stops: ["Panjim KTC (11:45)", "Bambolim GMC (11:58)", "Cortalim (12:12)", "Dabolim (12:24)", "Vasco KTC (12:35)"] },
      { depart: "14:15", arrive: "15:05", type: "KTCL AC Shuttle", stops: ["Panjim KTC (14:15)", "Bambolim GMC (14:27)", "Cortalim (14:41)", "Dabolim Airport (14:53)", "Vasco KTC (15:05)"] },
      { depart: "16:30", arrive: "17:25", type: "Express", stops: ["Panjim KTC (16:30)", "Bambolim GMC (16:44)", "Cortalim (17:00)", "Dabolim (17:12)", "Vasco KTC (17:25)"] },
      { depart: "18:00", arrive: "18:50", type: "KTCL Shuttle", stops: ["Panjim KTC (18:00)", "Bambolim GMC (18:12)", "Cortalim (18:26)", "Dabolim Airport (18:38)", "Vasco KTC (18:50)"] },
      { depart: "20:00", arrive: "20:50", type: "Express", stops: ["Panjim KTC (20:00)", "Bambolim GMC (20:12)", "Cortalim (20:26)", "Dabolim (20:38)", "Vasco KTC (20:50)"] }
    ],
    sunday: [
      { depart: "08:30", arrive: "09:20", type: "KTCL Shuttle", stops: ["Panjim KTC (08:30)", "Bambolim GMC (08:42)", "Cortalim (08:56)", "Dabolim Airport (09:08)", "Vasco KTC (09:20)"] },
      { depart: "11:30", arrive: "12:20", type: "Express", stops: ["Panjim KTC (11:30)", "Bambolim GMC (11:42)", "Cortalim (11:56)", "Dabolim (12:08)", "Vasco KTC (12:20)"] },
      { depart: "15:30", arrive: "16:20", type: "KTCL Shuttle", stops: ["Panjim KTC (15:30)", "Bambolim GMC (15:42)", "Cortalim (15:56)", "Dabolim Airport (16:08)", "Vasco KTC (16:20)"] },
      { depart: "18:30", arrive: "19:20", type: "Express", stops: ["Panjim KTC (18:30)", "Bambolim GMC (18:42)", "Cortalim (18:56)", "Dabolim (19:08)", "Vasco KTC (19:20)"] }
    ]
  }
};

// Application State
const state = {
  routeId: "panjim-margao",
  dayType: new Date().getDay() === 0 ? "sunday" : "weekday",
  stopQuery: ""
};

// DOM References
const routeSelect = document.getElementById("route-select");
const btnWeekday = document.getElementById("btn-weekday");
const btnSunday = document.getElementById("btn-sunday");
const stopSearch = document.getElementById("stop-search");
const clearSearchBtn = document.getElementById("clear-search");
const nextBusPanel = document.getElementById("next-bus-panel");
const timetableTitle = document.getElementById("timetable-title");
const busCount = document.getElementById("bus-count");
const timetableBody = document.getElementById("timetable-body");
const liveClock = document.getElementById("live-clock");

/**
 * Converts "HH:MM" 24-hour time into total minutes from midnight
 */
function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * Formats a minute difference into a readable countdown string
 */
function formatCountdown(diffMinutes) {
  if (diffMinutes === 0) return "Departing now";
  if (diffMinutes < 60) return `in ${diffMinutes} min`;
  const hrs = Math.floor(diffMinutes / 60);
  const mins = diffMinutes % 60;
  return mins === 0 ? `in ${hrs} hr` : `in ${hrs} hr ${mins} min`;
}

/**
 * Updates the live header clock
 */
function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  liveClock.textContent = formatted;
}

/**
 * Syncs day-type button active styling
 */
function updateDayButtons() {
  btnWeekday.classList.toggle("active", state.dayType === "weekday");
  btnSunday.classList.toggle("active", state.dayType === "sunday");
}

/**
 * Main render function: computes next bus, filters stops, and builds UI
 */
function renderApp() {
  const route = BUS_ROUTES[state.routeId];
  const schedule = route[state.dayType];
  const query = state.stopQuery.trim().toLowerCase();

  // Current time in minutes from midnight
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Filter buses if a stop search query is active
  const filteredBuses = schedule.filter((bus) => {
    if (!query) return true;
    return bus.stops.some((stop) => stop.toLowerCase().includes(query));
  });

  // Find the first bus in the filtered list that departs at or after currentMinutes
  const nextBus = filteredBuses.find(
    (bus) => timeToMinutes(bus.depart) >= currentMinutes
  );

  // 1. Render Next Bus Panel
  renderNextBusPanel(nextBus, route.name, currentMinutes, query);

  // 2. Render Full Timetable
  const dayLabel = state.dayType === "weekday" ? "Mon – Sat" : "Sunday";
  timetableTitle.textContent = `${route.name} (${dayLabel})`;
  busCount.textContent = `${filteredBuses.length} ${filteredBuses.length === 1 ? "bus" : "buses"}`;

  if (filteredBuses.length === 0) {
    timetableBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">
          No buses found stopping at "<strong>${escapeHtml(state.stopQuery)}</strong>" on this route.
        </td>
      </tr>
    `;
    return;
  }

  timetableBody.innerHTML = filteredBuses
    .map((bus) => {
      const depMins = timeToMinutes(bus.depart);
      const isPast = depMins < currentMinutes;
      const isNext = nextBus && bus.depart === nextBus.depart;

      let rowClass = "";
      if (isNext) rowClass = "row-next";
      else if (isPast) rowClass = "row-past";

      const isShuttle = bus.type.toLowerCase().includes("shuttle");

      const stopsHtml = bus.stops
        .map((stop) => {
          const isMatch = query && stop.toLowerCase().includes(query);
          return `<span class="stop-chip ${isMatch ? "matched" : ""}">${escapeHtml(stop)}</span>`;
        })
        .join("");

      return `
        <tr class="${rowClass}">
          <td class="time-cell">
            ${bus.depart}
            ${isNext ? `<br><span class="next-tag">NEXT BUS</span>` : ""}
          </td>
          <td>
            <span class="service-badge ${isShuttle ? "shuttle" : ""}">
              ${escapeHtml(bus.type)}
            </span>
          </td>
          <td>
            <div class="stops-list">${stopsHtml}</div>
          </td>
          <td class="time-cell">${bus.arrive}</td>
        </tr>
      `;
    })
    .join("");
}

/**
 * Renders the top 'Next Bus' summary card
 */
function renderNextBusPanel(nextBus, routeName, currentMinutes, query) {
  if (!nextBus) {
    nextBusPanel.className = "next-bus-card no-service";
    const filterNote = query ? ` matching stop "${escapeHtml(state.stopQuery)}"` : "";
    nextBusPanel.innerHTML = `
      <span class="badge-next" style="background:#fee2e2;color:#991b1b;">Service Ended</span>
      <h3 style="margin-bottom:4px;">No more buses run today for ${escapeHtml(routeName)}${filterNote}</h3>
      <p style="font-size:0.9rem;color:#7f1d1d;">
        Check tomorrow's schedule or switch between Weekday and Sunday timetables above.
      </p>
    `;
    return;
  }

  const diffMinutes = timeToMinutes(nextBus.depart) - currentMinutes;
  const countdownText = formatCountdown(diffMinutes);

  nextBusPanel.className = "next-bus-card";
  nextBusPanel.innerHTML = `
    <div class="next-bus-header">
      <div>
        <span class="badge-next">Next Departure · ${escapeHtml(nextBus.type)}</span>
        <div class="next-time-display">${nextBus.depart} <span style="font-size:1rem;font-weight:500;color:var(--text-muted);">→ arrives ${nextBus.arrive}</span></div>
      </div>
      <div class="countdown-pill">${countdownText}</div>
    </div>
    <div class="next-stops-preview">
      <strong>Route Stops:</strong> ${nextBus.stops.map(escapeHtml).join(" &rarr; ")}
    </div>
  `;
}

/**
 * Basic HTML escaping for search input safety
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Event Listeners
routeSelect.addEventListener("change", (e) => {
  state.routeId = e.target.value;
  renderApp();
});

btnWeekday.addEventListener("click", () => {
  state.dayType = "weekday";
  updateDayButtons();
  renderApp();
});

btnSunday.addEventListener("click", () => {
  state.dayType = "sunday";
  updateDayButtons();
  renderApp();
});

stopSearch.addEventListener("input", (e) => {
  state.stopQuery = e.target.value;
  clearSearchBtn.hidden = state.stopQuery.length === 0;
  renderApp();
});

clearSearchBtn.addEventListener("click", () => {
  state.stopQuery = "";
  stopSearch.value = "";
  clearSearchBtn.hidden = true;
  renderApp();
});

// Initialize App & Refresh Every 15 Seconds
updateDayButtons();
updateClock();
renderApp();

setInterval(() => {
  updateClock();
  renderApp();
}, 15000);