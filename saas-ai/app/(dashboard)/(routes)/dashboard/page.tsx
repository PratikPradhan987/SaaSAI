import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const  DashboardPage = ( ) =>  {
  return (
    <>
      <p>DashBoard Page(Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}
export default DashboardPage

