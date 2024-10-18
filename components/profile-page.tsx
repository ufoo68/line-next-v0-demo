import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, User, Settings, LogOut } from "lucide-react"

export function ProfilePage({
  displayName = "",
  statusMessage = "",
  pictureUrl = ""
}: {
  displayName?: string;
  statusMessage?: string;
  pictureUrl?: string;
}) {
  const [isOpen, setIsOpen] = useState(false)

  const getInitials = (name: string) => {
    return name.trim().charAt(0).toUpperCase() || '?';
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
        <h1 className="text-xl font-bold">メッセージアプリ</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <User size={20} />
                プロフィール
              </a>
              <a href="#" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <MessageCircle size={20} />
                メッセージ
              </a>
              <a href="#" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <Settings size={20} />
                設定
              </a>
              <a href="#" className="flex items-center gap-2 text-lg font-semibold text-red-500" onClick={() => setIsOpen(false)}>
                <LogOut size={20} />
                ログアウト
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar className="w-20 h-20">
              <AvatarImage src={pictureUrl} alt={displayName} />
              <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-bold">{displayName || "Anonymous"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{statusMessage || "No status message"}</p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-muted text-muted-foreground text-center">
        <nav className="flex justify-center gap-4">
          <a href="#" className="hover:underline">利用規約</a>
          <a href="#" className="hover:underline">プライバシーポリシー</a>
          <a href="#" className="hover:underline">お問い合わせ</a>
        </nav>
      </footer>
    </div>
  )
}