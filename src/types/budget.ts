export type CategoryId = 'general' | 'food' | 'transport' | 'shopping' | 'lifestyle';

export interface CategoryBudget {
  id: CategoryId;
  name: string;
  indonesianName: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  percentage: number; // e.g. 30 for 30%
  monthlyBudget: number; // Rp900.000
  spent: number; // Rp520.000
  remaining: number; // Rp380.000
  dailyAllowance: number; // calculated for today
  weekdayAllowance: number;
  weekendAllowance: number;
  todaySpent: number; // spent today
  todayRemaining: number; // remaining for today
  status: 'safe' | 'warning' | 'overbudget';
}

export interface Transaction {
  id: string;
  merchant: string;
  subtext: string;
  amount: number; // e.g. -28000
  category: CategoryId;
  categoryName: string;
  dateStr: string; // e.g. "Hari ini, 15.10"
  paymentMethod: string; // "Tabungan by Jago"
  serviceType: 'gofood' | 'goride' | 'transfer' | 'topup' | 'merchant' | 'bank' | 'cashback';
}

export interface Recommendation {
  id: string;
  categoryId: CategoryId;
  merchantName: string;
  itemName: string;
  price: number;
  rating: number;
  image?: string;
  badge?: string;
  reason: string;
  distance?: string;
}

export type SheetType = 'none' | 'category-detail' | 'reallocate' | 'recommendations' | 'pitch-guide';

export interface DemoState {
  currentMonth: string; // "September 2026"
  mainBalance: number; // Saldo GoPay (e.g. 3482000)
  totalMonthlyIncome: number; // Rp3.000.000 (Basis Pemasukan)
  totalMonthlyBudget: number; // Rp3.000.000 (Hasil Alokasi Pemasukan)
  totalSpent: number; // Rp1.820.000
  categories: CategoryBudget[];
  transactions: Transaction[];
  incomeTransactions: Transaction[];
  recommendations: Recommendation[];
  activeScreen: 'home' | 'report';
  activeReportTab: 'expense' | 'income';
  activeSheet: SheetType;
  selectedCategoryForDetail: CategoryId | null;
  overBudgetCandidate: CategoryId | null; // e.g. 'food'
  notificationToast: {
    visible: boolean;
    title: string;
    message: string;
    submessage?: string;
    type?: 'info' | 'success' | 'warning';
  } | null;
}

export interface BudgetContextType {
  state: DemoState;
  goToScreen: (screen: 'home' | 'report') => void;
  setReportTab: (tab: 'expense' | 'income') => void;
  openSheet: (sheet: SheetType, categoryId?: CategoryId) => void;
  closeSheet: () => void;
  simulateGoFoodTransaction: () => void;
  triggerOverBudgetDemo: () => void;
  reallocateBudget: (fromCategory: CategoryId, toCategory: CategoryId, amount: number) => boolean;
  updateCategoryPercentage: (categoryId: CategoryId, newPercentage: number) => void;
  updateMonthlyIncome: (newIncome: number) => void;
  resetDemoState: () => void;
  dismissToast: () => void;
  setSelectedCategory: (id: CategoryId | null) => void;
}
