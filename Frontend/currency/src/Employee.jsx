import { Link } from "react-router-dom";

function Employee() {
  return (
    <>
      
      <div className="absolute top-10vw left-0 right-0">
        {/* Wrap the button with Link */}
        <Link to="/Form">
          <button className="bg-blue-400 rounded outline-none m-3 p-3">
            Add Employee
          </button>
        </Link>
        <div
          className="flex flex-row gap-4 border-2 border-black p-5  overflow-y-scroll"
          style={{ width: "50vw" ,border:"outline-none"  , height:"80vh", overflow: "scroll" }}
        >
          <table className="h-auto" style={{ width: "inherit"   }}>
            <thead>
              <tr>
                <th className="w-1/4 text-left">First Name</th>
                <th className="w-1/4 text-left">Last Name</th>
                <th className="w-1/4 text-left">Employee Id</th>
                <th className="w-1/4 text-left">Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>Deepak </td>
                <td>Yadav</td>
                <td>101</td>
                <td>
                  <button className="m-1 bg-yellow-300 rounded outline-none p-2">
                    Update
                  </button>
                  <button className="m-1 bg-red-600 rounded outline-none p-2">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Siddhi </td>
                <td>Mishra</td>
                <td>101</td>
                <td>
                  <button className="m-1 bg-yellow-300 rounded outline-none p-2">
                    Update
                  </button>
                  <button className="m-1 bg-red-600 rounded outline-none p-2">
                    Delete
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default Employee;