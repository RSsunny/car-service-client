import { useQuery } from "@tanstack/react-query";

import useAuth from "../../Hooks/useAuth";
import BookingList from "./BookingList";
import axios from "axios";

const Booking = () => {
  const { user } = useAuth();
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["booking"],
    queryFn: () =>
      axios(`http://localhost:5000/booking?email=${user.email}`, {
        withCredentials: true,
      }).then((res) => res.data),
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>JPrice</th>
              <th>Conform</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((details) => (
              <BookingList key={details._id} details={details}></BookingList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
