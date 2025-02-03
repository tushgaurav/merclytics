import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WaitlistForm() {
  return (
    <form className="max-w-2xl">
      <div className="grid w-full gap-4 mt-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="John Doe" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="john@example.com" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="company">Company</Label>
          <Input type="text" id="company" placeholder="Acme Inc." />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="role">Role</Label>
          <Input type="text" id="role" placeholder="CEO" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-sm">
            Your information is secure and will only be used to keep you updated
            on Merclytics’ launch.
          </p>
          <Button
            type="submit"
            className="w-min text-branding-violet font-bold hover:bg-gray-300 transition-colors"
            variant="outline"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </form>
  );
}
