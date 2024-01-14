import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);

  return <h1>dashboard</h1>;
};

export default Dashboard;
