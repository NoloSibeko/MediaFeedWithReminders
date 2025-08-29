export type Post = {
  id: string;
  title: string;
  supplier: string;
  amountZar: number;
  thumbnailUrl: string;
  imageUrl: string;
  dueAt?: string; // ISO datetime; if within 24h, show "Remind me"
};

export const ALL_POSTS: Post[] = [
  {
    id: "1",
    title: "Cloud Services Retainer",
    supplier: "Thrive Business Solutions",
    amountZar: 12500.5,
    thumbnailUrl: "https://picsum.photos/id/1015/200/120",
    imageUrl: "https://picsum.photos/id/1015/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(), // +2h
  },
  {
    id: "2",
    title: "Recruitment Fees",
    supplier: "Connect HR",
    amountZar: 8900,
    thumbnailUrl: "https://picsum.photos/id/1025/200/120",
    imageUrl: "https://picsum.photos/id/1025/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 26).toISOString(), // +26h
  },
  {
    id: "3",
    title: "Engineering Bootcamp",
    supplier: "Dev Science",
    amountZar: 15200,
    thumbnailUrl: "https://picsum.photos/id/1035/200/120",
    imageUrl: "https://picsum.photos/id/1035/1200/720",
  },
  {
    id: "4",
    title: "Marketing Campaign Retainer",
    supplier: "Bright Agency",
    amountZar: 7400,
    thumbnailUrl: "https://picsum.photos/id/1045/200/120",
    imageUrl: "https://picsum.photos/id/1045/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 10).toISOString(), // +10h
  },
  {
    id: "5",
    title: "Office Supplies",
    supplier: "Stationery World",
    amountZar: 3200,
    thumbnailUrl: "https://picsum.photos/id/1055/200/120",
    imageUrl: "https://picsum.photos/id/1055/1200/720",
  },
  {
    id: "6",
    title: "Accounting Services",
    supplier: "LedgerPro",
    amountZar: 9800,
    thumbnailUrl: "https://picsum.photos/id/1065/200/120",
    imageUrl: "https://picsum.photos/id/1065/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 20).toISOString(), // +20h
  },
  {
    id: "7",
    title: "Team Building Retreat",
    supplier: "Adventure Co.",
    amountZar: 20500,
    thumbnailUrl: "https://picsum.photos/id/1075/200/120",
    imageUrl: "https://picsum.photos/id/1075/1200/720",
  },
  {
    id: "8",
    title: "Security Software License",
    supplier: "SecureSoft",
    amountZar: 4500,
    thumbnailUrl: "https://picsum.photos/id/1085/200/120",
    imageUrl: "https://picsum.photos/id/1085/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 3).toISOString(), // +3h
  },
  {
    id: "9",
    title: "Graphic Design Services",
    supplier: "Pixel Studio",
    amountZar: 5600,
    thumbnailUrl: "https://picsum.photos/id/1095/200/120",
    imageUrl: "https://picsum.photos/id/1095/1200/720",
  },
  {
    id: "10",
    title: "Corporate Training Program",
    supplier: "SkillUp",
    amountZar: 13400,
    thumbnailUrl: "https://picsum.photos/id/1105/200/120",
    imageUrl: "https://picsum.photos/id/1105/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 30).toISOString(), // +30h
  },
  {
    id: "11",
    title: "Cloud Hosting",
    supplier: "NetCloud",
    amountZar: 7200,
    thumbnailUrl: "https://picsum.photos/id/1115/200/120",
    imageUrl: "https://picsum.photos/id/1115/1200/720",
  },
  {
    id: "12",
    title: "Legal Consulting",
    supplier: "Law & Co.",
    amountZar: 15800,
    thumbnailUrl: "https://picsum.photos/id/1125/200/120",
    imageUrl: "https://picsum.photos/id/1125/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(), // +12h
  },
  {
    id: "13",
    title: "Catering Services",
    supplier: "Tasteful Events",
    amountZar: 6400,
    thumbnailUrl: "https://picsum.photos/id/1135/200/120",
    imageUrl: "https://picsum.photos/id/1135/1200/720",
  },
  {
    id: "14",
    title: "HR Compliance Audit",
    supplier: "Compliance Works",
    amountZar: 9300,
    thumbnailUrl: "https://picsum.photos/id/1145/200/120",
    imageUrl: "https://picsum.photos/id/1145/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(), // +5h
  },
  {
    id: "15",
    title: "Advertising Campaign",
    supplier: "MediaHouse",
    amountZar: 21000,
    thumbnailUrl: "https://picsum.photos/id/1155/200/120",
    imageUrl: "https://picsum.photos/id/1155/1200/720",
  },
  {
    id: "16",
    title: "Web App Development",
    supplier: "CodeWorks",
    amountZar: 45200,
    thumbnailUrl: "https://picsum.photos/id/1165/200/120",
    imageUrl: "https://picsum.photos/id/1165/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 15).toISOString(), // +15h
  },
  {
    id: "17",
    title: "Event Management",
    supplier: "PlanIt",
    amountZar: 17800,
    thumbnailUrl: "https://picsum.photos/id/1175/200/120",
    imageUrl: "https://picsum.photos/id/1175/1200/720",
  },
  {
    id: "18",
    title: "SEO Services",
    supplier: "RankUp Digital",
    amountZar: 8400,
    thumbnailUrl: "https://picsum.photos/id/1185/200/120",
    imageUrl: "https://picsum.photos/id/1185/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(), // +8h
  },
  {
    id: "19",
    title: "Photography Package",
    supplier: "Snap Studio",
    amountZar: 5600,
    thumbnailUrl: "https://picsum.photos/id/1195/200/120",
    imageUrl: "https://picsum.photos/id/1195/1200/720",
  },
  {
    id: "20",
    title: "Data Analytics Consulting",
    supplier: "InsightPro",
    amountZar: 27800,
    thumbnailUrl: "https://picsum.photos/id/1205/200/120",
    imageUrl: "https://picsum.photos/id/1205/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 22).toISOString(), // +22h
  },
  {
    id: "21",
    title: "Mobile App Maintenance",
    supplier: "AppFix",
    amountZar: 13400,
    thumbnailUrl: "https://picsum.photos/id/1215/200/120",
    imageUrl: "https://picsum.photos/id/1215/1200/720",
  },
  {
    id: "22",
    title: "UI/UX Redesign",
    supplier: "DesignHub",
    amountZar: 19800,
    thumbnailUrl: "https://picsum.photos/id/1225/200/120",
    imageUrl: "https://picsum.photos/id/1225/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(), // +28h
  },
  {
    id: "23",
    title: "Networking Equipment",
    supplier: "TechSupply",
    amountZar: 11200,
    thumbnailUrl: "https://picsum.photos/id/1235/200/120",
    imageUrl: "https://picsum.photos/id/1235/1200/720",
  },
  {
    id: "24",
    title: "Brand Strategy Workshop",
    supplier: "Visionary Co.",
    amountZar: 15200,
    thumbnailUrl: "https://picsum.photos/id/1245/200/120",
    imageUrl: "https://picsum.photos/id/1245/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString(), // +18h
  },
  {
    id: "25",
    title: "Content Marketing Package",
    supplier: "Storyline Media",
    amountZar: 9400,
    thumbnailUrl: "https://picsum.photos/id/1255/200/120",
    imageUrl: "https://picsum.photos/id/1255/1200/720",
  },
  {
    id: "26",
    title: "Customer Success Consulting",
    supplier: "EngagePro",
    amountZar: 21200,
    thumbnailUrl: "https://picsum.photos/id/1265/200/120",
    imageUrl: "https://picsum.photos/id/1265/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 4).toISOString(), // +4h
  },
  {
    id: "27",
    title: "Cybersecurity Audit",
    supplier: "ShieldTech",
    amountZar: 16200,
    thumbnailUrl: "https://picsum.photos/id/1275/200/120",
    imageUrl: "https://picsum.photos/id/1275/1200/720",
  },
  {
    id: "28",
    title: "Translation Services",
    supplier: "Linguo",
    amountZar: 7200,
    thumbnailUrl: "https://picsum.photos/id/1285/200/120",
    imageUrl: "https://picsum.photos/id/1285/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 16).toISOString(), // +16h
  },
  {
    id: "29",
    title: "Equipment Rental",
    supplier: "GearWorks",
    amountZar: 13400,
    thumbnailUrl: "https://picsum.photos/id/1295/200/120",
    imageUrl: "https://picsum.photos/id/1295/1200/720",
  },
  {
    id: "30",
    title: "Product Prototype Design",
    supplier: "Innovate Labs",
    amountZar: 29800,
    thumbnailUrl: "https://picsum.photos/id/1305/200/120",
    imageUrl: "https://picsum.photos/id/1305/1200/720",
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString(), // +6h
  },
];

export type Page = { items: Post[]; nextPage?: number };

const PAGE_SIZE_DEFAULT = 10;

// 600ms network delay, 10% error chance, avoid duplicates
export async function fetchPostsPaginated(
  page: number,
  pageSize: number = PAGE_SIZE_DEFAULT,
  takenIds: Set<string> = new Set()
): Promise<Page> {
  await new Promise(res => setTimeout(res, 600));

 const ERROR_RATE = 0.02; // 2% error
if (Math.random() < ERROR_RATE) throw new Error("Network error (simulated)");


  const start = (page - 1) * pageSize;
  const slice = ALL_POSTS.slice(start, start + pageSize).filter(p => !takenIds.has(p.id));
  const hasMore = start + pageSize < ALL_POSTS.length;

  return {
    items: slice,
    nextPage: hasMore ? page + 1 : undefined,
  };
}