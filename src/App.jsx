// Import ProfileCard from the file you created.
import ProfileCard from "./01-components-jsx/practice/ProfileCard";

// App is the root component. main.jsx renders it to the page.
function App() {
  return (
    <div>
      <ProfileCard name="Abdi" age={20} job="Developer" city="London" />
      <ProfileCard name="Aden" age={26} job="Tester" city="London" />
      <ProfileCard name="James" age={19} job="Manager" city="London" />
      <ProfileCard name="John" age={30} job="Accountant" city="London" />
    </div>
  )
}

export default App;