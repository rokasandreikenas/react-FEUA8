import Button from "../components/Button";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { NEW_EVENT_PATH } from "../routes/routes";

const Home = () => {
  const events = JSON.parse(localStorage.getItem("event")) || [];
  const navigate = useNavigate();

  return (
    <div>
      <div className="event-top-container">
        <h1>All events</h1>
        <Button onClick={() => navigate(NEW_EVENT_PATH)}>
          Create new Event
        </Button>
      </div>
      {events.length > 0
        ? events.map((event) => (
            <div key={event.id} className="event-item">
              <EventCard event={event} />
            </div>
          ))
        : "There are no created events yet."}
    </div>
  );
};

export default Home;
