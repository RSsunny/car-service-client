const BookingList = ({ details }) => {
  const {
    _id,
    img,

    title,
    fristName,
    lastName,
    phone,
    email,
    massage,
    price,
  } = details;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3 ">
          <div className="avatar ">
            <div className="mask mask-squircle w-40 h-40 ">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl mb-5">{title}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>

      <td>Price: $ {price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Pending</button>
      </th>
    </tr>
  );
};

export default BookingList;
