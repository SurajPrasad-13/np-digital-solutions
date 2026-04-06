import { useState } from "react";
import { messages } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Messages() {
  const [selected, setSelected] = useState<typeof messages[0] | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Messages</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Inbox</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="w-[80px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium">{m.name}</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">{m.email}</TableCell>
                  <TableCell>{m.subject}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{m.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => setSelected(m)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.subject}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4 text-muted-foreground">
              <span>From: <span className="text-foreground">{selected?.name}</span></span>
              <span>{selected?.date}</span>
            </div>
            <p className="text-muted-foreground">{selected?.email}</p>
            <p className="pt-2 leading-relaxed">{selected?.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
