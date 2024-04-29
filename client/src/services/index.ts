import axios from "axios";


const getAllTask = async () => {
    return await axios.get("http://localhost:4000/tasks").then((res) => res.data);

    //dispatch(fetchTasksSuccess(result));
    //setLoading(false);
};

export { getAllTask }