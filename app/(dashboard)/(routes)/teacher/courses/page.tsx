import { Button } from "@/components/ui/button";
import Link from "next/link";

const TeacherPage = () => {
  return (
    <div>
      <Link href="/teacher/create">
        <Button>
          New course
        </Button>
      </Link>
    </div>
  );
};

export default TeacherPage;
