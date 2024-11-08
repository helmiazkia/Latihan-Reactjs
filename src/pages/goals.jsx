import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      {/* Top Content Start */}
      <div className="mb-8">
      
      <h2 className="text-gray-500 text-lg mb-4">Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card/>
        <Card
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
        </div>
      </div>
      
   
      <div className="mb-8">
      <h2 className="text-gray-500 text-lg mb-4">Expenses Goals by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card desc="" />
          <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." />
          <Card desc="" />
          <Card desc="" />
          <Card desc="" />
          <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." />
        </div>
      </div>
      {/* Bottom Content End */}
    </MainLayout>
  );
};

export default GoalsPage;
