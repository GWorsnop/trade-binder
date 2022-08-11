function OthersTable(props) {
  const { cards } = props;

  return (
    <div className="flex flex-row justify-center border-r-2 w-screen">
      <hr />
      <table>
        <tbody>
          <tr>
            {cards.map((item) => {
              return (
                <td
                  key={item.item_id}
                  className="inline-block w-60 text-center"
                >
                  <img
                    className="image rounded-lg"
                    width="240px"
                    src={item.image}
                    alt={item.name}
                  ></img>
                  <div className="w-60 bg-blue-200 rounded-lg">
                    <p className="inline-block w-60 text-center font-semibold">
                      Value: €{item.price / 100} | Quantity: {item.quantity}
                    </p>
                    <br />
                    <button
                      className="btn bg-green-400 hover:bg-green-500 text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        // to be added request to trade functionality
                      }}
                    >
                      Request to Trade
                    </button>
                  </div>
                  <br />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OthersTable;
