import {getFeaturedEvents} from "../dummy-data"
import Eventlist from "@/components/events/event-list";
import EventsSearch from "./events/events-search";
function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsSearch />
        <Eventlist  items={featuredEvents}/>
    </div>
  )
}

export default HomePage