import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
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
          <Label htmlFor="subject">Subject</Label>
          <Select>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="business">Business Partnership</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Please write your message here..."
            className="min-h-[150px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-sm">
            Your information is protected and will only be used to respond to your inquiry.
            We aim to respond within 24-48 business hours.
          </p>
          <Button
            type="submit"
            className="w-min font-bold hover:bg-gray-100 transition-colors"
            variant="outline"
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
}