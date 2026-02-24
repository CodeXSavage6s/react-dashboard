//table.jsx
const transactions = [
  { id: "#1423", customer: "John Doe", date: "2024-06-15", status: "Completed", amount: 120.00 },
  { id: "#1422", customer: "Jane Smith", date: "2024-06-14", status: "Pending", amount: 89.99 },
  { id: "#1421", customer: "Michael Lee", date: "2024-06-13", status: "Failed", amount: 45.00 },
  { id: "#1420", customer: "Sarah Brown", date: "2024-06-12", status: "Completed", amount: 230.00 }
];
const TableRow = ({ item }) => {
  const statusClass = item.status.toLowerCase();

  return (
    <tr className="all text-center border-1 border-[var(--text-muted)]">
    
      <td className="">{item.customer}</td>
      <td className="">{item.date}</td>
      <td>
        <span className={`status ${statusClass} rounded-2xl`}>
          {item.status}
        </span>
      </td>
      <td className="p-2"><strong>${item.amount.toFixed(2)}</strong></td>
    </tr>
  );
};

export default function TransactionTable() {
  return (
  <div 
  className=" transaction-table text-[var(--text-primary)] bg-[var(--bg-card)] mt-[2vh] rounded-2xl  overflow-auto text-[10px]">
    <table
    className="box-border w-[100%]">
      <thead>
        <tr className="all border-1 border-[var(--text-muted)]">
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id} item={transaction} />
        ))}
      </tbody>
    </table>
  </div>
  );
}
