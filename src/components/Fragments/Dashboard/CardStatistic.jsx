import { expensesStatistics } from "../../../data/expense";
import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
    

    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics" desc = <BarsDataset desc={expensesStatistics}/> />
    )
}

export default CardStatistic;