"use client";
import {Menu} from "lucide-react"

import { Button } from "@/components/ui/button";
import { 
    Sheet, 
    SheetContent, 
    SheetTrigger 
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {
      setisMounted(true);
    }, []);
    
    if (!isMounted) null;

  return (
    <div>
        <Sheet>
        <   SheetTrigger >
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 p-0"> 
                <Sidebar />
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSidebar;