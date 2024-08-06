import Link from "next/link";
import { Button } from "./ui/button";
import { Bell, Bookmark, Home, Mail } from "lucide-react";

interface Props {
  className?: string;
}

const menuItems = [
  { title: "Home", icon: <Home /> },
  { title: "Notifications", icon: <Bell /> },
  { title: "Messages", icon: <Mail /> },
  { title: "Bookmarks", icon: <Bookmark /> },
] as const;

function MenuBar({ className }: Props) {
  return (
    <div className={className}>
      {menuItems.map(({ title, icon }, i) => {
        const Icon = icon.type;
        return (
          <Button
            key={i}
            variant="ghost"
            className="flex items-center justify-start gap-3"
            title={title}
            asChild
          >
            <Link href="/">
              <Icon />
              <span className="hidden lg:inline">{title}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default MenuBar;
