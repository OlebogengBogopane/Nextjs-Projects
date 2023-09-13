import {getFeaturedEvents} from '../helpers/api-util'
import Eventlist from "@/components/events/event-list";

function HomePage(props) {
 

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
    },
    revalidate :1800
  }
}

export default HomePage