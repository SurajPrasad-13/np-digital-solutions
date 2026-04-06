import { feedbacks } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating
              ? "fill-warning text-warning"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function Feedback() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Feedback</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">User Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="hidden sm:table-cell">Comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbacks.map((f) => (
                <TableRow key={f.id}>
                  <TableCell className="font-medium">{f.email}</TableCell>
                  <TableCell>
                    <StarRating rating={f.rating} />
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground max-w-xs truncate">
                    {f.comment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}
