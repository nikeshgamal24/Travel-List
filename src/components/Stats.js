export default function Stats({ items }) {
    if (items.length === 0) {
      return (
        <p className="stats">Please, add some items to your packing lists 🚀</p>
      );
    }
  
    //derived states
    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItem) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `👜You Have ${numItem} items on your list. and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
  