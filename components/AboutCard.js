import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// Sous-composant pour une activité spécifique
const Activity = ({ activity }) => (
  <li className="about-activity">
    <ImPointRight /> {activity}
  </li>
);

// Composant principal
const AboutCard = ({ name, location, study, job, activities, quote, author }) => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
        Salut, je suis <span className="purple">{name}</span> du <span className="purple">{location}</span>.
          <br /> Je suis étudiant en dernière session 
          en programmation informatique à {study}.
          <br />
          <br />
          A part le codage, j'aime faire d'autres activités!
        </p>
        <ul>
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>
        <p style={{ color: "rgb(155 126 172)" }}>
          &quot;{quote}&quot;
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    </Card.Body>
  </Card>
);

// Utilisation du composant avec des props
const MyAboutCard = () => (
  <AboutCard
    name="Erraji Anass"
    location="Casablanca, Morroco"
    study="La Cité Collégial"
    job="Ottawa"
    activities={["Football","Voyager","Natation"]}
  />
);

export default MyAboutCard;
