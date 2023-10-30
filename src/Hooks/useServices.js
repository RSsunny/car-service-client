import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useServices = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["services"],
        queryFn: () =>
         axios("http://localhost:5000/service").then((res) => res.data),
      });
    return { isPending, error, data}
};

export default useServices;