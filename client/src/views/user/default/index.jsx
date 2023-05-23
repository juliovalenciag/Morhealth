import MiniCalendar from "./../../../components/calendar/MiniCalendar";
import WeeklyRevenue from "./../../../views/user/default/components/WeeklyRevenue";
import TotalSpent from "./../../../views/user/default/components/TotalSpent";
import PieChartCard from "./../../../views/user/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "./../../../components/widget/Widget";
import CheckTable from "./../../../views/user/default/components/CheckTable";
import ComplexTable from "./../../../views/user/default/components/ComplexTable";
import DailyTraffic from "./../../../views/user/default/components/DailyTraffic";
import TaskCard from "./../../../views/user/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Porcentaje"}
          subtitle={"80%"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Peso"}
          subtitle={"60 kg"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Altura"}
          subtitle={"170 cm"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Agua"}
          subtitle={"2 lt"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Índice de masa corporal"}
          subtitle={"28.5"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Pasos"}
          subtitle={"3200"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
