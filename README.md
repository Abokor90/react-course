# React Course

My React practice lab. Each topic follows the same cycle:

**Learn → Small exercise → Review → Apply to the Expense Tracker**

The exercises live here. The concepts are then applied in my main project, the **Expense Tracker** (separate repo).

> **Status:** Phase 1 of my full-stack journey (React), in progress.

## Full-Stack Roadmap

- [x] JavaScript
- [ ] **React** (in progress)
- [ ] Node.js + Express
- [ ] PostgreSQL
- [ ] Authentication + Authorization
- [ ] Validation + Security
- [ ] Deployment
- [ ] Expense Tracker (full-stack), then a Real Estate application

## React Topics

| #   | Topic                                     | Level             | Status      |
| --- | ----------------------------------------- | ----------------- | ----------- |
| 1   | Components + JSX                          | Essential         | Done        |
| 2   | Props                                     | Essential         | Done        |
| 3   | State (`useState`)                        | Essential         | Done |
| 4   | Events                                    | Essential         |             |
| 5   | Forms + controlled inputs                 | Essential         |             |
| 6   | Lists + keys                              | Essential         |             |
| 7   | Conditional rendering                     | Essential         |             |
| 8   | Lifting state up + component organization | Essential         |             |
| 9   | `useEffect`                               | Essential         |             |
| 10  | Data fetching + loading/error states      | Essential         |             |
| 11  | React Router                              | Essential         |             |
| 12  | `useRef`, derived state                   | Useful            |             |
| 13  | Custom hooks                              | Useful            |             |
| 14  | Context API                               | Useful            |             |
| 15  | `useReducer`, `useMemo`, `useCallback`    | Advanced/Optional |             |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
react-course/
└── src/
    ├── 01-components-jsx/
    │   └── practice/
    │       └── ProfileCard.jsx   # Lessons 1 and 2 exercise
    ├── App.jsx                   # Renders the exercise I'm working on
    └── main.jsx                  # Entry point
```

Each topic gets its own numbered folder. `App.jsx` imports whichever exercise I'm currently practicing.

## Notes

### 1. Components + JSX

- A component is a function that returns JSX. Its name **must start with a capital letter**, because React uses the first letter to tell components (`<ProfileCard />`) from HTML tags (`<div>`).
- Use components **like tags**, never like function calls: `<ProfileCard />`, not `ProfileCard()`.
- JSX rules:
  - One root element (or a fragment `<>...</>`).
  - `className` instead of `class`.
  - Close every tag.
  - `{}` runs a JavaScript **expression**.
- Names in `export default`, `import`, and the JSX tag must match exactly (JavaScript is case-sensitive).
- Calling a method needs parentheses: `{name.toUpperCase()}`, not `{name.toUpperCase}`.

```jsx
// A component: capital letter, returns JSX
function ProfileCard() {
  const name = 'Abdi';

  return (
    <div className="card">
      {/* {} inserts a JavaScript expression */}
      <h2>Name: {name.toUpperCase()}</h2>
    </div>
  );
}

export default ProfileCard;
```

### 2. Props

- Props pass data from parent to child. They are **read-only**, and data flows one way (parent to child).
- Destructure props in the parameter list: `function ProfileCard({ name, age, job, city })`.
- Passing props: **strings use quotes, everything else uses `{}`**.
- `{}` runs JavaScript, so `date={2026-01-10}` is subtraction (it gives 2015). Write dates as strings: `date="2026-01-10"`.
- A prop's type matters when you calculate: `"20" + "20"` is `"2020"`, but `20 + 20` is `40`.
- A missing prop is `undefined`. Calling a method on it (`name.toUpperCase()`) crashes the whole page. The browser console (**F12**) shows the error.

```jsx
// Child: receives props
function ProfileCard({ name, age, job, city }) {
  return (
    <div className="card">
      <h2>Name: {name.toUpperCase()}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Parent: passes props (quotes for strings, {} for numbers)
<ProfileCard name="Abdi" age={20} job="Developer" city="London" />;
```

## Applied in the Expense Tracker

| Concept          | Where it was applied                                             |
| ---------------- | ---------------------------------------------------------------- |
| Components + JSX | `App` and `ExpenseItem` components                               |
| Props            | `ExpenseItem` receives `title`, `amount`, `category`, and `date` |

## Debugging Habits I'm Building

- When the page goes blank, open the browser console (**F12 → Console**) first.
- Read the error message before changing code.
- Check that names match exactly: file name, `export`, `import`, and tag.

### 4. Events

An event is something the user does (click, typing, hovering). In React you attach a handler by passing a function to an event prop on an element.
Event props are camelCase (onClick, not onclick) and take a function, not a string.

| Prop | Fires when | Useful data |
| --- | --- | --- |
| `onClick` | An element is clicked | `event.target.textContent` |
| `onChange` | An input's value changes | `event.target.value` — all the text so far |
| `onKeyDown` | A key is pressed | `event.key` — which key |
| `onMouseEnter` | The mouse moves onto an element | — |
| `onMouseLeave` | The mouse moves off an element | — |

- React calls your handler for you and passes it an event object. Add a parameter (event or e) to receive it.
- Never call the handler yourself in JSX: onClick={handleClick}, not onClick={handleClick()}.
- Events and props go on the existing element. They are attributes, not new elements, so the one-root-element rule isn't affected.

  ## Handlers that set a fixed value

Some events record a fact, so the handler sets a fixed value instead of flipping the old one:

```javascript
const [isHovered, setIsHovered] = useState(false);

// Entering always means "hovered", whatever the old value was
function handleMouseEnter() {
  setIsHovered(true);
}

// Leaving always means "not hovered"
function handleMouseLeave() {
  setIsHovered(false);
}

// The JSX shows different things depending on state

<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  {isHovered ? 'Hovered' : 'Not hovered'}
</div>;
```

- Use !value to flip only for real toggles (like a Paid/Unpaid button).
- Don't edit the page by hand (innerHTML) or store results on the event object. Change state, and the JSX shows the result.
- style takes an object, so it uses double braces: style={{ backgroundColor: "lightgray" }}. CSS names are camelCase.

# Inputs keep their own text

A plain <input> stores what you type itself, which is why the text appears even though no state was set. onChange only listens to it. Making React own that text is called a controlled input (next lesson).

# Naming habits

Name handlers after their event: handleKeyDown, handleChange, handleMouseEnter.
State and setter names should match: isHovered and setIsHovered.
