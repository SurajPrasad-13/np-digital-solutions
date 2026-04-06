export const stats = {
  totalSubscribers: 12847,
  verifiedSubscribers: 9632,
  totalMessages: 3291,
  totalFeedback: 1854,
};

export const subscribers = [
  { id: 1, email: "alice@example.com", verified: true },
  { id: 2, email: "bob@startup.io", verified: true },
  { id: 3, email: "carol@design.co", verified: false },
  { id: 4, email: "dave@tech.dev", verified: true },
  { id: 5, email: "emma@agency.net", verified: false },
  { id: 6, email: "frank@mail.org", verified: true },
  { id: 7, email: "grace@corp.com", verified: true },
  { id: 8, email: "henry@web.io", verified: false },
  { id: 9, email: "iris@data.com", verified: true },
  { id: 10, email: "jack@studio.co", verified: true },
];

export const messages = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", subject: "Partnership Inquiry", content: "Hi, I'm interested in exploring a potential partnership between our companies. We've been following your growth and believe there could be synergies worth discussing. Would you be available for a call next week to explore this further? Looking forward to hearing from you.", date: "2024-03-15" },
  { id: 2, name: "Bob Smith", email: "bob@startup.io", subject: "Feature Request", content: "I've been using your platform for 6 months now and love it. However, I think adding bulk email import would save our team a lot of time. We currently have to add subscribers one by one which is quite tedious for larger lists.", date: "2024-03-14" },
  { id: 3, name: "Carol Davis", email: "carol@design.co", subject: "Bug Report", content: "I noticed that the unsubscribe link in the latest newsletter is broken. When clicking it, users get a 404 error. This is quite urgent as it affects compliance. Please fix this as soon as possible.", date: "2024-03-13" },
  { id: 4, name: "Dave Wilson", email: "dave@tech.dev", subject: "API Documentation", content: "Could you provide more detailed API documentation? Specifically, I'm looking for information on rate limits, webhook configurations, and batch operations. The current docs are a bit sparse.", date: "2024-03-12" },
  { id: 5, name: "Emma Brown", email: "emma@agency.net", subject: "Pricing Question", content: "We're considering upgrading to the enterprise plan. Could you provide a custom quote for 50,000+ subscribers? Also, do you offer any discounts for annual billing?", date: "2024-03-11" },
];

export const feedbacks = [
  { id: 1, email: "alice@example.com", rating: 5, comment: "Absolutely love the platform! The UI is intuitive and the analytics are incredibly detailed." },
  { id: 2, email: "bob@startup.io", rating: 4, comment: "Great tool overall. Would appreciate more template options for newsletters." },
  { id: 3, email: "carol@design.co", rating: 3, comment: "Decent service but the email editor could use some improvements." },
  { id: 4, email: "dave@tech.dev", rating: 5, comment: "Best newsletter platform I've used. The API is well-designed and reliable." },
  { id: 5, email: "emma@agency.net", rating: 2, comment: "Having some deliverability issues. Support response time could be faster." },
  { id: 6, email: "frank@mail.org", rating: 4, comment: "Solid platform with good automation features. Recommended for small teams." },
];

export const chartData = [
  { month: "Jan", subscribers: 4200, messages: 320 },
  { month: "Feb", subscribers: 5800, messages: 410 },
  { month: "Mar", subscribers: 6900, messages: 380 },
  { month: "Apr", subscribers: 8200, messages: 520 },
  { month: "May", subscribers: 10500, messages: 610 },
  { month: "Jun", subscribers: 12847, messages: 710 },
];
