import React, { createContext, useContext, useState, useEffect } from 'react';
import { CategoryBudget, CategoryId, Transaction, Recommendation, DemoState, BudgetContextType, AppScreen } from '../types/budget';

const INITIAL_CATEGORIES: CategoryBudget[] = [
  {
    id: 'food',
    name: 'Food',
    indonesianName: 'Makan & Minum',
    iconName: 'Utensils',
    iconBg: '#ff4d4f',
    iconColor: '#ffffff',
    percentage: 30,
    monthlyBudget: 900000,
    spent: 520000,
    remaining: 380000,
    dailyAllowance: 40000,
    weekdayAllowance: 40000,
    weekendAllowance: 50000,
    todaySpent: 0,
    todayRemaining: 40000,
    status: 'safe'
  },
  {
    id: 'general',
    name: 'General',
    indonesianName: 'Umum & Transfer',
    iconName: 'ArrowUpRight',
    iconBg: '#00aed6',
    iconColor: '#ffffff',
    percentage: 20,
    monthlyBudget: 600000,
    spent: 420000,
    remaining: 180000,
    dailyAllowance: 21000,
    weekdayAllowance: 20000,
    weekendAllowance: 25000,
    todaySpent: 10000,
    todayRemaining: 11000,
    status: 'safe'
  },
  {
    id: 'transport',
    name: 'Transport',
    indonesianName: 'Transportasi',
    iconName: 'Car',
    iconBg: '#00aa13',
    iconColor: '#ffffff',
    percentage: 20,
    monthlyBudget: 600000,
    spent: 380000,
    remaining: 220000,
    dailyAllowance: 24000,
    weekdayAllowance: 24000,
    weekendAllowance: 30000,
    todaySpent: 7000,
    todayRemaining: 17000,
    status: 'safe'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    indonesianName: 'Belanja & Tagihan',
    iconName: 'ShoppingBag',
    iconBg: '#f59e0b',
    iconColor: '#ffffff',
    percentage: 15,
    monthlyBudget: 450000,
    spent: 250000,
    remaining: 200000,
    dailyAllowance: 18000,
    weekdayAllowance: 16000,
    weekendAllowance: 22000,
    todaySpent: 0,
    todayRemaining: 18000,
    status: 'safe'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    indonesianName: 'Gaya Hidup & Hiburan',
    iconName: 'Shirt',
    iconBg: '#ec4899',
    iconColor: '#ffffff',
    percentage: 15,
    monthlyBudget: 450000,
    spent: 250000,
    remaining: 200000,
    dailyAllowance: 18000,
    weekdayAllowance: 16000,
    weekendAllowance: 22000,
    todaySpent: 0,
    todayRemaining: 18000,
    status: 'safe'
  }
];

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    merchant: 'WAROENG SOEJO',
    subtext: 'Makan Siang Enak',
    amount: 10000,
    category: 'food',
    categoryName: 'Makan & Minum',
    dateStr: 'Kemarin, 12.30',
    paymentMethod: 'Tabungan by Jago',
    serviceType: 'merchant'
  },
  {
    id: 'tx-2',
    merchant: 'IM3 / Tri',
    subtext: 'Isi Paket Data Freedom',
    amount: 15000,
    category: 'lifestyle',
    categoryName: 'Gaya Hidup',
    dateStr: 'Hari ini, 10.15',
    paymentMethod: 'Tabungan by Jago',
    serviceType: 'merchant'
  },
  {
    id: 'tx-3',
    merchant: 'Universitas Indonesia',
    subtext: 'GoRide Kampus UI Depok',
    amount: 7000,
    category: 'transport',
    categoryName: 'Transportasi',
    dateStr: 'Hari ini, 07.45',
    paymentMethod: 'Tabungan by Jago',
    serviceType: 'goride'
  },
  {
    id: 'tx-4',
    merchant: 'Daniel Adrian',
    subtext: 'Transfer ke BCA',
    amount: 30000,
    category: 'general',
    categoryName: 'Umum & Transfer',
    dateStr: 'Kemarin, 19.20',
    paymentMethod: 'Saldo GoPay',
    serviceType: 'transfer'
  }
];

const INITIAL_RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    categoryId: 'food',
    merchantName: 'Sei Sapi Kana - Dipatiukur',
    itemName: 'Paket Sei Sapi Sambal Matah',
    price: 18000,
    rating: 4.8,
    badge: 'Pas Sisa Budget',
    reason: 'Masih ada Rp18.000 buat makan hari ini. Pas tanpa over-budget!',
    distance: '1.2 km'
  },
  {
    id: 'rec-2',
    categoryId: 'food',
    merchantName: 'Ayam Geprek Mas Ganteng',
    itemName: 'Paket Geprek Original + Es Teh',
    price: 15000,
    rating: 4.7,
    badge: 'Hemat Rp3.000',
    reason: 'Hemat Rp3.000 dari kuota harianmu hari ini.',
    distance: '0.8 km'
  },
  {
    id: 'rec-3',
    categoryId: 'transport',
    merchantName: 'GoRide Diskon 20%',
    itemName: 'Perjalanan hemat s.d 4km',
    price: 12000,
    rating: 4.9,
    badge: 'Hemat Budget Transport',
    reason: 'Sisa budget transport hari ini Rp17.000, hemat buat pulang kuliah/kerja.',
    distance: 'Sekitar kamu'
  },
  {
    id: 'rec-4',
    categoryId: 'shopping',
    merchantName: 'Promo Tokopedia x GoPay',
    itemName: 'Voucher Cashback Belanja 15rb',
    price: 35000,
    rating: 4.9,
    badge: 'Cashback 15%',
    reason: 'Sesuai dengan sisa alokasi belanja minggu ini.',
    distance: 'Online'
  }
];

const INITIAL_INCOME_TRANSACTIONS: Transaction[] = [
  {
    id: 'inc-1',
    merchant: 'BCA Virtual Account',
    subtext: 'Top Up Saldo GoPay',
    amount: 2000000,
    category: 'general',
    categoryName: 'Pemasukan Utama',
    dateStr: '01 Sep, 09.15',
    paymentMethod: 'Bank Central Asia',
    serviceType: 'transfer'
  },
  {
    id: 'inc-2',
    merchant: 'PT Karya Digital',
    subtext: 'Gaji Bulanan',
    amount: 850000,
    category: 'general',
    categoryName: 'Transfer Masuk',
    dateStr: '02 Sep, 14.30',
    paymentMethod: 'BCA Direct',
    serviceType: 'transfer'
  },
  {
    id: 'inc-3',
    merchant: 'GoPay Promo Rewards',
    subtext: 'Cashback Belanja & Coins',
    amount: 100000,
    category: 'lifestyle',
    categoryName: 'Cashback & Promo',
    dateStr: '03 Sep, 10.00',
    paymentMethod: 'GoPay Coins',
    serviceType: 'merchant'
  },
  {
    id: 'inc-4',
    merchant: 'Tabungan by Jago',
    subtext: 'Bunga Bulanan Kantong Jago',
    amount: 50000,
    category: 'general',
    categoryName: 'Bunga Tabungan',
    dateStr: '03 Sep, 00.01',
    paymentMethod: 'Bank Jago',
    serviceType: 'bank'
  }
];

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DemoState>({
    currentMonth: 'September 2026',
    mainBalance: 3482000,
    totalMonthlyIncome: 3000000,
    totalMonthlyBudget: 3000000,
    totalSpent: 1820000,
    categories: INITIAL_CATEGORIES,
    transactions: INITIAL_TRANSACTIONS,
    incomeTransactions: INITIAL_INCOME_TRANSACTIONS,
    recommendations: INITIAL_RECOMMENDATIONS,
    activeScreen: 'home',
    activeReportTab: 'expense',
    activeSheet: 'none',
    selectedCategoryForDetail: null,
    overBudgetCandidate: null,
    notificationToast: null
  });

  // Auto dismiss toast after 5.5s
  useEffect(() => {
    if (state.notificationToast?.visible) {
      const timer = setTimeout(() => {
        setState(prev => ({
          ...prev,
          notificationToast: null
        }));
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [state.notificationToast]);

  const goToScreen = (screen: AppScreen) => {
    setState(prev => ({
      ...prev,
      activeScreen: screen,
      activeSheet: 'none'
    }));
  };

  const openSheet = (sheet: DemoState['activeSheet'], categoryId?: CategoryId) => {
    setState(prev => ({
      ...prev,
      activeSheet: sheet,
      selectedCategoryForDetail: categoryId !== undefined ? categoryId : prev.selectedCategoryForDetail
    }));
  };

  const closeSheet = () => {
    setState(prev => ({
      ...prev,
      activeSheet: 'none'
    }));
  };

  const setSelectedCategory = (id: CategoryId | null) => {
    setState(prev => ({
      ...prev,
      selectedCategoryForDetail: id
    }));
  };

  const dismissToast = () => {
    setState(prev => ({
      ...prev,
      notificationToast: null
    }));
  };

  const setReportTab = (tab: 'expense' | 'income') => {
    setState(prev => ({
      ...prev,
      activeReportTab: tab
    }));
  };

  const updateCategoryPercentage = (categoryId: CategoryId, newPercentage: number) => {
    setState(prev => {
      const clampedPct = Math.max(0, Math.min(100, Math.round(newPercentage)));
      const updatedCategories = prev.categories.map(cat => {
        if (cat.id === categoryId) {
          const newMonthlyBudget = Math.round((prev.totalMonthlyIncome * clampedPct) / 100);
          const newRemaining = Math.max(0, newMonthlyBudget - cat.spent);
          // 15 weekday (1.0) + 5 weekend (1.25) = 21.25 weighted days
          const newDaily = Math.round(newRemaining / 21.25);
          return {
            ...cat,
            percentage: clampedPct,
            monthlyBudget: newMonthlyBudget,
            remaining: newRemaining,
            dailyAllowance: newDaily,
            todayRemaining: Math.max(0, newDaily - cat.todaySpent)
          };
        }
        return cat;
      });

      const newTotalBudget = updatedCategories.reduce((acc, c) => acc + c.monthlyBudget, 0);

      return {
        ...prev,
        categories: updatedCategories,
        totalMonthlyBudget: newTotalBudget
      };
    });
  };

  const updateMonthlyIncome = (newIncome: number) => {
    setState(prev => {
      const clampedIncome = Math.max(500000, newIncome);
      const updatedCategories = prev.categories.map(cat => {
        const newMonthlyBudget = Math.round((clampedIncome * cat.percentage) / 100);
        const newRemaining = Math.max(0, newMonthlyBudget - cat.spent);
        const newDaily = Math.round(newRemaining / 21.25);
        return {
          ...cat,
          monthlyBudget: newMonthlyBudget,
          remaining: newRemaining,
          dailyAllowance: newDaily,
          todayRemaining: Math.max(0, newDaily - cat.todaySpent)
        };
      });

      const newTotalBudget = updatedCategories.reduce((acc, c) => acc + c.monthlyBudget, 0);

      return {
        ...prev,
        totalMonthlyIncome: clampedIncome,
        totalMonthlyBudget: newTotalBudget,
        categories: updatedCategories
      };
    });
  };

  // 1. Simulate GoFood transaction (Rp28.000)
  const simulateGoFoodTransaction = () => {
    setState(prev => {
      const foodAmount = 28000;
      const updatedCategories = prev.categories.map(cat => {
        if (cat.id === 'food') {
          const newSpent = cat.spent + foodAmount;
          const newRemaining = Math.max(0, cat.monthlyBudget - newSpent);
          const newTodaySpent = cat.todaySpent + foodAmount;
          const newTodayRemaining = Math.max(0, cat.dailyAllowance - newTodaySpent);
          const status: 'safe' | 'warning' | 'overbudget' =
            newSpent > cat.monthlyBudget ? 'overbudget' : newRemaining < 100000 ? 'warning' : 'safe';

          return {
            ...cat,
            spent: newSpent,
            remaining: newRemaining,
            todaySpent: newTodaySpent,
            todayRemaining: newTodayRemaining,
            status
          };
        }
        return cat;
      });

      const newTx: Transaction = {
        id: `tx-${Date.now()}`,
        merchant: 'GoFood • Nasi Kulit Syahdu',
        subtext: 'Paket Kulit Crispy + Sambal Bawang',
        amount: foodAmount,
        category: 'food',
        categoryName: 'Makan & Minum',
        dateStr: 'Baru saja',
        paymentMethod: 'Saldo GoPay',
        serviceType: 'gofood'
      };

      const newTotalSpent = prev.totalSpent + foodAmount;
      const newMainBalance = Math.max(0, prev.mainBalance - foodAmount);

      let toastTitle = 'Baru saja makan pakai GoFood 🍜';
      let toastMsg = '';
      let toastSub = '';
      let toastType: 'info' | 'success' | 'warning' = 'info';

      const foodCat = updatedCategories.find(c => c.id === 'food');
      if (foodCat) {
        if (foodCat.spent > foodCat.monthlyBudget) {
          toastTitle = 'Budget Makanan Terlampaui! ⚠️';
          toastMsg = `Total pengeluaran makanan sudah Rp${foodCat.spent.toLocaleString('id-ID')} (Lebih Rp${(foodCat.spent - foodCat.monthlyBudget).toLocaleString('id-ID')}).`;
          toastSub = 'Gunakan tombol "Atur ulang budget" untuk mengambil surplus kategori lain.';
          toastType = 'warning';
        } else if (foodCat.todayRemaining > 0) {
          toastTitle = 'Baru saja makan pakai GoFood 🍜';
          toastMsg = `Budget makanan hari ini tersisa Rp${foodCat.todayRemaining.toLocaleString('id-ID')}.`;
          toastSub = 'Masih aman untuk 1x jajan/makan ringan hari ini.';
          toastType = 'info';
        } else {
          toastTitle = 'Baru saja makan pakai GoFood 🍜';
          toastMsg = `Budget makanan hari ini sudah terpakai penuh (Rp0).`;
          toastSub = `Sisa alokasi bulanan makanan masih Rp${foodCat.remaining.toLocaleString('id-ID')}. Simpan kuota untuk besok!`;
          toastType = 'warning';
        }
      }

      return {
        ...prev,
        mainBalance: newMainBalance,
        totalSpent: newTotalSpent,
        categories: updatedCategories,
        transactions: [newTx, ...prev.transactions],
        notificationToast: {
          visible: true,
          title: toastTitle,
          message: toastMsg,
          submessage: toastSub,
          type: toastType
        }
      };
    });
  };

  // 2. Trigger Over-Budget State (Food exceeds budget by Rp30.000)
  const triggerOverBudgetDemo = () => {
    setState(prev => {
      const updatedCategories = prev.categories.map(cat => {
        if (cat.id === 'food') {
          const overSpent = 930000; // brief: spent 930.000 of 900.000
          return {
            ...cat,
            monthlyBudget: 900000,
            spent: overSpent,
            remaining: 0,
            todaySpent: 42000,
            todayRemaining: 0,
            status: 'overbudget' as const
          };
        }
        return cat;
      });

      return {
        ...prev,
        categories: updatedCategories,
        totalSpent: 1820000 + (930000 - 520000), // reflects over budget
        overBudgetCandidate: 'food',
        notificationToast: {
          visible: true,
          title: 'Budget Makanan Melebihi Batas ⚠️',
          message: 'Pengeluaran Makanan melebihi budget sebesar Rp30.000.',
          submessage: 'Gunakan fitur Atur Ulang Budget untuk mengambil dari kategori lain.',
          type: 'warning'
        }
      };
    });
  };

  // 3. Dynamic Reallocation: Move money from fromCategory to toCategory (Rp30.000)
  const reallocateBudget = (fromCategory: CategoryId, toCategory: CategoryId, amount: number) => {
    let success = false;

    setState(prev => {
      const source = prev.categories.find(c => c.id === fromCategory);
      if (!source || source.remaining < amount) {
        return prev;
      }

      success = true;
      const updatedCategories = prev.categories.map(cat => {
        if (cat.id === toCategory) {
          const newBudget = cat.monthlyBudget + amount;
          const newRemaining = Math.max(0, newBudget - cat.spent);
          const newPct = Math.round((newBudget / prev.totalMonthlyBudget) * 100);
          return {
            ...cat,
            monthlyBudget: newBudget,
            percentage: newPct,
            remaining: newRemaining,
            todayRemaining: Math.max(0, cat.dailyAllowance - cat.todaySpent + 10000),
            status: newRemaining >= 0 ? 'safe' as const : 'overbudget' as const
          };
        }
        if (cat.id === fromCategory) {
          const newBudget = cat.monthlyBudget - amount;
          const newRemaining = Math.max(0, newBudget - cat.spent);
          const newPct = Math.round((newBudget / prev.totalMonthlyBudget) * 100);
          return {
            ...cat,
            monthlyBudget: newBudget,
            percentage: newPct,
            remaining: newRemaining,
            status: newRemaining >= 0 ? 'safe' as const : 'overbudget' as const
          };
        }
        return cat;
      });

      const toCatName = prev.categories.find(c => c.id === toCategory)?.indonesianName || toCategory;
      const fromCatName = prev.categories.find(c => c.id === fromCategory)?.indonesianName || fromCategory;

      return {
        ...prev,
        categories: updatedCategories,
        overBudgetCandidate: null,
        activeSheet: 'none',
        notificationToast: {
          visible: true,
          title: 'Budget Berhasil Dipindahkan 🎉',
          message: `${toCatName} +Rp${amount.toLocaleString('id-ID')}`,
          submessage: `${fromCatName} -Rp${amount.toLocaleString('id-ID')} • Total budget bulanan tetap aman`,
          type: 'success'
        }
      };
    });

    return success;
  };

  // 4. Reset Demo State back to initial
  const resetDemoState = () => {
    setState({
      currentMonth: 'September 2026',
      mainBalance: 3482000,
      totalMonthlyIncome: 3000000,
      totalMonthlyBudget: 3000000,
      totalSpent: 1820000,
      categories: INITIAL_CATEGORIES,
      transactions: INITIAL_TRANSACTIONS,
      incomeTransactions: INITIAL_INCOME_TRANSACTIONS,
      recommendations: INITIAL_RECOMMENDATIONS,
      activeScreen: 'home',
      activeReportTab: 'expense',
      activeSheet: 'none',
      selectedCategoryForDetail: null,
      overBudgetCandidate: null,
      notificationToast: {
        visible: true,
        title: 'Demo Data Direset 🔄',
        message: 'Status budget & pengeluaran kembali ke kondisi awal evaluasi.',
        type: 'info'
      }
    });
  };

  return (
    <BudgetContext.Provider
      value={{
        state,
        goToScreen,
        setReportTab,
        openSheet,
        closeSheet,
        simulateGoFoodTransaction,
        triggerOverBudgetDemo,
        reallocateBudget,
        updateCategoryPercentage,
        updateMonthlyIncome,
        resetDemoState,
        dismissToast,
        setSelectedCategory
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};
