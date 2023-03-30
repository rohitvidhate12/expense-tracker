import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const DummyContent = [
  {
    id: "e1",
    title: "Grocery",
    amount: 94.12,
    date: new Date(2023, 3, 12),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 4, 21) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 8, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DummyContent);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
