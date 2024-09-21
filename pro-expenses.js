// addEventListener for Calculate Button
let count = 0;
document.getElementById("calculate").addEventListener("click", function () {
  count += 1;
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpenses = software + courses + internet;
  document.getElementById("total-expenses").innerText =
    totalExpenses.toFixed(2);

  const balance = income - totalExpenses;
  document.getElementById("balance").innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  // History
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-l-2 border-indigo-500";

  historyItem.innerHTML = `
    <p class="text-xs text-gray-500">Serial: ${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
            `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
// End!!!!

// addEventListener for Calculate Savings Button
document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    const savingPercentage = parseFloat(
      document.getElementById("savings").value
    );

    const expenses = software + courses + internet;
    const balance = income - expenses;

    const savingAmount = balance * (savingPercentage / 100);
    document.getElementById("savings-amount").innerText =
      savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;
    document.getElementById("remaining-balance").innerText =
      remainingBalance.toFixed(2);
  });
// End!!!!

// History Tab Functionality
const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  const assistantTab = document.getElementById("assistant-tab");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("expense-form").classList.add("hidden");
});
// End!!!!

// Assistant Tab Functionality

const assistantTab = document.getElementById("assistant-tab");
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
// End!!!!
