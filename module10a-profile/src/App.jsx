import PilotCard from './PilotCard';

function App() {
  return (
    <div>
      <PilotCard
        name="Chuck Robinson"
        airline="United Airlines"
        ratings="Airbus A320, Boeing 737, Boeing 777"
        funfact="Chuck has flown over 10,000 hours and has a passion for aviation history."
        imageUrl="https://plus.unsplash.com/premium_photo-1661505014355-9b2db23156e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App;