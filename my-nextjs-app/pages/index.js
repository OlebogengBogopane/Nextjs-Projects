import {getFeaturedEvents} from "../dummy-data"
import Eventlist from "@/components/events/event-list";
function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="text-center">Welcome to the Event Planner</h1><br/>
        <Eventlist  items={featuredEvents}/>
    </div>
  )
}

export default HomePage