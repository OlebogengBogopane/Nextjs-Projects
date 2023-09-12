import {getFeaturedEvents} from '../helpers/api-util'
import Eventlist from "@/components/events/event-list";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
        <Eventlist  items={props.events}/>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events:featuredEvents
    }
  }
}

export default HomePage